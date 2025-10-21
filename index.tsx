import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState<"ar" | "fr" | "en">("ar");

  const translations = {
    ar: {
      title: "📲 هل ترغب في تثبيت موقع موحوس ابتسام كتطبيق على هاتفك؟",
      install: "نعم، ثبّت الآن",
      later: "لاحقًا",
    },
    fr: {
      title: "📲 Souhaitez-vous installer le site de Mouhous Ibtissem comme application ?",
      install: "Installer maintenant",
      later: "Plus tard",
    },
    en: {
      title: "📲 Would you like to install Mouhous Ibtissem Legal Consultancy as an app?",
      install: "Install now",
      later: "Later",
    },
  };

  useEffect(() => {
    const lang = document.documentElement.lang as "ar" | "fr" | "en";
    setLanguage(lang || "ar");

    const seen = localStorage.getItem("installPromptDismissed");
    if (seen) return;

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setTimeout(() => setVisible(true), 5000); // يظهر بعد 5 ثواني
    });
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setVisible(false);
      localStorage.setItem("installPromptDismissed", "true");
    }
  };

  const handleLater = () => {
    setVisible(false);
    localStorage.setItem("installPromptDismissed", "true");
  };

  if (!visible) return null;
  const t = translations[language];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-6 max-w-md mx-4 text-center animate-fade-in">
        <h2 className="text-lg font-semibold mb-4 font-cairo">{t.title}</h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleInstall}
            className="bg-brand-gold text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition font-cairo"
          >
            {t.install}
          </button>
          <button
            onClick={handleLater}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition font-cairo"
          >
            {t.later}
          </button>
        </div>
      </div>
    </div>
  );
};

// أنيميشن بسيطة
const style = document.createElement("style");
style.innerHTML = `
@keyframes fade-in {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fade-in {
  animation: fade-in 0.3s ease-in-out;
}`;
document.head.appendChild(style);

// التطبيق الرئيسي + نافذة التثبيت
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <InstallPrompt />
  </React.StrictMode>
);
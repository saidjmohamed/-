
import { Language } from '../types';

const translationsData = {
  ar: {
    // Header & Nav
    nav_about: "من أنا",
    nav_services: "الخدمات",
    nav_arbitration: "التحكيم",
    nav_consultations: "الاستشارات",
    nav_articles: "المقالات",
    nav_contact: "اتصل بنا",

    // Hero Section
    hero_title: "الأستاذة موحوس ابتسام",
    hero_subtitle: "مستشارة قانونية ومحكّمة في القانون التجاري الدولي – بخبرة تفوق 20 سنة.",
    hero_cta_consult: "احجز استشارة الآن",
    hero_cta_contact: "اتصل بنا",

    // About Summary
    about_summary_title: "نبذة عني",
    about_summary_text: "محامية ومستشارة قانونية متخصصة في القانون التجاري الدولي والتحكيم، أقدم حلولاً قانونية استراتيجية للشركات والأفراد على حد سواء. شغفي هو تحقيق العدالة وحماية مصالح موكلي.",
    about_summary_cta: "المزيد عن المسار المهني",
    
    // Services Summary
    services_summary_title: "خدماتنا القانونية",
    service_1_title: "استشارات قانونية",
    service_1_desc: "تحليل دقيق للقضايا وتقديم استشارات لحماية مصالحكم.",
    service_2_title: "صياغة العقود",
    service_2_desc: "إعداد ومراجعة العقود التجارية الدولية لضمان حقوقكم.",
    service_3_title: "التحكيم الدولي",
    service_3_desc: "تمثيلكم في قضايا التحكيم التجاري أمام الهيئات الدولية.",
    service_4_title: "قانون الاستثمار",
    service_4_desc: "دعم المستثمرين في فهم البيئة القانونية وتأمين استثماراتهم.",
    service_5_title: "الملكية الفكرية",
    service_5_desc: "حماية العلامات التجارية وبراءات الاختراع وحقوق المؤلف.",
    
    // Testimonials
    testimonials_title: "آراء العملاء",
    testimonial_1: "“خبرة الأستاذة موحوس كانت حاسمة في قضيتنا. احترافية عالية ونتائج ممتازة.”",
    testimonial_1_author: "شركة استيراد وتصدير",
    testimonial_2: "“حصلت على استشارة قانونية واضحة ومفصلة ساعدتني في اتخاذ القرار الصحيح.”",
    testimonial_2_author: "مستثمر أجنبي",
    
    // Articles
    articles_title: "مقالات وتحليلات",
    article_cta: "اقرأ المزيد",
    
    // Footer
    footer_contact_info: "معلومات الاتصال",
    footer_quick_links: "روابط سريعة",
    footer_social_media: "تابعنا",

    // Contact Page
    contact_title: "تواصل معنا",
    contact_subtitle: "املأ النموذج أدناه أو تواصل معنا مباشرة عبر واتساب.",
    contact_name: "الاسم الكامل",
    contact_email: "البريد الإلكتروني",
    contact_subject: "الموضوع",
    contact_message: "رسالتك",
    contact_send: "إرسال الرسالة",

    // Consultations Page
    consultation_title: "حجز استشارة",
    consultation_step_1: "الخطوة 1: اختر نوع الاستشارة",
    consultation_type_1: "استشارة عامة (30 دقيقة)",
    consultation_type_2: "مراجعة عقد (60 دقيقة)",
    consultation_type_3: "تحليل قضية (90 دقيقة)",
    consultation_step_2: "الخطوة 2: أدخل معلوماتك",
    consultation_topic: "موضوع الاستشارة",
    consultation_next_step: "الخطوة التالية",
    consultation_step_3: "الخطوة 3: تأكيد المعلومات",
    consultation_preview_title: "ملخص طلب الاستشارة",
    consultation_preview_type: "نوع الاستشارة:",
    consultation_preview_name: "الاسم:",
    consultation_preview_email: "البريد:",
    consultation_preview_topic: "الموضوع:",
    consultation_step_4: "الخطوة 4: الدفع",
    consultation_payment_alert: "للمتابعة وتأكيد الموعد، يرجى إتمام عملية الدفع.",
    consultation_payment_cta: "الدفع الآن عبر CIB/EDAHABIA",
  },
  fr: {
    nav_about: "À propos",
    nav_services: "Services",
    nav_arbitration: "Arbitrage",
    nav_consultations: "Consultations",
    nav_articles: "Articles",
    nav_contact: "Contact",

    hero_title: "MOUHOUSS Ibtissem",
    hero_subtitle: "Conseillère juridique et arbitre en droit commercial international - Plus de 20 ans d'expérience.",
    hero_cta_consult: "Réserver une consultation",
    hero_cta_contact: "Contactez-nous",

    about_summary_title: "À propos de moi",
    about_summary_text: "Avocate et conseillère juridique spécialisée en droit commercial international et arbitrage, j'offre des solutions juridiques stratégiques aux entreprises et aux particuliers. Ma passion est de rendre justice et de protéger les intérêts de mes clients.",
    about_summary_cta: "En savoir plus sur mon parcours",

    services_summary_title: "Nos services juridiques",
    service_1_title: "Consultations Juridiques",
    service_1_desc: "Analyse précise des cas et conseils pour protéger vos intérêts.",
    service_2_title: "Rédaction de Contrats",
    service_2_desc: "Préparation et révision de contrats commerciaux internationaux.",
    service_3_title: "Arbitrage International",
    service_3_desc: "Représentation dans les affaires d'arbitrage commercial.",
    service_4_title: "Droit de l'Investissement",
    service_4_desc: "Soutien aux investisseurs pour sécuriser leurs investissements.",
    service_5_title: "Propriété Intellectuelle",
    service_5_desc: "Protection des marques, brevets et droits d'auteur.",
    
    testimonials_title: "Témoignages",
    testimonial_1: "“L'expertise de Maître Mouhouss a été cruciale pour notre affaire. Un grand professionnalisme et d'excellents résultats.”",
    testimonial_1_author: "Société d'import-export",
    testimonial_2: "“J'ai reçu des conseils juridiques clairs et détaillés qui m'ont aidé à prendre la bonne décision.”",
    testimonial_2_author: "Investisseur étranger",
    
    articles_title: "Articles et analyses",
    article_cta: "Lire la suite",
    
    footer_contact_info: "Informations de contact",
    footer_quick_links: "Liens rapides",
    footer_social_media: "Suivez-nous",

    contact_title: "Contactez-nous",
    contact_subtitle: "Remplissez le formulaire ci-dessous ou contactez-nous directement via WhatsApp.",
    contact_name: "Nom complet",
    contact_email: "Adresse e-mail",
    contact_subject: "Sujet",
    contact_message: "Votre message",
    contact_send: "Envoyer le message",

    consultation_title: "Réserver une consultation",
    consultation_step_1: "Étape 1 : Choisissez le type de consultation",
    consultation_type_1: "Consultation générale (30 min)",
    consultation_type_2: "Révision de contrat (60 min)",
    consultation_type_3: "Analyse de cas (90 min)",
    consultation_step_2: "Étape 2 : Entrez vos informations",
    consultation_topic: "Sujet de la consultation",
    consultation_next_step: "Étape suivante",
    consultation_step_3: "Étape 3 : Confirmez les informations",
    consultation_preview_title: "Résumé de votre demande",
    consultation_preview_type: "Type:",
    consultation_preview_name: "Nom:",
    consultation_preview_email: "Email:",
    consultation_preview_topic: "Sujet:",
    consultation_step_4: "Étape 4 : Paiement",
    consultation_payment_alert: "Pour continuer et confirmer le rendez-vous, veuillez effectuer le paiement.",
    consultation_payment_cta: "Payer maintenant via CIB/EDAHABIA",
  },
  en: {
    nav_about: "About Me",
    nav_services: "Services",
    nav_arbitration: "Arbitration",
    nav_consultations: "Consultations",
    nav_articles: "Articles",
    nav_contact: "Contact Us",

    hero_title: "MOUHOUSS Ibtissem",
    hero_subtitle: "Legal Consultant and Arbitrator in International Commercial Law - Over 20 years of experience.",
    hero_cta_consult: "Book a Consultation",
    hero_cta_contact: "Contact Us",

    about_summary_title: "About Me",
    about_summary_text: "A lawyer and legal consultant specializing in international commercial law and arbitration, I provide strategic legal solutions for both companies and individuals. My passion is to achieve justice and protect my clients' interests.",
    about_summary_cta: "More about my career path",

    services_summary_title: "Our Legal Services",
    service_1_title: "Legal Consultations",
    service_1_desc: "Precise analysis of cases and advice to protect your interests.",
    service_2_title: "Contract Drafting",
    service_2_desc: "Preparation and review of international commercial contracts.",
    service_3_title: "International Arbitration",
    service_3_desc: "Representation in commercial arbitration cases.",
    service_4_title: "Investment Law",
    service_4_desc: "Supporting investors to secure their investments.",
    service_5_title: "Intellectual Property",
    service_5_desc: "Protection of trademarks, patents, and copyrights.",

    testimonials_title: "Client Testimonials",
    testimonial_1: "“Ms. Mouhouss's expertise was crucial to our case. High professionalism and excellent results.”",
    testimonial_1_author: "Import-Export Company",
    testimonial_2: "“I received clear and detailed legal advice that helped me make the right decision.”",
    testimonial_2_author: "Foreign Investor",
    
    articles_title: "Articles and Analyses",
    article_cta: "Read More",

    footer_contact_info: "Contact Information",
    footer_quick_links: "Quick Links",
    footer_social_media: "Follow Us",

    contact_title: "Contact Us",
    contact_subtitle: "Fill out the form below or contact us directly via WhatsApp.",
    contact_name: "Full Name",
    contact_email: "Email Address",
    contact_subject: "Subject",
    contact_message: "Your Message",
    contact_send: "Send Message",

    consultation_title: "Book a Consultation",
    consultation_step_1: "Step 1: Choose consultation type",
    consultation_type_1: "General Consultation (30 min)",
    consultation_type_2: "Contract Review (60 min)",
    consultation_type_3: "Case Analysis (90 min)",
    consultation_step_2: "Step 2: Enter your information",
    consultation_topic: "Consultation Topic",
    consultation_next_step: "Next Step",
    consultation_step_3: "Step 3: Confirm Information",
    consultation_preview_title: "Consultation Request Summary",
    consultation_preview_type: "Type:",
    consultation_preview_name: "Name:",
    consultation_preview_email: "Email:",
    consultation_preview_topic: "Topic:",
    consultation_step_4: "Step 4: Payment",
    consultation_payment_alert: "To proceed and confirm the appointment, please complete the payment.",
    consultation_payment_cta: "Pay Now via CIB/EDAHABIA",
  }
};

export const translations: Record<Language, typeof translationsData.en> = translationsData;
export type TranslationKeys = keyof typeof translationsData.en;


import React from 'react';
import { useTranslations } from '../../hooks/useTranslations';
import { Link } from 'react-router-dom';

const ArticlesPage: React.FC = () => {
  const { t, getFontClass } = useTranslations();
  
  const articles = [
    { title: "The Future of International Commercial Arbitration", imageUrl: "https://picsum.photos/seed/article1/600/400", link: "/articles/1", category: "Arbitration" },
    { title: "Key Legal Considerations for Foreign Investors", imageUrl: "https://picsum.photos/seed/article2/600/400", link: "/articles/2", category: "Investment" },
    { title: "Navigating Cross-Border Contract Disputes", imageUrl: "https://picsum.photos/seed/article3/600/400", link: "/articles/3", category: "International Trade" },
    { title: "Intellectual Property in the Digital Age", imageUrl: "https://picsum.photos/seed/article4/600/400", link: "/articles/4", category: "Intellectual Property" },
  ];

  return (
    <div className={`py-20 bg-white ${getFontClass()}`}>
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-brand-blue text-center mb-12">{t('nav_articles')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
                 <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                    <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="p-6">
                        <p className="text-sm text-brand-gold font-semibold mb-2">{article.category}</p>
                        <h3 className="text-xl font-bold text-brand-blue mb-4">{article.title}</h3>
                        <Link to={article.link} className="font-semibold text-brand-blue hover:text-brand-gold transition-colors">
                        {t('article_cta')} &rarr;
                        </Link>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;

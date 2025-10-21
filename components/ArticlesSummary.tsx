
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';

const ArticleCard: React.FC<{ title: string; imageUrl: string; link: string }> = ({ title, imageUrl, link }) => {
  const { t } = useTranslations();
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-blue mb-4">{title}</h3>
        <Link to={link} className="font-semibold text-brand-gold hover:underline">
          {t('article_cta')} &rarr;
        </Link>
      </div>
    </div>
  );
};

const ArticlesSummary: React.FC = () => {
  const { t, getFontClass } = useTranslations();

  const articles = [
    { title: "The Future of International Commercial Arbitration", imageUrl: "https://picsum.photos/seed/article1/600/400", link: "/articles/1" },
    { title: "Key Legal Considerations for Foreign Investors", imageUrl: "https://picsum.photos/seed/article2/600/400", link: "/articles/2" },
    { title: "Navigating Cross-Border Contract Disputes", imageUrl: "https://picsum.photos/seed/article3/600/400", link: "/articles/3" },
  ];

  return (
    <section className={`py-20 bg-white ${getFontClass()}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">{t('articles_title')}</h2>
          <div className="w-24 h-1 bg-brand-gold mt-4 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} title={article.title} imageUrl={article.imageUrl} link={article.link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSummary;

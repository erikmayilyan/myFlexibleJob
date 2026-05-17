import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getArticles } from '../utils/articles';
import './Articles.css';

const Articles = () => {
  const navigate = useNavigate();
  const articles = getArticles();

  const truncateText = (text, maxLength = 200) => {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.substring(0, maxLength)} ... See More...`;
  };

  return (
    <div className='articles'>
      <h1>ARTICLES</h1>
      <p>Discover helpful articles tailored to refining your resume and cover letter to increase your chances of finding your dream job!</p>
      <div className='the-articles'>
        {articles.map((article) => (
          <div
            className='article'
            key={article.id}
            onClick={() => navigate(`/articles/${article.id}`)}
          >
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{truncateText(article.content)}</p>
            <a href={`/articles/${article.id}`}>LEARN MORE</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;

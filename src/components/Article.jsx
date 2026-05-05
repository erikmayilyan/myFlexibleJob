import React from 'react';
import { useParams } from "react-router-dom";
import { articles } from "./Articles";
import "./Article.css";

const Article = () => {
  const { id } = useParams();

  const article = articles.find(a => a.id === parseInt(id));

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className='article-one'>
      <h1 className='article-title'>{article.title}</h1>
      <div className='article-body'>
        <img className='article-image' src={article.image} alt="" />
        <p className='article-text'>{article.content}</p>
      </div>
    </div>
  );
};

export default Article;
import React, { useState } from 'react';
import { addArticle } from '../utils/articles';
import './AdminAddArticle.css';

const AdminAddArticle = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('');

    if (!title.trim() || !image.trim() || !content.trim()) {
      setMessage('Please fill in title, image, and content.');
      return;
    }

    addArticle({ title, image, content });
    setTitle('');
    setImage('');
    setContent('');
    setMessage('Article added successfully. It will appear on the Articles section.');
  };

  return (
    <div className="admin-add-article">
      <h2 className="admin-add-article-title">Add Article</h2>
      <form className="admin-add-article-form" onSubmit={handleSubmit}>
        <div className="admin-add-article-row">
          <label className="admin-add-article-label" htmlFor="articleTitle">
            Title
          </label>
          <input
            id="articleTitle"
            className="admin-add-article-input"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Article title"
          />
        </div>

        <div className="admin-add-article-row">
          <label className="admin-add-article-label" htmlFor="articleImage">
            Image
          </label>
          <input
            id="articleImage"
            className="admin-add-article-input"
            type="text"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            placeholder="/images/resume.png or image URL"
          />
        </div>

        <div className="admin-add-article-row">
          <label className="admin-add-article-label" htmlFor="articleContent">
            Content
          </label>
          <textarea
            id="articleContent"
            className="admin-add-article-textarea"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Article content"
            rows={8}
          />
        </div>

        <div className="admin-add-article-actions">
          <button type="submit" className="admin-add-article-submit">
            Add Article
          </button>
        </div>
      </form>
      {message && <p className="admin-add-article-message">{message}</p>}
    </div>
  );
};

export default AdminAddArticle;

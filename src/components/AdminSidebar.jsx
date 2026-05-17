import React from 'react';
import './Sidebar.css';

const AdminSidebar = ({ activePanel, onSelectPanel }) => {
  const linkClass = (panel) =>
    `business-sidebar-link${
      activePanel === panel ? ' business-sidebar-link-active' : ''
    }`;

  return (
    <aside className="business-sidebar" aria-label="Admin dashboard navigation">
      <div className="business-sidebar-header">
        <span className="business-sidebar-title">Admin</span>
      </div>
      <nav className="business-sidebar-nav">
        <button
          type="button"
          className={linkClass('profile')}
          onClick={() => onSelectPanel('profile')}
        >
          Edit Profile
        </button>
        <button
          type="button"
          className={linkClass('businesses')}
          onClick={() => onSelectPanel('businesses')}
        >
          Businesses
        </button>
        <button
          type="button"
          className={linkClass('students')}
          onClick={() => onSelectPanel('students')}
        >
          Students
        </button>
        <button
          type="button"
          className={linkClass('addArticle')}
          onClick={() => onSelectPanel('addArticle')}
        >
          Add Article
        </button>
      </nav>
    </aside>
  );
};

export default AdminSidebar;

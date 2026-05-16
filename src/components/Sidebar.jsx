import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activePanel, onSelectPanel }) => {
  const linkClass = (panel) =>
    `business-sidebar-link${
      activePanel === panel ? ' business-sidebar-link-active' : ''
    }`;

  return (
    <aside className="business-sidebar" aria-label="Business dashboard navigation">
      <div className="business-sidebar-header">
        <span className="business-sidebar-title">Business</span>
      </div>
      <nav className="business-sidebar-nav">
        <button
          type="button"
          className={linkClass('manage')}
          onClick={() => onSelectPanel('manage')}
        >
          Manage A Job
        </button>
        <button
          type="button"
          className={linkClass('profile')}
          onClick={() => onSelectPanel('profile')}
        >
          Edit Profile
        </button>
        <button
          type="button"
          className={linkClass('submit')}
          onClick={() => onSelectPanel('submit')}
        >
          Submit a Job
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;

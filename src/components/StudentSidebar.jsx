import React from 'react';
import './Sidebar.css';

const StudentSidebar = ({ activePanel, onSelectPanel }) => {
  const linkClass = (panel) =>
    `business-sidebar-link${
      activePanel === panel ? ' business-sidebar-link-active' : ''
    }`;

  return (
    <aside className="business-sidebar" aria-label="Student dashboard navigation">
      <div className="business-sidebar-header">
        <span className="business-sidebar-title">Student</span>
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
          className={linkClass('applications')}
          onClick={() => onSelectPanel('applications')}
        >
          My Applications
        </button>
      </nav>
    </aside>
  );
};

export default StudentSidebar;

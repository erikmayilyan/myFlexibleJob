import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import EditProfile from './EditProfile';
import AdminBusinesses from './AdminBusinesses';
import AdminStudents from './AdminStudents';
import AdminAddArticle from './AdminAddArticle';
import './BusinessDashboard.css';

const PANEL_CONTENT = {
  profile: <EditProfile />,
  businesses: <AdminBusinesses />,
  students: <AdminStudents />,
  addArticle: <AdminAddArticle />,
};

const AdminDashboard = () => {
  const [activePanel, setActivePanel] = useState(null);
  const content = activePanel ? PANEL_CONTENT[activePanel] : null;
  const isTextContent = typeof content === 'string';

  return (
    <div className="dashboard">
      <AdminSidebar activePanel={activePanel} onSelectPanel={setActivePanel} />
      <main className="business-dashboard">
        <h1>Admin Dashboard</h1>
        {content ? (
          isTextContent ? (
            <p className="business-dashboard-message">{content}</p>
          ) : (
            <div className="business-dashboard-message">{content}</div>
          )
        ) : (
          <div className="business-dashboard-placeholder">
            Select Edit Profile, Businesses, Students, or Add Article to see something here.
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;

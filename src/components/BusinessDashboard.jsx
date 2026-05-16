import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Manage from './Manage';
import EditProfile from './EditProfile';
import './BusinessDashboard.css';
import SubmitJob from './SubmitJob';

const PANEL_CONTENT = {
  manage: <Manage />,
  profile: <EditProfile />,
  submit: <SubmitJob />,
};

const BusinessDashboard = () => {
  const [activePanel, setActivePanel] = useState(null);
  const content = activePanel ? PANEL_CONTENT[activePanel] : null;
  const isTextContent = typeof content === 'string';

  return (
    <div className="dashboard">
      <Sidebar activePanel={activePanel} onSelectPanel={setActivePanel} />
      <main className="business-dashboard">
        <h1>Business Dashboard</h1>
        {content ? (
          isTextContent ? (
            <p className="business-dashboard-message">{content}</p>
          ) : (
            <div className="business-dashboard-message">{content}</div>
          )
        ) : (
          <div className="business-dashboard-placeholder">
            Select Manage A Job, Edit Profile, or Submit a Job to see something here.
          </div>
        )}
      </main>
    </div>
  );
};

export default BusinessDashboard;

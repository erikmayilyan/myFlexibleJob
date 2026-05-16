import React, { useState } from 'react';
import StudentSidebar from './StudentSidebar';
import EditProfile from './EditProfile';
import StudentApplications from './StudentApplications';
import './BusinessDashboard.css';

const PANEL_CONTENT = {
  profile: <EditProfile />,
  applications: <StudentApplications />,
};

const StudentDashboard = () => {
  const [activePanel, setActivePanel] = useState(null);
  const content = activePanel ? PANEL_CONTENT[activePanel] : null;
  const isTextContent = typeof content === 'string';

  return (
    <div className="dashboard">
      <StudentSidebar activePanel={activePanel} onSelectPanel={setActivePanel} />
      <main className="business-dashboard">
        <h1>Student Dashboard</h1>
        {content ? (
          isTextContent ? (
            <p className="business-dashboard-message">{content}</p>
          ) : (
            <div className="business-dashboard-message">{content}</div>
          )
        ) : (
          <div className="business-dashboard-placeholder">
            Select Edit Profile or My Applications to see something here.
          </div>
        )}
      </main>
    </div>
  );
};

export default StudentDashboard;

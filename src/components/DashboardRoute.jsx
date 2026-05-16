import React from 'react';
import { Navigate } from 'react-router-dom';
import BusinessDashboard from './BusinessDashboard';
import StudentDashboard from './StudentDashboard';

const getStoredUser = () => {
  try {
    const raw = localStorage.getItem('authUser');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const DashboardRoute = () => {
  const user = getStoredUser();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: '/dashboard' }} />;
  }

  if (user.role === 'business') {
    return <BusinessDashboard />;
  }

  if (user.role === 'student') {
    return <StudentDashboard />;
  }

  return <Navigate to="/" replace />;
};

export default DashboardRoute;

import React, { useState } from 'react';
import { getUsersByRole, deleteUser } from '../utils/users';
import './AdminUsers.css';

const AdminBusinesses = () => {
  const [businesses, setBusinesses] = useState(() => getUsersByRole('business'));

  const handleDelete = (id) => {
    if (!window.confirm('Delete this business account?')) {
      return;
    }
    deleteUser(id);
    setBusinesses(getUsersByRole('business'));
  };

  return (
    <div className="admin-users">
      <h2 className="admin-users-title">Businesses</h2>
      {businesses.length === 0 ? (
        <p className="admin-users-empty">No businesses found.</p>
      ) : (
        <ul className="admin-users-list">
          {businesses.map((business) => (
            <li key={business.id} className="admin-users-card">
              <div className="admin-users-info">
                <h3>{business.name}</h3>
                <p>{business.email}</p>
              </div>
              <button
                type="button"
                className="admin-users-delete"
                onClick={() => handleDelete(business.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminBusinesses;

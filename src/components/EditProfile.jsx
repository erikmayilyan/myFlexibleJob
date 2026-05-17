import React, { useMemo } from 'react';
import { getUsers } from '../utils/users';
import './EditProfile.css';

const EditProfile = () => {
  const user = useMemo(() => {
    try {
      const raw = localStorage.getItem('authUser');
      const sessionUser = raw ? JSON.parse(raw) : null;
      if (!sessionUser) {
        return null;
      }

      const match =
        getUsers().find((u) => u.id === sessionUser.id) ||
        getUsers().find((u) => u.email === sessionUser.email);

      return match || sessionUser;
    } catch {
      return null;
    }
  }, []);

  return (
    <div className="edit-profile">
      <h2 className="edit-profile-title">Edit Profile</h2>

      {!user ? (
        <div className="edit-profile-empty">No user loaded.</div>
      ) : (
        <form className="edit-profile-form">
          <div className="edit-profile-row">
            <label className="edit-profile-label" htmlFor="profileName">
              Name / Business Name
            </label>
            <input
              id="profileName"
              className="edit-profile-input"
              type="text"
              defaultValue={user.name || ''}
            />
          </div>

          <div className="edit-profile-row">
            <label className="edit-profile-label" htmlFor="profileEmail">
              Email
            </label>
            <input
              id="profileEmail"
              className="edit-profile-input"
              type="email"
              defaultValue={user.email || ''}
            />
          </div>

          <div className="edit-profile-row">
            <label className="edit-profile-label" htmlFor="profileRole">
              Role
            </label>
            <input
              id="profileRole"
              className="edit-profile-input"
              type="text"
              defaultValue={user.role || ''}
              disabled
            />
          </div>

          <div className="edit-profile-actions">
            <button type="button" className="edit-profile-save" disabled>
              Save 
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditProfile

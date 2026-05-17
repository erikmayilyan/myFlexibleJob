import React, { useState } from 'react';
import { getUsersByRole, deleteUser } from '../utils/users';
import './AdminUsers.css';

const AdminStudents = () => {
  const [students, setStudents] = useState(() => getUsersByRole('student'));

  const handleDelete = (id) => {
    if (!window.confirm('Delete this student account?')) {
      return;
    }
    deleteUser(id);
    setStudents(getUsersByRole('student'));
  };

  return (
    <div className="admin-users">
      <h2 className="admin-users-title">Students</h2>
      {students.length === 0 ? (
        <p className="admin-users-empty">No students found.</p>
      ) : (
        <ul className="admin-users-list">
          {students.map((student) => (
            <li key={student.id} className="admin-users-card">
              <div className="admin-users-info">
                <h3>{student.name}</h3>
                <p>{student.email}</p>
              </div>
              <button
                type="button"
                className="admin-users-delete"
                onClick={() => handleDelete(student.id)}
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

export default AdminStudents;

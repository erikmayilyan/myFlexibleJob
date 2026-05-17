import usersData from '../assets/users.json';

const DELETED_USERS_KEY = 'deletedUserIds';

export const getDeletedUserIds = () => {
  try {
    const raw = localStorage.getItem(DELETED_USERS_KEY);
    const ids = raw ? JSON.parse(raw) : [];
    return Array.isArray(ids) ? ids : [];
  } catch {
    return [];
  }
};

export const getUsers = () => {
  const deletedIds = getDeletedUserIds();
  return usersData.users.filter((user) => !deletedIds.includes(user.id));
};

export const getUsersByRole = (role) =>
  getUsers().filter((user) => user.role === role);

export const deleteUser = (id) => {
  const deletedIds = getDeletedUserIds();
  if (deletedIds.includes(id)) {
    return;
  }
  localStorage.setItem(DELETED_USERS_KEY, JSON.stringify([...deletedIds, id]));
};

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { users } from '../Mock/Mock';

const UserDetail = () => {
  const { id } = useParams();
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return (
      <div className="p-6">
        <h2>User not found</h2>
        <Link to="/users" className="text-blue-600 underline">Back to Users</Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p>Email: {user.email}</p>
      <Link to="/users" className="text-blue-600 underline mt-4 block">Back to Users</Link>
    </div>
  );
};

export default UserDetail;

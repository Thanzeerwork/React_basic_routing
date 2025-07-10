import React from 'react';
import { Link } from 'react-router-dom';
import { users } from '../Mock/Mock'; 

const UsersList = () => {
  return (
    <div className="min-h-screen p-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Users List</h1>
        <div className="grid gap-4">
          {users.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id}>
              <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition text-black">
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <span className="text-sm text-blue-600">{user.role}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersList;

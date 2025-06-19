import React from "react";

export default function UserCard({ user, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-900 p-6 border border-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-95 transition-transform duration-300 cursor-pointer"
    >
      <img
        src={user.picture.large}
        alt={user.name.first}
        className="w-24 h-24 rounded-full mx-auto border-2 border-white"
      />
      <div className="text-center mt-4">
        <h2 className="font-bold text-lg">{user.name.first} {user.name.last}</h2>
        <p className="text-gray-300 text-sm">{user.email}</p>
        <p className="text-gray-400 text-sm">{user.location.country}</p>
      </div>
    </div>
  );
}


import React from "react";


export default function UserDetailsModal({ user, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-neutral-900 to-gray-800 border border-gray-700 rounded-3xl p-8 w-96 relative shadow-2xl">
        
       
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl hover:text-red-400 transition"
        >
          &times;
        </button>

        
        <div className="text-center">
          <img
            src={user.picture.large}
            alt={user.name.first}
            className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-md"
          />
          <h2 className="font-bold text-2xl mt-4">{user.name.first} {user.name.last}</h2>
          <p className="text-gray-300 text-sm mt-1 italic">{user.location.country}</p>
        </div>

        
        <div className="mt-6 space-y-2 text-gray-200 text-sm">
          <p><strong className="text-white">Email:</strong> {user.email}</p>
          <p><strong className="text-white">Phone:</strong> {user.phone}</p>
          <p>
            <strong className="text-white">Address:</strong><br />
            {user.location.street.number}, {user.location.street.name},<br />
            {user.location.city}, {user.location.state}
          </p>
          <p><strong className="text-white">DOB:</strong> {new Date(user.dob.date).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import UserDetailsModal from "./UserDetailsModal";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10 text-lg">Loading...</div>;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <UserCard key={index} user={user} onClick={() => setSelectedUser(user)} />
        ))}
      </div>
      {selectedUser && (
        <UserDetailsModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}

import React from "react";
import UserList from "./components/UserList";


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-black text-white">
      
      
     <nav className="flex items-center justify-between gap-4 px-4 py-4 bg-gradient-to-br from-blue-950 to-black text-white shadow-md">
  <h1 className="text-2xl font-bold whitespace-nowrap">Task360</h1>
  <ul className="flex gap-4 text-sm overflow-x-auto">
    <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
    <li className="hover:text-gray-300 cursor-pointer">Users</li>
    <li className="hover:text-gray-300 cursor-pointer">Settings</li>
    <li className="hover:text-red-400 cursor-pointer">Logout</li>
  </ul>
</nav>



      <header className="text-center mt-12 mb-16">
        <h2 className="text-3xl font-bold">Profile- User Dashboard</h2>
        <p className="text-gray-400 mt-2">Task Completed</p>
      </header>

      <main className="px-4 md:px-12">
        <UserList />
      </main>
    </div>
  );
}

export default App;


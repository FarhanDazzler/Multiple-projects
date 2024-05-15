import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const allUsers = useSelector((state) => state.app.users);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-10 ">
          <div className="flex-shrink-0 ">
            {/* Your logo */}
            <span className="text-white font-semibold text-lg">
              Farhan's Logo
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {/* Links */}
            <Link to="/" className="text-white hover:text-gray-200">
              Create Post
            </Link>
            <Link to="/read" className="text-white hover:text-gray-200">
              All Posts ({allUsers.length})
            </Link>
            {/* Add other navbar links or buttons as needed */}
            <button className="text-white hover:text-gray-200">Login</button>
          </div>

          <div className="flex-1 mx-4">
            {/* Search input */}
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-700 text-white py-2 px-4 rounded-md focus:outline-none focus:bg-gray-600"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

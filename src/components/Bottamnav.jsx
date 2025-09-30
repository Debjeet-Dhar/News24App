import React from "react";
import { Home, Search, Bookmark, Bell, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 w-full bg-white shadow-md flex justify-around items-center py-2 z-20">
      <button onClick={() => navigate("/feed")} className="flex flex-col items-center text-gray-700">
        <Home size={24} />
        <span className="text-xs">Home</span>
      </button>

      <button className="flex flex-col items-center text-gray-700">
        <Search size={24} />
        <span className="text-xs">Explore</span>
      </button>

      <Link to={'/saved'} className="flex flex-col items-center text-gray-700">
        <Bookmark size={24} />
        <span className="text-xs">Saved</span>
      </Link>

      <button className="flex flex-col items-center text-gray-700">
        <Bell size={24} />
        <span className="text-xs">Alerts</span>
      </button>

      <Link to={'/profile'} className="flex flex-col items-center text-gray-700">
        <User size={24} />
        <span className="text-xs">Profile</span>
      </Link>
    </div>
  );
};

export default BottomNav;

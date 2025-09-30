import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/Bottamnav";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      navigate("/login"); // redirect if not logged in
    } else {
      setUser(currentUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-16 pb-20">
      {/* Profile Avatar */}
      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-500">
        <img
          src={`https://i.pravatar.cc/150?u=${user.email}`} // random avatar based on email
          alt="avatar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name & Email */}
      <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>

      {/* Stats */}
      <div className="flex justify-around w-3/4 mt-6 bg-white rounded-xl shadow-md p-4">
        <div className="flex flex-col items-center">
          <span className="font-bold text-lg">24</span>
          <span className="text-gray-500 text-sm">Read</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold text-lg">5</span>
          <span className="text-gray-500 text-sm">Saved</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold text-lg">12</span>
          <span className="text-gray-500 text-sm">Followers</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col w-3/4 mt-8 gap-4">
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Edit Profile
        </button>
        <button
          onClick={handleLogout}
          className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
        >
          Logout
        </button>
      </div>
        <BottomNav/>
    </div>
  );
};

export default ProfilePage;

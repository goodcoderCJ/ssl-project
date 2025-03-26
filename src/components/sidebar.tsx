"use client"

import Link from "next/link";
import { useState } from "react";


const Sidebar = () => {
    
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "My Profile", path: "/profile" },
    { name: "Favorites", path: "/favorites" },
    { name: "My Mutuals", path: "/mutuals" },
    { name: "My Subscribed", path: "/subscribed" },
    { name: "Interested in me", path: "/interested" },
    { name: "Settings", path: "/settings" },
    { name: "Logout", path: "/logout" },
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-md p-4 flex flex-col">
      <h2 className="text-center font-bold text-lg mb-6">Temiloluwa</h2>

      {menuItems.map((item) => (
        <Link key={item.name} href={item.path}>
          <button
            onClick={() => setActive(item.name)}
            className={`w-full text-left py-2 px-4 rounded-md mb-2 ${
              active === item.name ? "bg-red-500 text-white" : "text-black"
            }`}
          >
            {item.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;

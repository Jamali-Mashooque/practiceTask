
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  Users,
  ShoppingBag,
  Settings,
  Menu,
  X,
  Leaf,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/home", icon: Home },
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Orders", path: "/orders", icon: ShoppingBag },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 rounded-lg bg-green-700 p-2 text-white shadow-md md:hidden"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
        />
      )}

      
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-green-100 bg-white shadow-xl transition-transform duration-300 md:sticky md:top-0 md:h-screen md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        
        <div className="border-b border-green-100 bg-gradient-to-r from-green-50 to-lime-50 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-green-700 p-2.5 text-white shadow-md">
              <Leaf size={25} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-green-900">
                Admin Panel
              </h2>
              <p className="text-xs text-green-700">
                Manage your workspace
              </p>
            </div>
          </div>
        </div>

    
        <nav className="flex-1 space-y-2 overflow-y-auto p-4">
          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
            Main Menu
          </p>

          {links.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={name}
              to={path}
              end={path === "/home"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "translate-x-1 bg-green-100 text-green-800 shadow-sm"
                    : "text-gray-600 hover:translate-x-1 hover:bg-green-50 hover:text-green-800"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute bottom-2 left-0 top-2 w-1 rounded-r-full bg-green-600" />
                  )}

                  <Icon
                    size={20}
                    strokeWidth={isActive ? 2.5 : 1.8}
                    className="transition-transform duration-200 group-hover:scale-110"
                  />

                  <span>{name}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        
        <div className="m-4 rounded-xl border border-green-100 bg-green-50 p-4">
          <p className="text-sm font-semibold text-green-900">
            Workspace Ready
          </p>
          <p className="mt-1 text-xs leading-5 text-green-700">
            Your workspace is ready to manage.
          </p>
          <div className="mt-3 h-1.5 rounded-full bg-green-200">
            <div className="h-1.5 w-3/4 rounded-full bg-green-600" />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

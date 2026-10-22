
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, LogOut, Leaf, Info } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login", { replace: true });
  };

  return (
    <header className="sticky top-0 z-20 w-full border-b border-green-100 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="flex min-h-20 items-center justify-between gap-3 px-4 py-3 sm:px-8 lg:px-10">

        
        <Link to="/home" className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="rounded-xl bg-green-700 p-2.5 text-white shadow-md transition hover:rotate-6">
            <Leaf size={24} />
          </div>

          <div>
            <h1 className="text-lg font-extrabold text-gray-900 sm:text-xl">
              Green<span className="text-green-700">Panel</span>
            </h1>
            <p className="hidden text-xs text-gray-500 sm:block">
              Workspace Management
            </p>
          </div>
        </Link>

        
        <div className="flex items-center gap-1 sm:gap-3">
          <Link
            to="/home"
            className="flex items-center gap-1.5 rounded-xl px-2 py-2.5 text-sm font-semibold text-green-800 transition hover:bg-green-100 sm:gap-2 sm:px-4"
          >
            <Home size={18} />
            <span>Home</span>
          </Link>

         

          <Link
            to="/about"
            className="flex items-center gap-1.5 rounded-xl px-2 py-2.5 text-sm font-semibold text-green-800 transition hover:bg-green-100 sm:gap-2 sm:px-4"
          >
            <Info size={18} />
            <span className="hidden sm:inline">About Us</span>
            <span className="sm:hidden">About</span>
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 rounded-xl bg-green-700 px-2.5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800 hover:shadow-md active:scale-95 sm:gap-2 sm:px-4"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

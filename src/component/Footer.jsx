
import React from "react";
import { Link } from "react-router-dom";
import {
  Leaf,
  Home,
  LayoutDashboard,
  Users,
  Info,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-green-100 bg-white">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">

        
        <div>
          <Link to="/home" className="inline-flex items-center gap-3">
            <div className="rounded-xl bg-green-700 p-2.5 text-white shadow-sm">
              <Leaf size={23} />
            </div>

            <span className="text-xl font-extrabold text-gray-900">
              Green<span className="text-green-700">Panel</span>
            </span>
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
            Empowering people to share ideas, collaborate, and turn
            innovation into meaningful projects.
          </p>
        </div>

        
        <div>
          <h3 className="font-bold text-gray-900">Quick Links</h3>

          <div className="mt-4 space-y-3">
            <Link
              to="/home"
              className="flex items-center gap-2 text-sm text-gray-600 transition hover:translate-x-1 hover:text-green-700"
            >
              <Home size={16} /> Home
            </Link>

            <Link
              to="/dashboard"
              className="flex items-center gap-2 text-sm text-gray-600 transition hover:translate-x-1 hover:text-green-700"
            >
              <LayoutDashboard size={16} /> Dashboard
            </Link>

            <Link
              to="/users"
              className="flex items-center gap-2 text-sm text-gray-600 transition hover:translate-x-1 hover:text-green-700"
            >
              
            </Link>

            <Link
              to="/about"
              className="flex items-center gap-2 text-sm text-gray-600 transition hover:translate-x-1 hover:text-green-700"
            >
              <Info size={16} /> About Us
            </Link>
          </div>
        </div>

        
        <div>
          <h3 className="font-bold text-gray-900">Our Purpose</h3>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            We support workplace innovation through creativity,
            teamwork, project development, and continuous improvement.
          </p>

          <Link
            to="/about"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-green-700 hover:text-green-900"
          >
            Learn more <ArrowUpRight size={16} />
          </Link>
        </div>

        
        <div>
          <h3 className="font-bold text-gray-900">Get in Touch</h3>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            Have an idea or suggestion? We encourage you to contribute
            to a more innovative workplace.
          </p>

          <a
            href="mailto:info@example.com?subject=Intrapreneurship%20Platform"
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-2.5 text-sm font-semibold text-green-800 transition hover:bg-green-100"
          >
            <Mail size={17} />
            Contact Us
          </a>

          <p className="mt-2 text-xs text-gray-400">
            Replace the demo email with your official email.
          </p>
        </div>
      </div>

      
      <div className="border-t border-green-100 bg-green-50/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row sm:px-8 lg:px-10 sm:text-left">
          <p className="text-xs text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} GreenPanel. All rights reserved.
          </p>

          <p className="text-xs font-medium text-green-800 sm:text-sm">
            Built for ideas. Designed for innovation.
          </p>

          <Link
            to="/about"
            className="text-xs font-semibold text-gray-600 transition hover:text-green-700 sm:text-sm"
          >
            About Our Platform
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

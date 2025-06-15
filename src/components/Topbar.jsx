// src/components/Topbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from 'lucide-react';

const Topbar = () => {
  const { theme, toggleTheme } = useTheme();

  const navLinkStyle =
    'text-sm md:text-base px-3 py-2 rounded-md transition duration-200 hover:bg-gray-200 dark:hover:bg-gray-700';

  const activeStyle =
    'font-semibold text-blue-600 dark:text-yellow-400';

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-900 shadow-md border-b dark:border-gray-700">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">Admin Dashboard</h1>

      <nav className="flex items-center gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${navLinkStyle} ${isActive ? activeStyle : 'text-gray-700 dark:text-gray-300'}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            `${navLinkStyle} ${isActive ? activeStyle : 'text-gray-700 dark:text-gray-300'}`
          }
        >
          Calendar
        </NavLink>
        <NavLink
          to="/kanban"
          className={({ isActive }) =>
            `${navLinkStyle} ${isActive ? activeStyle : 'text-gray-700 dark:text-gray-300'}`
          }
        >
          Kanban
        </NavLink>
        <NavLink
          to="/table"
          className={({ isActive }) =>
            `${navLinkStyle} ${isActive ? activeStyle : 'text-gray-700 dark:text-gray-300'}`
          }
        >
          Table
        </NavLink>
        
        <NavLink
            to="/charts"
            className={({ isActive }) =>
                `${navLinkStyle} ${isActive ? activeStyle : 'text-gray-700 dark:text-gray-300'}`
            }
        >
            Charts
            </NavLink>


        <NavLink
          to="/login"
          className={({ isActive }) =>
            `${navLinkStyle} ${isActive ? activeStyle : 'text-gray-700 dark:text-gray-300'}`
          }
        >
          Login/SignUp
        </NavLink>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="ml-3 p-2 rounded-full transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
        </button>
      </nav>
    </header>
  );
};

export default Topbar;

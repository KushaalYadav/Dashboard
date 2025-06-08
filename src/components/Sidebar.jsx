// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Calendar,
  Kanban,
  Table,
  LineChart,
  AreaChart,
  BarChart3,
  PieChart
} from 'lucide-react';

const Sidebar = () => {
  const linkBase =
    'flex items-center gap-3 px-4 py-2 rounded-md w-[90%] mx-auto transition duration-200';
  const inactive =
    'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700';
  const active =
    'bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-yellow-300 font-semibold';

  const sectionTitle =
    'px-6 mt-6 mb-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest';

  const wrapper =
    'mb-6 border-b border-gray-200 dark:border-gray-700 pb-4';

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-full shadow-md overflow-y-auto">
      <div className="py-6">
        {/* LOGO Placeholder */}
        <div className="text-2xl font-bold text-center mb-6 text-blue-700 dark:text-yellow-400">
          <span>LOGO</span>
        </div>

        {/* DASHBOARD */}
        <div className={wrapper}>
          <div className={sectionTitle}>Dashboard</div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <Home size={18} />
            Home Page
          </NavLink>
        </div>

        {/* APPS */}
        <div className={wrapper}>
          <div className={sectionTitle}>Apps</div>
          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <Calendar size={18} />
            Calendar
          </NavLink>
          <NavLink
            to="/kanban"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <Kanban size={18} />
            Kanban
          </NavLink>
          <NavLink
            to="/table"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <Table size={18} />
            Tables
          </NavLink>
        </div>

        {/* CHARTS */}
        <div>
          <div className={sectionTitle}>Charts</div>
          <NavLink
            to="/charts/line"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <LineChart size={18} />
            Line
          </NavLink>
          <NavLink
            to="/charts/area"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <AreaChart size={18} />
            Area
          </NavLink>
          <NavLink
            to="/charts/bar"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <BarChart3 size={18} />
            Bar
          </NavLink>
          <NavLink
            to="/charts/pie"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <PieChart size={18} />
            Pie
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

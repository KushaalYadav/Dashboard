// src/pages/Dashboard.jsx
import React from 'react';
import { FaCalendarAlt, FaTasks, FaChartPie, FaTable, FaFilm, FaUsers, FaRupeeSign } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">🎟️ Ticket Booking Dashboard</h2>

      {/* Top Booking Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Tickets Sold</h3>
            <FaFilm className="text-blue-600 text-2xl" />
          </div>
          <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">12,340</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">This Month</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Active Users</h3>
            <FaUsers className="text-green-600 text-2xl" />
          </div>
          <p className="text-3xl font-bold text-green-700 dark:text-green-400">1,987</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Today</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Revenue</h3>
            <FaRupeeSign className="text-yellow-500 text-2xl" />
          </div>
          <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">₹1.2L</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">This Week</p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calendar */}
        <div
          onClick={() => navigate('/calendar')}
          className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105"
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xl font-semibold text-gray-700 dark:text-white">Calendar</h4>
            <FaCalendarAlt className="text-indigo-500 text-3xl" />
          </div>
          <p className="text-gray-500 dark:text-gray-400">Track & plan movie releases, events.</p>
        </div>

        {/* Kanban Board */}
        <div
          onClick={() => navigate('/kanban')}
          className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105"
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xl font-semibold text-gray-700 dark:text-white">Kanban Board</h4>
            <FaTasks className="text-pink-500 text-3xl" />
          </div>
          <p className="text-gray-500 dark:text-gray-400">Manage tasks, bugs, and releases.</p>
        </div>

        {/* Charts */}
        <div
          onClick={() => navigate('/charts')}
          className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105"
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xl font-semibold text-gray-700 dark:text-white">Analytics & Charts</h4>
            <FaChartPie className="text-red-500 text-3xl" />
          </div>
          <p className="text-gray-500 dark:text-gray-400">Visualize bookings, flops, hits.</p>
        </div>

        {/* Table */}
        <div
          onClick={() => navigate('/table')}
          className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105"
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xl font-semibold text-gray-700 dark:text-white">Data Table</h4>
            <FaTable className="text-teal-500 text-3xl" />
          </div>
          <p className="text-gray-500 dark:text-gray-400">Complete records with filters.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

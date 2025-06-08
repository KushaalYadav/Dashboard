import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext';
import { ToastContainer } from 'react-toastify';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import CalendarPage from './pages/CalendarPage';
import KanbanPage from './pages/KanbanPage';
import TablePage from './pages/TablePage';
import ChartsPage from './pages/ChartsPage';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className={`flex h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Topbar onThemeToggle={toggleTheme} />
          <main className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/kanban" element={<KanbanPage />} />
              <Route path="/table" element={<TablePage />} />
              <Route path="/charts" element={<ChartsPage />} />
              <Route path="/charts/:chartType" element={<ChartsPage />} />

            </Routes>
          </main>
        </div>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;

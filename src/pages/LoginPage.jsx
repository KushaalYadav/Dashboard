import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';


const LoginPage = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Simulate login logic
      console.log('Logged in with:', formData);
      navigate('/');
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={`w-full p-3 rounded border ${errors.username ? 'border-red-500' : 'border-gray-300'} dark:bg-gray-700`}
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            className={`w-full p-3 rounded border ${errors.password ? 'border-red-500' : 'border-gray-300'} dark:bg-gray-700`}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login</button>

          <p className="text-center text-sm mt-4">
            Don’t have an account? <Link to="/signup" className="text-blue-500 hover:underline">Create one</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';


const SignupPage = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', username: '', email: '', password: '',
    phoneCode: '+91', phoneNumber: '', country: '', city: ''
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name required';
    if (!formData.username.trim()) newErrors.username = 'Username required';
    if (!validateEmail(formData.email)) newErrors.email = 'Invalid email';
    if (formData.password.length < 6) newErrors.password = 'Minimum 6 characters';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone required';
    if (!formData.country) newErrors.country = 'Country required';
    if (!formData.city) newErrors.city = 'City required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log('Registered:', formData);
      navigate('/login');
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Signup</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="p-3 rounded border dark:bg-gray-700" />
          <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="p-3 rounded border dark:bg-gray-700" />
          {errors.firstName && <p className="text-red-500 text-sm col-span-2">{errors.firstName}</p>}
          {errors.lastName && <p className="text-red-500 text-sm col-span-2">{errors.lastName}</p>}

          <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="p-3 rounded border dark:bg-gray-700 col-span-2" />
          {errors.username && <p className="text-red-500 text-sm col-span-2">{errors.username}</p>}

          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-3 rounded border dark:bg-gray-700 col-span-2" />
          {errors.email && <p className="text-red-500 text-sm col-span-2">{errors.email}</p>}

          <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} className="p-3 rounded border dark:bg-gray-700 col-span-2" />
          {errors.password && <p className="text-red-500 text-sm col-span-2">{errors.password}</p>}

          <div className="flex gap-2 col-span-2">
            <input name="phoneCode" value={formData.phoneCode} readOnly className="p-3 w-20 border rounded dark:bg-gray-700" />
            <input name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} className="p-3 flex-1 border rounded dark:bg-gray-700" />
          </div>
          {errors.phoneNumber && <p className="text-red-500 text-sm col-span-2">{errors.phoneNumber}</p>}

          <input name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="p-3 border rounded dark:bg-gray-700 col-span-2" />
          {errors.country && <p className="text-red-500 text-sm col-span-2">{errors.country}</p>}

          <input name="city" placeholder="City" value={formData.city} onChange={handleChange} className="p-3 border rounded dark:bg-gray-700 col-span-2" />
          {errors.city && <p className="text-red-500 text-sm col-span-2">{errors.city}</p>}

          <button type="submit" className="mt-4 w-full col-span-2 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Create Account</button>

          <p className="text-center text-sm col-span-2 mt-4">
            Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

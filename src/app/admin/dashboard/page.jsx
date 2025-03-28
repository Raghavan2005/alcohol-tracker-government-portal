"use client"
import React, { useState, useEffect } from 'react';

import { 
  BarChart2, 
  Users, 
  Shield, 
  RefreshCw, 
  Sun, 
  Moon, 
  Database, 
  FileText, 
  Archive, 
  Clock,
  MapPin,
  Activity,
  UserPlus,
  Map,
  ShoppingBag,
  Ban
} from 'lucide-react';

export default function AdminDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [stats, setStats] = useState({
    totalUsers: 5672,
    activeCards: 4231,
    pendingApplications: 237,
    monthlyAlcoholQuota: 12,
    averageConsumption: 8.5
  });

  // Tasmac Shops Data
  const [tasmacShops, setTasmacShops] = useState([
    { 
      id: 1, 
      name: 'Tasmac Central', 
      address: '123 Main St, Chennai', 
      latitude: 13.0827, 
      longitude: 80.2707,
      status: 'active'
    },
    { 
      id: 2, 
      name: 'Tasmac North', 
      address: '456 North Rd, Coimbatore', 
      latitude: 11.0168, 
      longitude: 76.9858,
      status: 'active'
    },
    { 
      id: 3, 
      name: 'Tasmac South', 
      address: '789 South Ave, Madurai', 
      latitude: 9.9252, 
      longitude: 78.1198,
      status: 'active'
    }
  ]);

  // New User Form State
  const [newUser, setNewUser] = useState({
    name: '',
    aadharNumber: '',
    dateOfBirth: '',
    address: ''
  });

  // Render different sections based on active tab
  const renderSection = () => {
    switch(activeSection) {
      case 'dashboard':
        return renderDashboard();
      case 'newUser':
        return renderNewUserForm();
      case 'tasmacShops':
        return renderTasmacShops();
      case 'manageApplications':
        return renderManageApplications();
      default:
        return renderDashboard();
    }
  };

  // Dashboard Section
  const renderDashboard = () => (
    <>
      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          icon={<Users className="text-blue-500" />} 
          title="Total Users" 
          value={stats.totalUsers}
          color="bg-blue-500"
        />
        <StatCard 
          icon={<Database className="text-green-500" />} 
          title="Active Cards" 
          value={stats.activeCards}
          color="bg-green-500"
        />
        <StatCard 
          icon={<FileText className="text-yellow-500" />} 
          title="Pending Applications" 
          value={stats.pendingApplications}
          color="bg-yellow-500"
        />
      </div>

      {/* Detailed Dashboard Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        {/* Alcohol Consumption Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Alcohol Consumption Quota
            </h2>
            <Activity className="text-purple-500" />
          </div>
          <div className="space-y-2">
            <p className="text-gray-600 dark:text-gray-400">
              Monthly Allowed Quota: <span className="font-bold text-gray-800 dark:text-gray-100">{stats.monthlyAlcoholQuota} Bottles</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Average Monthly Consumption: <span className="font-bold text-gray-800 dark:text-gray-100">{stats.averageConsumption} Bottles</span>
            </p>
          </div>
        </div>

        {/* Action Items */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Quick Actions
            </h2>
            <RefreshCw className="text-teal-500" />
          </div>
          <div className="space-y-3">
            <button 
              onClick={() => setActiveSection('tasmacShops')}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition flex items-center justify-center space-x-2"
            >
              <MapPin size={18} />
              <span>View Tasmac Locations</span>
            </button>
            <button 
              onClick={() => setActiveSection('newUser')}
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition flex items-center justify-center space-x-2"
            >
              <UserPlus size={18} />
              <span>Add New User</span>
            </button>
            <button 
              onClick={() => setActiveSection('manageApplications')}
              className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition flex items-center justify-center space-x-2"
            >
              <Archive size={18} />
              <span>Manage Applications</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );

  // New User Form Section
  const renderNewUserForm = () => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Add New User
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
          <input 
            type="text"
            value={newUser.name}
            onChange={(e) => setNewUser({...newUser, name: e.target.value})}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Aadhar Number</label>
          <input 
            type="text"
            value={newUser.aadharNumber}
            onChange={(e) => setNewUser({...newUser, aadharNumber: e.target.value})}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Date of Birth</label>
          <input 
            type="date"
            value={newUser.dateOfBirth}
            onChange={(e) => setNewUser({...newUser, dateOfBirth: e.target.value})}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Address</label>
          <textarea 
            value={newUser.address}
            onChange={(e) => setNewUser({...newUser, address: e.target.value})}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-100"
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Register User
        </button>
      </form>
    </div>
  );

  // Tasmac Shops Section
  const renderTasmacShops = () => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Tasmac Shop Locations
        </h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center space-x-2">
          <ShoppingBag size={18} />
          <span>Add New Shop</span>
        </button>
      </div>
      <div className="space-y-4">
        {tasmacShops.map((shop) => (
          <div key={shop.id} className="flex justify-between items-center border-b pb-4">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">{shop.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{shop.address}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-blue-500 hover:text-blue-600">
                <MapPin size={18} />
              </button>
              <button className="text-red-500 hover:text-red-600">
                <Ban size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Manage Applications Section
  const renderManageApplications = () => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Manage Applications
      </h2>
      <div className="space-y-4">
        {/* Placeholder for application management UI */}
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
          <p className="text-gray-600 dark:text-gray-300">
            No pending applications at the moment.
          </p>
        </div>
      </div>
    </div>
  );

  // Utility Components (StatCard remains the same as in previous implementation)
  const StatCard = ({ icon, title, value, color }) => (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex items-center space-x-4 transition-colors">
      <div className={`p-3 rounded-full ${color} bg-opacity-10`}>
        {icon}
      </div>
      <div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
        <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">{value}</p>
      </div>
    </div>
  );

  // Dark Mode Toggle and System Preference (remains the same)
  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="grid grid-rows-[20px_1fr_20px] min-h-screen bg-gray-100 dark:bg-gray-900 p-8 gap-6 transition-colors">
        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 z-10 p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {darkMode ? (
            <Sun className="h-6 w-6 text-yellow-500" />
          ) : (
            <Moon className="h-6 w-6 text-gray-800" />
          )}
        </button>

        {/* Dashboard Sidebar Navigation */}
        <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-md p-6">
          <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100">
            Admin Panel
          </h2>
          <nav className="space-y-4">
            {[
              { name: 'Dashboard', icon: <BarChart2 />, section: 'dashboard' },
              { name: 'Add New User', icon: <UserPlus />, section: 'newUser' },
              { name: 'Tasmac Shops', icon: <MapPin />, section: 'tasmacShops' },
              { name: 'Manage Applications', icon: <Archive />, section: 'manageApplications' }
            ].map((item) => (
              <button 
                key={item.section}
                onClick={() => setActiveSection(item.section)}
                className={`w-full flex items-center space-x-3 p-2 rounded-md ${
                  activeSection === item.section 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content Area with Sidebar Offset */}
        <div className="ml-64 mt-8">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}
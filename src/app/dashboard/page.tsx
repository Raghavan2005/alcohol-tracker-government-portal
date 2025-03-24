export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      {/* Navbar with Profile */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">User Dashboard</h1>
        <div className="relative">
          <button className="flex items-center space-x-2 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg focus:outline-none">
            <img src="/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
            <span className="text-gray-900 dark:text-gray-100">User</span>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg hidden group-hover:block">
            <a href="/profile" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700">Profile</a>
            <a href="/logout" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700">Logout</a>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Alcohol Limit Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Current Available Limit</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">You have 3 bottles remaining this month.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">View Details</button>
        </div>

        {/* Purchase History */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Purchase History</h2>
          <ul className="text-gray-700 dark:text-gray-300 mt-2">
            <li>March 5 - 1 Bottle</li>
            <li>March 12 - 2 Bottles</li>
          </ul>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">View More</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Reports & Analytics */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Reports & Analytics</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">View trends and insights on your alcohol consumption.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">View Reports</button>
        </div>

        {/* Register New Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Register New Card</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">Apply for a new alcohol consumption card.</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Register</button>
        </div>
      </div>
    </div>
  );
}
export default function AdminDashboard() {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-6">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Users */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Total Users</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">1,250</p>
          </div>
  
          {/* Registered Cards */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Registered Cards</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">980</p>
          </div>
  
          {/* Monthly Reports */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Monthly Reports</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">View detailed analytics</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">View Reports</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Manage Users */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Manage Users</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">View and edit user accounts</p>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Manage</button>
          </div>
  
          {/* Logout */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Admin Profile</h2>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Logout</button>
          </div>
        </div>
      </div>
    );
  }
  
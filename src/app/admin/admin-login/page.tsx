import { useRouter } from "next/navigation";
export default function AdminLogin() {
  const router = useRouter();
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-6">Admin Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="mt-2 p-3 w-full border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input
                type="password"
                id="password"
                className="mt-2 p-3 w-full border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter your password"
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => router.push("/admin/admin-login")}
            >
              Login
            </button>
          </form>
  
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Forgot your password? <a href="/reset" className="text-blue-500 hover:underline">Reset it here</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
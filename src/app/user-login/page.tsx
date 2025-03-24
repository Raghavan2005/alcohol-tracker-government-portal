"use client";
import Image from 'next/image'
import { useRouter } from "next/navigation";
export default function User_Login() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900  ">
        
      <div className="w-full max-w-md bg-blur bg-white p-8 bg-op-50 rounded-lg shadow-lg">
      <Image
      className='mx-auto mb-3'
            src="/tnlogo.png"
            width={200}
            height={200}
            alt="Picture of the author"
          /> 
        <h2 className="text-2xl font-semibold text-center mb-6 text-black ">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 ">Email</label>
            <input
              type="email"
              id="email"
              className="mt-2 p-3 w-full border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
              placeholder="Enter your email"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              className="mt-2 p-3 w-full border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => router.push("/dashboard")}
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-black">
            Don't have an account? <a href="/user-login" className="text-blue-500 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
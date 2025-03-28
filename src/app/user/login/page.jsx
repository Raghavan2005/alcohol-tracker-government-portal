"use client"
import React, { useState } from 'react';
import { Lock, Smartphone } from 'lucide-react';

export default function UserLogin() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [mpin, setMpin] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (mobileNumber.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    if (mpin.length !== 4) {
      setError('MPIN must be 4 digits');
      return;
    }

    // Here you would typically make an API call to verify credentials
    try {
      // Placeholder for authentication logic
      console.log('Attempting login', { mobileNumber, mpin });
      
      // Reset error if login is successful
      setError('');
      
      // You might want to add navigation or state management here
      // For example: router.push('/dashboard') or dispatch login action
    } catch (loginError) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="grid  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-100">
      <h1 className='text-red-500 font-bold text-[300%] text-center font-mono '>	Don't drink and drive, and you'll stay alive!!!</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          <p className="text-gray-600 mt-2">Enter your mobile number and MPIN</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Smartphone className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="tel" 
              value={mobileNumber}
              onChange={(e) => {
                // Only allow numbers
                const input = e.target.value.replace(/\D/g, '');
                setMobileNumber(input.slice(0, 10));
              }}
              placeholder="Mobile Number" 
              className="w-full text-black pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength={10}
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="password" 
              value={mpin}
              onChange={(e) => {
                // Only allow numbers
                const input = e.target.value.replace(/\D/g, '');
                setMpin(input.slice(0, 4));
              }}
              placeholder="MPIN (4 digits)" 
              className="w-full text-black pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength={4}
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>

          <div className="text-center mt-4">
            <a href="#" className="text-blue-500 hover:underline text-sm">
              Forgot MPIN?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
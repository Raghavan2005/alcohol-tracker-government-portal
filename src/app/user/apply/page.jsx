"use client"
import React, { useState, useEffect } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  FileText, 
  Sun, 
  Moon, 
  Check 
} from 'lucide-react';

export default function UserApplication() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    dateOfBirth: '',
    aadharNumber: '',
    address: {
      street: '',
      city: '',
      state: '',
      pincode: ''
    },
    employmentStatus: '',
    annualIncome: '',
    medicalHistory: {
      alcoholConsumption: '',
      medicalConditions: ''
    }
  });

  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Check system preference and set initial dark mode
  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDarkMode);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested address fields
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } 
    // Handle nested medical history fields
    else if (name.startsWith('medicalHistory.')) {
      const medicalField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        medicalHistory: {
          ...prev.medicalHistory,
          [medicalField]: value
        }
      }));
    } 
    // Handle regular fields
    else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Validation for each step
  const validateStep = () => {
    switch(step) {
      case 1:
        return formData.fullName && formData.email && formData.mobileNumber && formData.dateOfBirth;
      case 2:
        return formData.aadharNumber && 
               formData.address.street && 
               formData.address.city && 
               formData.address.state && 
               formData.address.pincode;
      case 3:
        return formData.employmentStatus && formData.annualIncome;
      default:
        return false;
    }
  };

  // Move to next step
  const nextStep = () => {
    if (validateStep()) {
      setStep(prev => Math.min(prev + 1, 4));
    } else {
      alert('Please fill in all required fields');
    }
  };

  // Move to previous step
  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  // Submit application
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Final validation
    if (validateStep()) {
      // Simulated submission
      console.log('Application Submitted', formData);
      setIsSubmitted(true);
    } else {
      alert('Please complete all required fields');
    }
  };

  // Render different steps
  const renderStep = () => {
    if (isSubmitted) {
      return (
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-500 text-white rounded-full p-4">
              <Check size={48} />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Application Submitted Successfully!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Your application for the Alcohol Regulation Card has been received. 
            You will be notified about the status via email and SMS.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-md">
            <p className="text-blue-700 dark:text-blue-300">
              Expected Processing Time: 7-10 Working Days
            </p>
          </div>
        </div>
      );
    }

    switch(step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              Personal Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="text-gray-400" size={20} />
                  </div>
                  <input 
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                    placeholder="Enter full name"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="text-gray-400" size={20} />
                  </div>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                    placeholder="Enter email address"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300">Mobile Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="text-gray-400" size={20} />
                  </div>
                  <input 
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                    placeholder="Enter mobile number"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300">Date of Birth</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="text-gray-400" size={20} />
                  </div>
                  <input 
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              Address and Identification
            </h2>
            <div>
              <label className="block mb-2 text-gray-700 dark:text-gray-300">Aadhar Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FileText className="text-gray-400" size={20} />
                </div>
                <input 
                  type="text"
                  name="aadharNumber"
                  value={formData.aadharNumber}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                  placeholder="Enter Aadhar number"
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300">Street Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="text-gray-400" size={20} />
                  </div>
                  <input 
                    type="text"
                    name="address.street"
                    value={formData.address.street}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                    placeholder="Street address"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300">City</label>
                <input 
                  type="text"
                  name="address.city"
                  value={formData.address.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                  placeholder="City"
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300">State</label>
                <input 
                  type="text"
                  name="address.state"
                  value={formData.address.state}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                  placeholder="State"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300">Pincode</label>
                <input 
                  type="text"
                  name="address.pincode"
                  value={formData.address.pincode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                  placeholder="Pincode"
                  required
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              Employment and Income Details
            </h2>
            <div>
              <label className="block mb-2 text-gray-700 dark:text-gray-300">Employment Status</label>
              <select 
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                required
              >
                <option value="">Select Employment Status</option>
                <option value="employed">Employed</option>
                <option value="self-employed">Self-Employed</option>
                <option value="unemployed">Unemployed</option>
                <option value="student">Student</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-gray-700 dark:text-gray-300">Annual Income</label>
              <input 
                type="number"
                name="annualIncome"
                value={formData.annualIncome}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                placeholder="Enter annual income"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 dark:text-gray-300">Current Alcohol Consumption</label>
              <select 
                name="medicalHistory.alcoholConsumption"
                value={formData.medicalHistory.alcoholConsumption}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                required
              >
                <option value="">Select Consumption Level</option>
                <option value="none">None</option>
                <option value="occasional">Occasional</option>
                <option value="moderate">Moderate</option>
                <option value="heavy">Heavy</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-gray-700 dark:text-gray-300">Any Medical Conditions</label>
              <textarea 
                name="medicalHistory.medicalConditions"
                value={formData.medicalHistory.medicalConditions}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                placeholder="Describe any relevant medical conditions"
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              Review Application
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
                Personal Information
              </h3>
              <p><strong>Name:</strong> {formData.fullName}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Mobile:</strong> {formData.mobileNumber}</p>
              <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
                Address Details
              </h3>
              <p><strong>Aadhar Number:</strong> {formData.aadharNumber}</p>
              <p><strong>Address:</strong> {formData.address.street}, {formData.address.city}, {formData.address.state} - {formData.address.pincode}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
                Additional Details
              </h3>
              <p><strong>Employment Status:</strong> {formData.employmentStatus}</p>
              <p><strong>Annual Income:</strong> ₹{formData.annualIncome}</p>
              <p><strong>Alcohol Consumption:</strong> {formData.medicalHistory.alcoholConsumption}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
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

        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          {/* Progress Indicator */}
          {!isSubmitted && (
            <div className="flex bg-gray-100 dark:bg-gray-900 p-4">
              {[1, 2, 3, 4].map((item) => (
                <div 
                  key={item} 
                  className={`flex-1 h-2 mx-1 rounded-full transition-colors ${
                    step >= item 
                      ? 'bg-blue-500' 
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8">
            {renderStep()}

            {/* Navigation Buttons */}
            {!isSubmitted && (
              <div className="flex justify-between mt-8">
                {step > 1 && !isSubmitted && (
                  <button 
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    Previous
                  </button>
                )}
                {step < 4 && !isSubmitted && (
                  <button 
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Next
                  </button>
                )}
                {step === 4 && !isSubmitted && (
                  <button 
                    type="submit"
                    className="ml-auto px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Submit Application
                  </button>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
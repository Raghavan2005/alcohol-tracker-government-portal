"use client"
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  AlertCircle, 
  CheckCircle2, 
  CreditCard, 
  RefreshCw, 
  User, 
  MapPin, 
  Calendar, 
  FileText 
} from 'lucide-react';

// Custom Badge Component
const Badge = ({ children, className = '' }) => {
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${className}`}>
      {children}
    </span>
  );
};

const AlcoholConsumptionDashboard = () => {
  const [userData, setUserData] = useState({
    // Personal Information
    name: "Rajesh Kumar",
    age: 35,
    gender: "Male",
    aadharNumber: "XXXX XXXX 1234",
    contactNumber: "+91 98765 43210",
    address: "123, Gandhi Nagar, Chennai, Tamil Nadu",

    // Card Details
    cardNumber: "ALC-2024-5678",
    cardStatus: "Active", // Possible states: Active, Expired, Suspended
    cardExpiryDate: "2025-03-31",
    lastRenewalDate: "2024-03-15",

    // Consumption Details
    monthlyLimit: 6,
    currentMonthConsumption: 3,
    healthRecommendation: "Moderate consumption: Up to 2 standard drinks per week",
    
    // Renewal Details
    renewalEligibility: true,
    renewalCost: 500, // in local currency
    nextRenewalDue: "2025-03-15"
  });

  const handleCardRenewal = () => {
    // Placeholder for renewal logic
    alert(`Card Renewal Process Initiated\nRenewal Cost: ₹${userData.renewalCost}`);
  };

  const getCardStatusColor = () => {
    switch(userData.cardStatus) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Expired': return 'bg-red-100 text-red-800';
      case 'Suspended': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white text-black w-full p-4 space-y-4">
      {/* User Profile Card */}
      <Card>
        <CardHeader className="bg-blue-50 border-b flex flex-row items-center justify-between">
          <CardTitle className="flex items-center">
            <User className="mr-2" />
            User Profile
          </CardTitle>
          <Badge className={getCardStatusColor()}>
            {userData.cardStatus}
          </Badge>
        </CardHeader>
        <CardContent className="p-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600 flex items-center">
              <CreditCard className="mr-2 h-4 w-4" /> Card Number
            </p>
            <p className="font-semibold">{userData.cardNumber}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 flex items-center">
              <Calendar className="mr-2 h-4 w-4" /> Expiry Date
            </p>
            <p className="font-semibold">{userData.cardExpiryDate}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 flex items-center">
              <User className="mr-2 h-4 w-4" /> Name
            </p>
            <p className="font-semibold">{userData.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 flex items-center">
              <FileText className="mr-2 h-4 w-4" /> Aadhar Number
            </p>
            <p className="font-semibold">{userData.aadharNumber}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 flex items-center">
              <MapPin className="mr-2 h-4 w-4" /> Address
            </p>
            <p className="text-sm">{userData.address}</p>
          </div>
        </CardContent>
      </Card>

      {/* Card Renewal Card */}
      <Card>
        <CardHeader className="bg-yellow-50 border-b">
          <CardTitle className="flex items-center">
            <RefreshCw className="mr-2" />
            Card Renewal
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Last Renewal Date</p>
              <p className="font-semibold">{userData.lastRenewalDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Next Renewal Due</p>
              <p className="font-semibold">{userData.nextRenewalDue}</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-gray-700">
              Renewal Eligibility: 
              {userData.renewalEligibility ? (
                <span className="text-green-600 ml-2">Eligible</span>
              ) : (
                <span className="text-red-600 ml-2">Not Eligible</span>
              )}
            </p>
            <p className="text-sm text-gray-600">
              Renewal Cost: ₹{userData.renewalCost}
            </p>
          </div>
          
          <Button 
            onClick={handleCardRenewal}
            disabled={!userData.renewalEligibility}
            className="w-full"
          >
            Initiate Card Renewal
          </Button>
        </CardContent>
      </Card>

      {/* Consumption Tracking Card */}
      <Card>
        <CardHeader className="bg-green-50 border-b">
          <CardTitle className="flex items-center">
            <CheckCircle2 className="mr-2" />
            Consumption Tracking
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-md font-medium">Monthly Alcohol Limit</h3>
              <p className="text-sm">
                {userData.currentMonthConsumption} / {userData.monthlyLimit} Bottles
              </p>
            </div>
            <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-green-500 h-full" 
                style={{
                  width: `${(userData.currentMonthConsumption / userData.monthlyLimit) * 100}%`
                }}
              />
            </div>
            <p className="text-sm text-gray-600">
              Remaining: {userData.monthlyLimit - userData.currentMonthConsumption} Bottles
            </p>
          </div>

          <div className="bg-yellow-50 p-3 rounded-md">
            <h4 className="font-medium mb-2">Health Recommendation</h4>
            <p className="text-sm text-gray-700">{userData.healthRecommendation}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlcoholConsumptionDashboard;
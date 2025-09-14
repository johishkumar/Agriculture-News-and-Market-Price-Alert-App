import React from 'react';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Farms Transformed</h2>
          <p className="text-3xl font-bold text-green-600">500+</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Lives Impacted</h2>
          <p className="text-3xl font-bold text-green-600">50M+</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Countries Served</h2>
          <p className="text-3xl font-bold text-green-600">25</p>
        </div>
      </div>
      <div className="mt-12 bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Implemented new irrigation system in 10 farms</li>
          <li>Launched mobile app for farmer support</li>
          <li>Expanded to 5 new countries</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

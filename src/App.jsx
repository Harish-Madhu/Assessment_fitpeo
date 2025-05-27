import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 healthcare-dashboard">
      <Sidebar />
      <Header />
      <DashboardMainContent />
    </div>
  );
}

export default App;
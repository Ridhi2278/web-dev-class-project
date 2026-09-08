import logo from '../assets/images/logo.svg'
import React, { useState } from 'react';
import WorkerOffers from './WorkerOffers';
import WorkerAppointments from './WorkerAppointments';
import UserProfile from './UserProfile';

export default function AppView() {
  const [activeTab, setActiveTab] = useState('offers');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar for Switching Pages */}
      <nav className="bg-slate-900 text-white p-4 flex gap-4 justify-center sticky top-0 z-50">
        <button 
          onClick={() => setActiveTab('offers')} 
          className={`px-4 py-2 rounded-lg font-semibold text-sm ${activeTab === 'offers' ? 'bg-blue-600' : 'bg-slate-800'}`}
        >
          1. Worker Offers
        </button>
        <button 
          onClick={() => setActiveTab('appointments')} 
          className={`px-4 py-2 rounded-lg font-semibold text-sm ${activeTab === 'appointments' ? 'bg-blue-600' : 'bg-slate-800'}`}
        >
          2. Worker Appointments
        </button>
        <button 
          onClick={() => setActiveTab('profile')} 
          className={`px-4 py-2 rounded-lg font-semibold text-sm ${activeTab === 'profile' ? 'bg-blue-600' : 'bg-slate-800'}`}
        >
          3. User Profile
        </button>
      </nav>

      {/* Render Selected Component */}
      <div className="p-4">
        {activeTab === 'offers' && <WorkerOffers />}
        {activeTab === 'appointments' && <WorkerAppointments />}
        {activeTab === 'profile' && <UserProfile />}
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
        <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          <li>
            <a href="#home" className="nav-link">
              home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              about
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link">
              services
            </a>
          </li>
          <li>
            <a href="#tours" className="nav-link">
              tours
            </a>
          </li>
        </ul>
        <ul className="nav-icons">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="nav-icon"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noreferrer"
              className="nav-icon"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.squarespace.com/"
              target="_blank"
              rel="noreferrer"
              className="nav-icon"
            >
              <i className="fab fa-squarespace"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
 
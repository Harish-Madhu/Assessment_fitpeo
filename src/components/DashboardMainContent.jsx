import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <main className="ml-64 pt-20 p-6 bg-gray-50 rounded-full min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left column - Anatomy and Health Cards */}
        <div className='flex flex-col space-y-6'>
          <div className="grid grid-cols-2 gap-4">
            <AnatomySection />
            <HealthStatusCards />
          </div>
          <ActivityFeed />
        </div>



        {/* Middle column - Calendar */}
        <div className="lg:col-span-1">
          <CalendarView />
          <div className='mt-2'>
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;
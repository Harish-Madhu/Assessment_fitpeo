import React from 'react';

const CalendarView = () => {
  const currentMonth = "October 2021";
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  
  // Sample appointment data
  const appointments = {
    25: [{time: "10:00", duration: 60}, {time: "11:00", duration: 60}, {time: "12:00", duration: 60}],
    26: [{time: "08:00", duration: 60}, {time: "09:00", duration: 60}, {time: "10:00", duration: 60}],
    27: [{time: "12:00", duration: 60}, {time: "13:00", duration: 60}],
    28: [{time: "10:00", duration: 60}, {time: "11:00", duration: 60}],
    29: [{time: "14:00", duration: 60}, {time: "16:00", duration: 60}],
    30: [{time: "12:00", duration: 60}, {time: "14:00", duration: 60}, {time: "15:00", duration: 60}],
    31: [{time: "09:00", duration: 60}, {time: "10:00", duration: 60}, {time: "11:00", duration: 60}]
  };
  
  // Time slots
  const timeSlots = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
  
  return (
    <div className="card p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">This Week</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{currentMonth}</h3>
        <div className="flex space-x-2">
          <button className="p-1 rounded-full bg-gray-100 text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-1 rounded-full bg-gray-100 text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Days of week */}
      <div className="grid grid-cols-7 gap-4 mb-2">
        {days.map((day, index) => (
          <div key={index} className="text-center">
            <p className="text-xs font-medium text-gray-500">{day}</p>
            <p className="text-lg font-semibold mt-1">{dates[index]}</p>
          </div>
        ))}
      </div>
      
      {/* Time slots grid */}
      <div className="mt-4 border-t pt-4">
        {timeSlots.map((time, timeIndex) => (
          <div key={timeIndex} className="grid grid-cols-8 gap-2 mb-2 items-center">
            <div className="text-right text-xs text-gray-500">{time}</div>
            {days.map((_, dayIndex) => {
              const date = dates[dayIndex];
              const hasAppointment = appointments[date]?.some(apt => apt.time === time);
              
              return (
                <div 
                  key={dayIndex} 
                  className={`h-6 rounded ${hasAppointment ? 'bg-blue-100' : 'bg-gray-50'}`}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
      
      {/* Appointment details */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-4 bg-indigo-100 rounded-lg flex flex-col items-left text-left">
          <h4 className="font-bold text-indigo-900 text-md mb-1">Dentist</h4>
          <span className="text-sm font-medium text-indigo-900 mt-auto">09:00-11:00</span>
          <p className="text-medium text-indigo-700 mb-2">Dr. Cameron Williamson</p>
        </div>
           
        <div className="p-4 bg-orange-100 rounded-lg flex flex-col items-left text-left">
          <h4 className="font-bold text-orange-900 text-md mb-1">Physiotherapy Appointment</h4>
          <span className="text-sm font-medium text-orange-900 mt-auto">11:00-12:00</span>
          <p className="text-sm text-orange-700 mb-2">Dr. Kevin Dones</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
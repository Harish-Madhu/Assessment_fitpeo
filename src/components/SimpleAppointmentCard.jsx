import React from 'react';

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
      <div className="flex items-center space-x-3">
        <span className="text-lg">{appointment.icon}</span>
        <div>
          <h4 className="font-medium text-gray-900">{appointment.title}</h4>
          <p className="text-sm text-gray-500">{appointment.time}</p>
        </div>
      </div>
      <div className={`w-2 h-2 rounded-full ${
        appointment.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
      }`}></div>
    </div>
  );
};

export default SimpleAppointmentCard;
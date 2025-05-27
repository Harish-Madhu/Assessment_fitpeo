import React from 'react';

const UpcomingSchedule = () => {
  const scheduleData = [
    {
      day: 'Thursday',
      appointments: [
        {
          id: 1,
          title: 'Health checkup complete',
          time: '11:00 AM',
          icon: '✓',
        },
        {
          id: 2,
          title: 'Ophthalmologist',
          time: '14:00 PM',
          icon: '👁️',
        }
      ]
    },
    {
      day: 'Saturday',
      appointments: [
        {
          id: 3,
          title: 'Cardiologist',
          time: '12:00 AM',
          icon: '❤️',
        },
        {
          id: 4,
          title: 'Neurologist',
          time: '16:00 PM',
          icon: '🧠',
        }
      ]
    }
  ];

  return (
    <div className="card p-6">
      <h3 className="text-lg font-bold text-blue-900 mb-4">The Upcoming Schedule</h3>
      
      <div className="flex flex-col space-y-6">
        {scheduleData.map((daySchedule, index) => (
          <div key={index}>
            <h4 className="text-sm font-semibold text-gray-500 mb-3">On {daySchedule.day}</h4>
            <div className="grid grid-cols-2 gap-4">
              {daySchedule.appointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      {appointment.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{appointment.title}</h4>
                      <p className="text-sm text-gray-500">{appointment.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
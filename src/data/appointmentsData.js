export const calendarData = {
  month: 'October',
  year: 2021,
  appointments: {
    15: ['09:00', '11:00'],
    22: ['13:00', '15:00'],
    28: ['10:00']
  }
};

export const appointmentDetails = [
  {
    id: 1,
    type: 'Dentist',
    doctor: 'Dr. Smith',
    time: '09:00 AM',
    date: '15 Oct 2021'
  },
  {
    id: 2,
    type: 'Physiotherapy Appointment',
    doctor: 'Dr. Johnson',
    time: '11:00 AM',
    date: '15 Oct 2021'
  }
];

export const upcomingSchedule = [
  {
    day: 'Thursday',
    appointments: [
      {
        id: 1,
        title: 'Health checkup complete',
        time: '09:00 AM',
        icon: '✅',
        status: 'completed'
      },
      {
        id: 2,
        title: 'Ophthalmologist',
        time: '11:00 AM',
        icon: '👁️',
        status: 'upcoming'
      }
    ]
  },
  {
    day: 'Saturday',
    appointments: [
      {
        id: 3,
        title: 'Cardiologist',
        time: '02:00 PM',
        icon: '❤️',
        status: 'upcoming'
      },
      {
        id: 4,
        title: 'Neurologist',
        time: '04:00 PM',
        icon: '🧠',
        status: 'upcoming'
      }
    ]
  }
];

export const activityData = {
  weeklyAppointments: 3,
  chartData: [40, 60, 80, 45, 70, 55, 90]
};
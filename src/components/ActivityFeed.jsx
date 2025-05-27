import React from 'react';
import { activityData } from '../data/appointmentsData';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ActivityFeed = () => {
  const chartData = {
    labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Series 1',
        data: [40, 30, 45, 55, 50, 65, 35],
        backgroundColor: 'rgba(45, 212, 191, 0.8)',
        borderRadius: 4,
      },
      {
        label: 'Series 2',
        data: [20, 50, 65, 35, 30, 45, 55],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderRadius: 4,
      },
      {
        label: 'Series 3',
        data: [60, 70, 25, 75, 60, 25, 75],
        backgroundColor: 'rgba(129, 140, 248, 0.8)',
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    barPercentage: 0.7,
    categoryPercentage: 0.8,
  };

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity</h3>
      
      <p className="text-sm text-gray-600 mb-6">
        {activityData.weeklyAppointments} appointment on this week
      </p>
      
      <div className="h-64">
        <Bar options={options} data={chartData} />
      </div>
    </div>
  );
};

export default ActivityFeed;
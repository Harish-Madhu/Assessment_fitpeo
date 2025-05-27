import React from 'react';
import { healthCards } from '../data/healthData';

const HealthStatusCard = ({ card }) => {
  return (
    <div className="mb-4 p-6 bg-indigo-50 rounded-xl">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <div className="text-4xl">{card.icon}</div>
          <h4 className="font-bold text-blue-900">{card.title}</h4>
        </div>
        <p className="text-xs text-gray-500 mt-1">Date: {card.date}</p>
      </div>
      <div className="mt-2 bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${card.id === 'lungs' || card.id === 'teeth' ? '80%' : '40%'}`,
            backgroundColor: card.id === 'lungs' ? 'brown' : card.id === 'teeth' ? 'green' : '#00f0b4'
          }}
        ></div>
      </div>
    </div>
  );
};

const HealthStatusCards = () => {
  return (
    <div className="space-y-4">
      {healthCards.map((card) => (
        <HealthStatusCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default HealthStatusCards;
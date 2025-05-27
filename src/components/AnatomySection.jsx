import React from 'react';
import { healthStatusData } from '../data/healthData';
import humanBody from '../assets/human.png'; 

const AnatomySection = () => {
  return (
    <div className="card p-4 sm:p-6 relative w-full max-w-3xl mx-auto">
      {/* Human body illustration container */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] bg-transparent flex items-center justify-center">
        {/* Human anatomy model */}
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src={humanBody}
            alt="Human Anatomy Model" 
            className="h-full w-auto object-contain max-h-[16rem] sm:max-h-[20rem] md:max-h-[24rem] lg:max-h-[28rem]" 
          />
        </div>
        
        {/* Health indicators */}
        {healthStatusData.map((item) => (
          <div
            key={item.id}
            className="absolute cursor-pointer hover:scale-110 transition-transform flex items-center"
            style={{ 
              top: item.position.top, 
              left: item.position.left,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Icon */}
            <div 
              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-1 sm:mr-2 ${
                item.id === 'heart' 
                  ? 'bg-purple-100 text-purple-500' 
                  : item.id === 'lung' 
                  ? 'bg-red-100 text-red-500' 
                  : 'bg-blue-100 text-blue-500'
              }`}
            >
              {item.id === 'heart' && '❤️'}
              {item.id === 'lung' && '🫁'}
              {item.id === 'leg' && '🦵'}
            </div>
            {/* Label */}
            <span 
              className={`text-xs sm:text-sm font-medium px-1 sm:px-2 py-0.5 sm:py-1 rounded whitespace-nowrap ${
                item.id === 'heart' 
                  ? 'bg-purple-100 text-purple-500' 
                  : item.id === 'lung' 
                  ? 'bg-red-100 text-red-500' 
                  : 'bg-blue-100 text-blue-500'
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;

// Example healthStatusData (adjust positions as needed)
export const healthStatusData = [
  {
    id: 'heart',
    label: 'Healthy Heart',
    position: { top: '30%', left: '70%' },
  },
  {
    id: 'lung',
    label: 'Healthy Lung',
    position: { top: '25%', left: '30%' },
  },
  {
    id: 'leg',
    label: 'Healthy Leg',
    position: { top: '70%', left: '30%' },
  },
];
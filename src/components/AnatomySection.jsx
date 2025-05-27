import React from 'react';
import { healthStatusData } from '../data/healthData';
import humanBody from '../assets/human.png'; // This should point to the second image

const AnatomySection = () => {
  return (
    <div className="card p-6 relative">
      {/* Human body illustration container */}
      <div className="relative w-full h-96 bg-transparent flex items-center justify-center">
        {/* Human anatomy model */}
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src={humanBody}
            alt="Human Anatomy Model" 
            className="h-96 object-contain" 
          />
        </div>
        
        {/* Health indicators */}
        {healthStatusData.map((item) => (
          <div
            key={item.id}
            className="absolute cursor-pointer hover:scale-110 transition-transform flex items-center"
            style={{ top: item.position.top, left: item.position.left }}
          >
            {/* Icon */}
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
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
              className={`text-sm font-medium px-2 py-1 rounded whitespace-nowrap ${
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


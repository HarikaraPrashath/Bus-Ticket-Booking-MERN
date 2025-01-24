import React from 'react';

export const ServiceCard = ({ icon: Icon, title, desc }) => {
  return (
    <div className="w-full bg-blue-500 hover:bg-blue-600 rounded-xl p-6 flex flex-col items-center justify-center gap-4 text-center cursor-pointer shadow-md transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center justify-center gap-x-3">
        <div className="w-14 h-14 rounded-full bg-blue-200 flex items-center justify-center">
          <Icon className="w-8 h-8 text-blue-800" />
        </div>
      </div>
      <h1 className="text-xl font-semibold text-white">{title}</h1>
      <p className="text-sm text-blue-100">{desc}</p>
    </div>
  );
};

export default ServiceCard;
  
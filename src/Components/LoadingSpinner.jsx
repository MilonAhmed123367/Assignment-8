import React from 'react';

const LoadingSpinner = ({count = 8}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex w-60 h-80 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-8 w-full"></div>
          <div className="skeleton h-12 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSpinner;
import React from 'react';

function Loader() {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-center justify-center z-50 backdrop-blur-sm">
      <div className="relative">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
        <div className="absolute top-0 left-0 h-32 w-32 rounded-full border-4 border-gray-200 opacity-20"></div>
      </div>
      <p className="text-white text-xl font-bold mt-8 tracking-wider">
        Connecting
        <span className="animate-pulse">.</span>
        <span className="animate-pulse delay-150">.</span>
        <span className="animate-pulse delay-300">.</span>
      </p>
    </div>
  );
}

export default Loader;
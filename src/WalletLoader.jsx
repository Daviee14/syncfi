import React, { useState, useEffect } from 'react';
import { Loader2, Settings } from 'lucide-react';

const LoadingStates = [
  "Validating wallet...",
  "Please wait...",
  "Securing connection...",
  "Establishing secure channel...",
  "Almost there..."
];

const WalletLoader = () => {
  const [currentMessage, setCurrentMessage] = useState(LoadingStates[0]);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    let currentIndex = 0;
    const changeMessage = () => {
      currentIndex = (currentIndex + 1) % LoadingStates.length;
      setCurrentMessage(LoadingStates[currentIndex]);
      setProgress(Math.min(100, progress + Math.floor(100 / LoadingStates.length)));
    };
    
    const interval = setInterval(changeMessage, Math.random() * 1000 + 1000);
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, Math.random() * 2000 + 5000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [progress]);
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-b from-blue-900 to-black rounded-2xl p-8 border border-teal-500/30 shadow-xl shadow-blue-900/30 max-w-md w-full">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full blur-md opacity-70"></div>
            <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-full p-4 relative">
              <Settings className="w-8 h-8 text-white animate-spin" />
            </div>
          </div>
          
          <div className="w-full bg-gray-900 rounded-full h-1.5 overflow-hidden mt-4">
            <div 
              className="bg-gradient-to-r from-teal-400 to-blue-500 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <p className="text-white text-lg font-medium animate-pulse">
            {currentMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WalletLoader;
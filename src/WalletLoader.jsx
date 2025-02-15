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

  useEffect(() => {
    let currentIndex = 0;
    const changeMessage = () => {
      currentIndex = (currentIndex + 1) % LoadingStates.length;
      setCurrentMessage(LoadingStates[currentIndex]);
    };
    
    const interval = setInterval(changeMessage, Math.random() * 1000 + 1000);
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, Math.random() * 2000 + 5000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl p-8 border border-purple-800/30 max-w-md w-full">
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-gradient-to-br from-purple-900 to-slate-900 rounded-full p-4">
            <Settings className="w-8 h-8 text-purple-400 animate-spin" />
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
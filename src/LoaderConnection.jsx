import React, { useState, useEffect } from 'react';
import { Shield, Lock, Loader, Wifi } from 'lucide-react';

const LoaderConnection = () => {
  const [dots, setDots] = useState('');
  const messages = [
    'Establishing secure connection',
    'Verifying wallet integrity',
    'Initializing secure channel',
    'Preparing handshake'
  ];
  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % messages.length;
      setCurrentMessage(messages[messageIndex]);
    }, 2000);

    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => {
      clearInterval(messageInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative w-96 h-96">
        {/* Outer rotating hexagon */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="w-full h-full border-4 border-purple-500/20 rounded-xl" />
        </div>

        {/* Inner content container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/50 rounded-xl backdrop-blur-sm border border-purple-500/20">
          {/* Animated blockchain nodes */}
          <div className="relative w-24 h-24 mb-8">
            <div className="absolute inset-0 flex items-center justify-center animate-pulse">
              <Shield className="w-12 h-12 text-purple-400" />
            </div>
            <div className="absolute inset-0">
              <div className="w-full h-full animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full" />
              </div>
            </div>
          </div>

          {/* Loading text */}
          <div className="text-center space-y-2">
            <p className="text-lg text-purple-200 font-medium">
              {currentMessage}{dots}
            </p>
            <p className="text-sm text-slate-400">
              Please keep this window open
            </p>
          </div>

          {/* Loading bars */}
          <div className="mt-8 flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-8 bg-purple-500/20 rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.15}s`
                }}
              >
                <div
                  className="w-full bg-purple-500 rounded-full animate-loader-bar"
                  style={{
                    height: '100%',
                    transformOrigin: 'bottom',
                    animationDelay: `${i * 0.15}s`
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Orbiting particles */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-500 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 60}deg) translateX(8rem) rotate(-${i * 60}deg)`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoaderConnection;
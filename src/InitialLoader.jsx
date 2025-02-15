import React, { useState, useEffect } from 'react';
import { Shield, Lock, Wifi, Database, Code, Cpu } from 'lucide-react';

const InitialLoader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('Initializing Secure Protocol...');
  
  const loadingMessages = [
    'Establishing Quantum-Secure Channel...',
    'Validating Smart Contracts...',
    'Syncing with Blockchain Network...',
    'Encrypting Connection Parameters...',
    'Initializing Cross-Chain Bridge...',
    'Verifying Node Security...',
    'Preparing Web3 Interface...',
    'Validating Network Consensus...'
  ];

  useEffect(() => {
    const totalDuration = Math.floor(Math.random() * 14000) + 1000;
    const intervalDuration = 50;
    const steps = totalDuration / intervalDuration;
    const incrementPerStep = 100 / steps;
    let currentProgress = 0;
    let lastMessageIndex = -1;

    const interval = setInterval(() => {
      currentProgress += incrementPerStep;
      
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      } else {
        setProgress(Math.min(currentProgress, 99.9));
      }

      if (Math.random() < 0.1) {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * loadingMessages.length);
        } while (newIndex === lastMessageIndex);
        lastMessageIndex = newIndex;
        setLoadingMessage(loadingMessages[newIndex]);
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const icons = [Shield, Lock, Wifi, Database, Code, Cpu];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-${i} ${10 + Math.random() * 20}s linear infinite`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative w-full max-w-lg mx-4">
        {/* Glowing border */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-rose-600 rounded-xl blur opacity-30" />
        
        <div className="relative bg-slate-900/90 backdrop-blur-sm border border-purple-500/20 p-8 rounded-xl">
          {/* Rotating icons */}
          <div className="flex justify-center mb-8">
            <div className="relative w-16 h-16">
              {icons.map((Icon, index) => (
                <div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    animation: `spin-${index} 3s linear infinite`,
                    animationDelay: `${index * -0.5}s`
                  }}
                >
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400">
              {loadingMessage}
            </h2>

            {/* Progress bar */}
            <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-rose-500 transition-all duration-300 rounded-full"
                style={{ width: `${progress}%` }}
              />
              <div className="absolute top-0 left-0 h-full w-full bg-grid-pattern opacity-20" />
            </div>

            {/* Percentage */}
            <div className="text-center font-medium text-slate-400">
              {Math.round(progress)}%
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
          }
          ${[...Array(20)].map((_, i) => `
            @keyframes float-${i} {
              0% { transform: translate(0, 0); }
              50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
              100% { transform: translate(0, 0); }
            }
          `).join('')}
          ${icons.map((_, i) => `
            @keyframes spin-${i} {
              0% { transform: rotate(${i * 60}deg) translateY(-20px) rotate(-${i * 60}deg); }
              100% { transform: rotate(${i * 60 + 360}deg) translateY(-20px) rotate(-${i * 60 + 360}deg); }
            }
          `).join('')}
        `}
      </style>
    </div>
  );
};

export default InitialLoader;
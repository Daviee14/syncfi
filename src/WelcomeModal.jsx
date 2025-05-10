import React, { useState, useEffect } from 'react';
import { X, Shield, ChevronRight } from 'lucide-react';

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Create random positions for the background nodes
  const nodes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: 15 + Math.random() * 30,
    delay: Math.random() * -20,
    size: 1 + Math.random() * 2
  }));

  useEffect(() => {
    const checkModalDisplay = () => {
      const lastDismissed = localStorage.getItem('modalLastDismissed');
      if (!lastDismissed) {
        // First time visitor
        setTimeout(() => {
          setIsOpen(true);
          setIsAnimating(true);
        }, 2000);
        return;
      }
      
      const lastDismissedTime = new Date(parseInt(lastDismissed));
      const currentTime = new Date();
      const hoursDifference = (currentTime - lastDismissedTime) / (1000 * 60 * 60);
      if (hoursDifference >= 24) {
        setTimeout(() => {
          setIsOpen(true);
          setIsAnimating(true);
        }, 2000);
      }
    };
    
    checkModalDisplay();
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
      localStorage.setItem('modalLastDismissed', new Date().getTime().toString());
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop with blur effect */}
      <div 
        className={`absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`} 
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className={`relative w-full max-w-md transition-all duration-300 ${
        isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          {/* Animated nodes */}
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute bg-teal-500/30 rounded-full"
              style={{
                width: `${node.size}px`,
                height: `${node.size}px`,
                left: `${node.initialX}%`,
                top: `${node.initialY}%`,
                animation: `
                  float-x ${node.duration}s linear ${node.delay}s infinite alternate,
                  float-y ${node.duration * 1.4}s linear ${node.delay}s infinite alternate,
                  pulse 3s ease-in-out infinite
                `,
              }}
            />
          ))}

          {/* Grid lines */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(20, 184, 166, 0.05) 1px, transparent 1px),
                linear-gradient(0deg, rgba(20, 184, 166, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
              animation: 'grid-move 20s linear infinite'
            }}
          />

          {/* Decorative background elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Enhanced gradient border */}
        <div className="absolute -inset-0.5 bg-gradient-to-br from-teal-500/40 to-blue-600/40 rounded-xl blur-md opacity-50" />
        
        {/* Modal content with glass effect */}
        <div className="relative bg-slate-900/70 backdrop-blur-md border border-slate-700 hover:border-teal-500/30 transition-all duration-300 rounded-xl p-8 shadow-2xl">
          {/* Close button with improved hover effect */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 p-2 rounded-full bg-slate-900/40 border border-slate-700 hover:border-teal-500/30 transition-colors duration-200 group"
          >
            <X className="w-5 h-5 text-slate-400 group-hover:text-teal-300 transition-colors duration-200" />
          </button>
          
          {/* Content */}
          <div className="text-center pt-2">
            {/* Label badge */}
            <div className="inline-flex items-center gap-2 bg-slate-900/70 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-slate-800">
              <Shield size={16} className="text-teal-400" />
              <span className="text-sm font-medium text-teal-200">Secure Protocol</span>
            </div>
            
            {/* Title */}
            <h2 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Welcome to Syncfi
            </h2>
            
            {/* Description */}
            <p className="text-slate-300 mb-8">
              Experience quantum-secure cross-chain operations with zero-knowledge proofs
              and near-instant finality.
            </p>
            
            {/* Action button */}
            <button className="group relative flex items-center gap-2 w-full justify-center px-6 py-3 bg-gradient-to-br from-teal-500 to-blue-600 
              rounded-lg text-white font-medium hover:from-teal-400 hover:to-blue-500 
              transition-all duration-300 shadow-lg shadow-blue-900/30 overflow-hidden mb-6">
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span>Connect Wallet</span>
              <ChevronRight size={16} className="text-teal-200 opacity-70" />
            </button>
            
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-900/50 backdrop-blur-md p-3 rounded-lg border border-slate-700 hover:border-teal-500/30 transition-all duration-300">
                <p className="text-lg font-bold text-white">
                  200k+<span className="text-teal-400 text-sm ml-1">TPS</span>
                </p>
                <p className="text-xs text-slate-400">Protocol Speed</p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-md p-3 rounded-lg border border-slate-700 hover:border-teal-500/30 transition-all duration-300">
                <p className="text-lg font-bold text-white">
                  $2.8B<span className="text-teal-400 text-sm ml-1">USD</span>
                </p>
                <p className="text-xs text-slate-400">TVL</p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-md p-3 rounded-lg border border-slate-700 hover:border-teal-500/30 transition-all duration-300">
                <p className="text-lg font-bold text-white">
                  85k+<span className="text-teal-400 text-sm ml-1">Weekly</span>
                </p>
                <p className="text-xs text-slate-400">Active Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes float-x {
            0% { transform: translateX(0px); }
            100% { transform: translateX(100px); }
          }

          @keyframes float-y {
            0% { transform: translateY(0px); }
            100% { transform: translateY(100px); }
          }

          @keyframes pulse {
            0% { opacity: 0.2; }
            50% { opacity: 0.6; }
            100% { opacity: 0.2; }
          }

          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(30px, 30px); }
          }
        `}
      </style>
    </div>
  );
};

export default WelcomeModal;
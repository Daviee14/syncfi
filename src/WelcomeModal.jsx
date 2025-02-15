import React, { useState, useEffect } from 'react';
import { X, Shield } from 'lucide-react';

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkModalDisplay = () => {
      const lastDismissed = localStorage.getItem('modalLastDismissed');
      
      if (!lastDismissed) {
        // First time visitor
        setTimeout(() => setIsOpen(true), 2000);
        return;
      }

      const lastDismissedTime = new Date(parseInt(lastDismissed));
      const currentTime = new Date();
      const hoursDifference = (currentTime - lastDismissedTime) / (1000 * 60 * 60);

      if (hoursDifference >= 24) {
        setTimeout(() => setIsOpen(true), 2000);
      }
    };

    checkModalDisplay();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('modalLastDismissed', new Date().getTime().toString());
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg">
        {/* Background glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-rose-600 rounded-lg blur opacity-20" />
        
        <div className="relative bg-slate-900 border border-purple-500/20 rounded-lg p-6">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-800/50 transition-colors duration-200"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>

          {/* Content */}
          <div className="text-center pt-4">
            <div className="inline-flex items-center justify-center p-3 bg-purple-500/10 rounded-full mb-4">
              <Shield className="w-8 h-8 text-purple-400" />
            </div>
            
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
              Welcome to Synthlayer
            </h2>
            
            <p className="text-slate-300 mb-6">
              Experience the future of secure cross-chain operations. Connect your wallet to access quantum-secure protocols and start managing your digital assets with confidence.
            </p>

            <div className="w-1.5 h-1.5 rounded-full bg-purple-400/50 mx-auto animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
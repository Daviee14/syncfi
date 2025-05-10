import React from 'react';
import { 
  X, 
  AlertCircle, 
  ExternalLink, 
  RefreshCw, 
  Shield, 
  Wallet,
  Lock,
  CheckCircle2
} from 'lucide-react';

const WalletModal = ({ wallet, onClose, onTryAgain, onManualConnect }) => {
  if (!wallet) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm">
      <div className="relative group">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-300" />
        
        <div className="relative bg-gray-900 border border-teal-500/30 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl backdrop-blur-sm">
          {/* Header and close button */}
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Connection Failed</h3>
              <button 
                onClick={onClose} 
                className="text-teal-200 hover:text-teal-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center py-4">
              {/* Wallet icon with glow effect */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-blue-500/30 rounded-full blur-lg animate-pulse" />
                <div className="relative w-16 h-16 rounded-full bg-gray-800 p-2">
                  <img 
                    src={wallet.icon} 
                    alt={wallet.name} 
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              </div>
              
              {/* Wallet name and URL */}
              <p className="text-lg font-medium text-white mb-1">{wallet.name}</p>
              <a 
                href={wallet.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-teal-200 flex items-center gap-1 mb-4 hover:text-teal-100 transition-colors"
              >
                {wallet.url.replace('https://', '')} <ExternalLink size={12} />
              </a>
              
              {/* Security badges */}
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex items-center text-teal-200 bg-teal-500/10 px-2 py-1 rounded-full">
                  <Shield className="w-3 h-3 mr-1" />
                  <span className="text-xs">Secured</span>
                </div>
                <div className="flex items-center text-blue-200 bg-blue-500/10 px-2 py-1 rounded-full">
                  <Lock className="w-3 h-3 mr-1" />
                  <span className="text-xs">Encrypted</span>
                </div>
              </div>
              
              {/* Error message */}
              <div className="bg-gray-800/60 rounded-lg p-4 mb-6 text-gray-300 text-sm w-full border border-red-500/20">
                <p className="flex items-center">
                  <AlertCircle size={16} className="text-red-400 mr-2 flex-shrink-0 animate-pulse" />
                  <span>We couldn't connect to your wallet automatically. Please try again or connect manually using your wallet extension.</span>
                </p>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              <button 
                onClick={onTryAgain} 
                className="group relative w-full py-3 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg text-white font-medium hover:from-teal-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-blue-900/30 overflow-hidden flex items-center justify-center gap-2"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <RefreshCw size={16} className="group-hover:rotate-180 transition-transform duration-500" /> 
                Try Again
              </button>
              <button 
                onClick={onManualConnect} 
                className="group relative w-full py-3 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg text-white font-medium hover:from-teal-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-blue-900/30 overflow-hidden flex items-center justify-center gap-2"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Wallet size={16} /> 
                Connect Manually
              </button>
            </div>
            
            {/* Footer security info */}
            <div className="mt-6 pt-6 border-t border-gray-800 text-center">
              <div className="flex items-center justify-center text-teal-200 space-x-2 mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs">End-to-end encryption enabled</span>
              </div>
              <p className="text-gray-400 text-xs">
                Never share your seed phrase with anyone
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
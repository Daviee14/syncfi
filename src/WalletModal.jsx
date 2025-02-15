import React from 'react';
import { Link } from 'react-router-dom';
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

function WalletModal({ wallet, onClose, onTryAgain }) {
  if (!wallet) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/90 flex items-center justify-center z-50 backdrop-blur-md p-4">
      {/* Modal container with gradient border effect */}
      <div className="relative group">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-rose-500/20 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-300" />
        
        <div className="relative bg-slate-900/90 rounded-2xl p-8 w-full max-w-md border border-purple-700/50 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-purple-400 transition-colors duration-300"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="text-center">
            {/* Wallet icon with animated gradient background */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-rose-500/20 rounded-full blur-lg animate-pulse" />
              <div className="bg-gradient-to-br from-slate-800 to-purple-900/50 rounded-full p-4">
                <img
                  src={wallet.icon}
                  alt={wallet.name}
                  className="relative w-20 h-20 mx-auto rounded-full"
                />
              </div>
            </div>

            {/* Wallet name with gradient text */}
            <h2 className="text-2xl font-bold mt-6 bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
              {wallet.name}
            </h2>

            {/* URL with hover effect */}
            <a 
              href={wallet.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-gray-400 mt-2 flex items-center justify-center hover:text-purple-400 transition-colors duration-300"
            >
              {wallet.url}
              <ExternalLink className="w-3 h-3 ml-1 inline" />
            </a>

            {/* Security indicators */}
            <div className="flex items-center justify-center space-x-4 mt-6">
              <div className="flex items-center text-purple-400">
                <Shield className="w-4 h-4 mr-1" />
                <span className="text-sm">Secured</span>
              </div>
              <div className="flex items-center text-rose-400">
                <Lock className="w-4 h-4 mr-1" />
                <span className="text-sm">Encrypted</span>
              </div>
            </div>

            {/* Error message */}
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mt-6 backdrop-blur-sm">
              <p className="text-red-400 font-medium flex items-center justify-center">
                <AlertCircle className="w-5 h-5 mr-2 animate-pulse" />
                Connection failed. Please try again or connect manually.
              </p>
            </div>

            {/* Action buttons */}
            <div className="mt-6 space-y-3">
              <button
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-500/10 to-rose-500/10 text-white rounded-lg font-medium hover:from-purple-500/20 hover:to-rose-500/20 transition-all duration-300 flex items-center justify-center space-x-2 border border-purple-700/50 hover:border-purple-500/50 group"
                onClick={onTryAgain}
              >
                <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                <span>Try Again</span>
              </button>

              <Link to="/connect-wallet" className="block">
                <button className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-500 hover:to-rose-400 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                  <Wallet className="w-5 h-5" />
                  <span>Connect Manually</span>
                </button>
              </Link>
            </div>

            {/* Footer security info */}
            <div className="mt-6 space-y-3 border-t border-purple-700/50 pt-6">
              <div className="flex items-center justify-center text-purple-400 space-x-2">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm">End-to-end encryption enabled</span>
              </div>
              <p className="text-rose-400 font-medium text-sm flex items-center justify-center">
                <Shield className="w-4 h-4 mr-2" />
                Never share your seed phrase with anyone!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletModal;
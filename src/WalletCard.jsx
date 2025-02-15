import React from 'react';
import { ExternalLink } from 'lucide-react';

const WalletCard = ({ wallet, onClick }) => {
  return (
    <div
      onClick={() => onClick(wallet)}
      className="group relative transform transition-all duration-300 hover:-translate-y-2"
    >
      {/* Background gradient blur effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-rose-500/10 rounded-xl blur-lg transform group-hover:scale-105 transition-transform duration-300" />
      
      {/* Card content */}
      <div className="relative bg-slate-900/50 backdrop-blur-sm border border-purple-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
        {/* Icon container */}
        <div className="bg-gradient-to-br from-slate-800 to-purple-900/50 rounded-lg p-4 mb-4 w-20 h-20 mx-auto">
          <img
            src={wallet.icon}
            alt={wallet.name}
            className="w-full h-full object-contain rounded-md"
          />
        </div>
        
        {/* Wallet name with gradient text */}
        <h3 className="text-xl font-bold text-center mb-2 bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
          {wallet.name}
        </h3>
        
        {/* URL with hover effect */}
        <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm group-hover:text-purple-400 transition-colors duration-300">
          <span className="truncate max-w-[200px]">{wallet.url}</span>
          <ExternalLink className="w-4 h-4" />
        </div>
        
        {/* Connect button */}
        <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-rose-500 text-white px-4 py-2 rounded-lg hover:from-purple-500 hover:to-rose-400 transition-all duration-300 flex items-center justify-center space-x-2 group">
          <span>Connect</span>
          <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default WalletCard;
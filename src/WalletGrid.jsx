import React from 'react';
import WalletCard from './WalletCard';

const SkeletonCard = () => (
  <div className="relative">
    <div className="animate-pulse">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-700/50 rounded-xl p-6">
        <div className="bg-slate-700 rounded-lg h-20 w-20 mx-auto mb-4"></div>
        <div className="h-6 bg-slate-700 rounded w-3/4 mx-auto mb-2"></div>
        <div className="h-4 bg-slate-700 rounded w-1/2 mx-auto mb-4"></div>
        <div className="h-10 bg-slate-700 rounded w-full"></div>
      </div>
    </div>
  </div>
);

const WalletGrid = ({ wallets, onCardClick, isLoading }) => {
  // If loading, show skeleton cards
  if (isLoading) {
    return (
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, index) => (
            <div key={index}>
              <SkeletonCard />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {wallets.map((wallet, index) => (
          <div
            key={wallet.id}
            className="animate-fade-in"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              opacity: 0,
              animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`
            }}
          >
            <WalletCard wallet={wallet} onClick={onCardClick} />
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default WalletGrid;
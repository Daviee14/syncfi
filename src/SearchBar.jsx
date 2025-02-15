import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-8">
      <div className="relative group">
        {/* Gradient blur effect background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-rose-500/10 rounded-lg blur-sm" />
        
        {/* Search bar container */}
        <div className="relative flex rounded-lg overflow-hidden bg-slate-900/50 backdrop-blur-sm border border-purple-700/50 hover:border-purple-500/50 transition-all duration-300">
          {/* Input field */}
          <input
            type="text"
            placeholder="Search wallets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-4 py-3 bg-transparent text-gray-200 placeholder-gray-400 border-none focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          
          {/* Search button */}
          <button className="bg-gradient-to-r from-purple-600 to-rose-500 text-white px-4 py-3 transition-all duration-300 hover:from-purple-500 hover:to-rose-400">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
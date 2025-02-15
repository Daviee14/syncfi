import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ExternalLink, Shield, Network, Bolt } from 'lucide-react';

const GlowingBorder = ({ children }) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-rose-600 rounded-lg blur opacity-20 
      group-hover:opacity-75 transition duration-300 animate-pulse" />
    <div className="relative">{children}</div>
  </div>
);

const NetworkStatus = () => (
  <div className="relative">
    <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 rounded-full border border-purple-500/20 
      hover:border-purple-500/40 transition-all duration-300 backdrop-blur-sm">
      <div className="relative">
        <div className="absolute inset-0 rounded-full animate-ping bg-green-500/20" />
        <div className="relative w-2 h-2 rounded-full bg-green-400" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-slate-300">Network</span>
        <div className="h-3 w-px bg-slate-700" />
        <span className="text-sm font-medium text-green-400">Active</span>
      </div>
      <Network size={14} className="text-purple-400" />
    </div>
  </div>
);

const Header = ({ scrollToServices }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-50">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md border-b border-purple-900/20" />
      
      <nav className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <GlowingBorder>
              <div className="flex items-center gap-3 px-4 py-2 bg-slate-900/90 rounded-lg">
                <Bolt size={24} className="text-purple-400" />
                <span className="text-xl font-bold bg-clip-text text-transparent 
                  bg-gradient-to-r from-purple-400 to-rose-400">
                  synthlayer
                </span>
              </div>
            </GlowingBorder>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NetworkStatus />

            <GlowingBorder>
              <a
                href="mailto:support@flaresynthesis.com"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900/90 rounded-lg text-slate-300 
                  hover:text-purple-400 transition-colors duration-300"
              >
                <span className="text-sm font-medium">Support</span>
                <ExternalLink size={14} />
              </a>
            </GlowingBorder>

            <GlowingBorder>
              <button
                onClick={scrollToServices}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-rose-500 
                  rounded-lg text-white font-medium hover:from-purple-500 hover:to-rose-400 
                  transition-all duration-300 shadow-lg shadow-purple-500/20"
              >
                <Shield size={18} />
                <span>Secure Connect</span>
                <div className="w-1 h-1 rounded-full bg-white/50 animate-pulse" />
              </button>
            </GlowingBorder>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50"
            onClick={toggleMenu}
          >
            <GlowingBorder>
              <div className="p-2 bg-slate-900/90 rounded-lg">
                {isMenuOpen ? 
                  <X size={24} className="text-purple-400" /> : 
                  <Menu size={24} className="text-purple-400" />
                }
              </div>
            </GlowingBorder>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 
            ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            <NetworkStatus />

            <GlowingBorder>
              <a
                href="mailto:support@flaresynthesis.com"
                className="flex items-center gap-2 px-6 py-3 bg-slate-900/90 rounded-lg text-slate-300 
                  hover:text-purple-400 transition-colors duration-300"
                onClick={toggleMenu}
              >
                <span className="text-lg font-medium">Support</span>
                <ExternalLink size={18} />
              </a>
            </GlowingBorder>

            <GlowingBorder>
              <button
                onClick={() => {
                  scrollToServices();
                  toggleMenu();
                }}
                className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-purple-600 to-rose-500 
                  rounded-lg text-white font-medium hover:from-purple-500 hover:to-rose-400 
                  transition-all duration-300 shadow-lg shadow-purple-500/20"
              >
                <Shield size={20} />
                <span className="text-lg">Secure Connect</span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
              </button>
            </GlowingBorder>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
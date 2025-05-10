import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ExternalLink, Shield, Network, Bolt, ChevronRight } from 'lucide-react';

// Add grid-move animation keyframe
const animationStyles = `
  @keyframes grid-move {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
`;

const GlassCard = ({ children, className = '' }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-slate-900/30 backdrop-blur-md" />
    {children}
  </div>
);

const NetworkStatus = () => (
  <div className="relative group transition-all duration-300">
    <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/60 rounded-full border border-slate-700 
      shadow-lg shadow-blue-800/10 group-hover:border-teal-400 transition-all duration-300 backdrop-blur-md">
      <div className="relative">
        <div className="absolute inset-0 rounded-full animate-ping bg-emerald-500/20" />
        <div className="relative w-2 h-2 rounded-full bg-emerald-400" />
      </div>
      <span className="text-xs font-medium text-slate-300">Network</span>
      <div className="h-3 w-px bg-slate-700" />
      <span className="text-xs font-medium text-emerald-400">Active</span>
      <Network size={14} className="text-teal-400 opacity-80" />
    </div>
  </div>
);

const PrimaryButton = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`group relative flex items-center gap-2 px-6 py-2 bg-gradient-to-br from-teal-500 to-blue-600 
      rounded-lg text-white font-medium hover:from-violet-500 hover:to-fuchsia-500 
      transition-all duration-300 shadow-lg shadow-blue-900/30 overflow-hidden ${className}`}
  >
    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    {children}
  </button>
);

const BackgroundGrid = () => (
  <div className="absolute inset-0 overflow-hidden z-0">
    {/* Grid lines */}
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(20, 184, 166, 0.05) 1px, transparent 1px),
          linear-gradient(0deg, rgba(20, 184, 166, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'grid-move 20s linear infinite'
      }}
    />

    {/* Decorative background elements */}
    <div className="absolute top-0 left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
    <div className="absolute top-10 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
  </div>
);

const Header = ({ scrollToServices }) => {
  // Add animation styles to document
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = animationStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`z-40 transition-all duration-300 bg-gradient-to-b from-slate-950 to-slate-950/90 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="relative">
        <BackgroundGrid />
        <nav className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="flex items-center gap-2 transition-all duration-300">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 opacity-70 
                    blur-sm group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-slate-900">
                    <Bolt size={16} className="text-teal-400" />
                  </div>
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent 
                  bg-gradient-to-r from-teal-400 to-blue-400 tracking-tight">
                  syncfi
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-5">
              <NetworkStatus />

              <div className="relative group">
                <a
                  href="mailto:support@flaresynthesis.com"
                  className="flex items-center gap-1.5 px-4 py-2 bg-slate-900/60 rounded-lg text-slate-300 
                    hover:text-teal-300 border border-slate-800 hover:border-teal-500/30
                    transition-colors duration-300 backdrop-blur-md text-sm"
                >
                  <span className="font-medium">Support</span>
                  <ExternalLink size={13} className="opacity-70" />
                </a>
              </div>

              <PrimaryButton onClick={scrollToServices}>
                <Shield size={16} className="text-teal-200" />
                <span>Secure Connect</span>
                <div className="w-1 h-1 rounded-full bg-white/50 animate-pulse" />
                <ChevronRight size={16} className="text-teal-200 opacity-70" />
              </PrimaryButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-800
                hover:border-teal-500/30 transition-all duration-300">
                {isMenuOpen ? 
                  <X size={20} className="text-teal-400" /> : 
                  <Menu size={20} className="text-teal-400" />
                }
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-slate-950/98 backdrop-blur-xl transition-all duration-300 
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          <NetworkStatus />

          <div className="relative">
            <a
              href="mailto:support@flaresynthesis.com"
              className="flex items-center gap-2 px-6 py-3 bg-slate-900/80 rounded-lg text-slate-300 
                hover:text-purple-300 transition-colors duration-300 border border-slate-800"
              onClick={toggleMenu}
            >
              <span className="text-lg font-medium">Support</span>
              <ExternalLink size={16} className="opacity-80" />
            </a>
          </div>

          <PrimaryButton 
            onClick={() => {
              scrollToServices();
              toggleMenu();
            }}
            className="px-8 py-3"
          >
            <Shield size={18} className="text-purple-200" />
            <span className="text-lg">Secure Connects</span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
            <ChevronRight size={16} className="text-purple-200 opacity-70" />
          </PrimaryButton>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-slate-950/98 backdrop-blur-xl transition-all duration-300 
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="relative h-full">
          <BackgroundGrid />
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6 relative z-10">
            <NetworkStatus />

            <div className="relative">
              <a
                href="mailto:support@flaresynthesis.com"
                className="flex items-center gap-2 px-6 py-3 bg-slate-900/80 rounded-lg text-slate-300 
                  hover:text-teal-300 transition-colors duration-300 border border-slate-800"
                onClick={toggleMenu}
              >
                <span className="text-lg font-medium">Support</span>
                <ExternalLink size={16} className="opacity-80" />
              </a>
            </div>

            <PrimaryButton 
              onClick={() => {
                scrollToServices();
                toggleMenu();
              }}
              className="px-8 py-3"
            >
              <Shield size={18} className="text-teal-200" />
              <span className="text-lg">Secure Connect</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
              <ChevronRight size={16} className="text-teal-200 opacity-70" />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
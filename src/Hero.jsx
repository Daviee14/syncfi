import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Shield, Cpu, Bolt, ChevronRight, ArrowUpRight } from 'lucide-react';

const BackgroundAnimation = () => {
  // Create random positions for the nodes
  const nodes = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: 15 + Math.random() * 30,
    delay: Math.random() * -20,
    size: 1 + Math.random() * 2
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
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
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}
      />

      <style>
        {`
          @keyframes float-x {
            0% { transform: translateX(0px); }
            100% { transform: translateX(200px); }
          }

          @keyframes float-y {
            0% { transform: translateY(0px); }
            100% { transform: translateY(200px); }
          }

          @keyframes pulse {
            0% { opacity: 0.2; }
            50% { opacity: 0.6; }
            100% { opacity: 0.2; }
          }

          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
        `}
      </style>
    </div>
  );
};

const PrimaryButton = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-teal-500 to-blue-600 
      rounded-lg text-white font-medium hover:from-teal-400 hover:to-blue-500 
      transition-all duration-300 shadow-lg shadow-blue-900/30 overflow-hidden ${className}`}
  >
    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    {children}
  </button>
);

const SecondaryButton = ({ children, to, className = '' }) => (
  <Link
    to={to}
    className={`group relative flex items-center gap-2 px-6 py-3 bg-slate-900/40 
      rounded-lg text-teal-100 font-medium border border-slate-700 hover:border-teal-500/30
      transition-all duration-300 backdrop-blur overflow-hidden ${className}`}
  >
    <span className="absolute inset-0 bg-teal-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    {children}
  </Link>
);

const MetricCard = ({ label, value, unit }) => (
  <div className="relative group overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 
      group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="bg-slate-900/50 backdrop-blur-md p-6 rounded-xl border border-slate-700
      group-hover:border-teal-500/30 transition-all duration-300 relative">
      <p className="text-3xl font-bold text-white mb-2">
        {value}
        <span className="text-teal-400 text-xl ml-1">{unit}</span>
      </p>
      <p className="text-slate-400">{label}</p>
    </div>
  </div>
);

const Hero = ({ scrollToServices }) => {
  const metrics = [
    { label: 'Protocol Speed', value: '200k+', unit: 'TPS' },
    { label: 'Total Value Locked', value: '$2.8B', unit: 'USD' },
    { label: 'Active Users', value: '85k+', unit: 'Weekly' }
  ];

  return (
    <section className="bg-gradient-to-b from-slate-950 to-slate-900 min-h-screen">
      <div className="container mx-auto px-4 py-24 pt-32 relative">
        {/* Background Animation */}
        <BackgroundAnimation />
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 bg-slate-900/70 px-4 py-2 rounded-full mb-8 backdrop-blur-sm
            border border-slate-800">
            <Shield size={16} className="text-teal-400" />
            <span className="text-sm font-medium text-teal-200">Enterprise-Grade Security</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            The Future of Finance is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Unstoppable
            </span>
          </h1>
          
          <p className="text-slate-300 text-xl mb-10 max-w-3xl mx-auto">
            Experience quantum-secure cross-chain operations with zero-knowledge proofs
            and near-instant finality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <PrimaryButton onClick={scrollToServices} className="w-full sm:w-auto">
              <Bolt size={18} className="text-teal-200" />
              <span>Launch Evm</span>
              <ChevronRight size={16} className="text-teal-200 opacity-70" />
            </PrimaryButton>
            
            <SecondaryButton to="/docs" className="w-full sm:w-auto">
              <Cpu size={18} />
              <span>Technical Specs</span>
              <ArrowUpRight size={16} className="opacity-70" />
            </SecondaryButton>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric, idx) => (
              <MetricCard
                key={idx}
                value={metric.value}
                unit={metric.unit}
                label={metric.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Link } from "react-router-dom";
import { Shield, Cpu, Bolt } from 'lucide-react';

const BackgroundAnimation = () => {
  // Create random positions for the nodes
  const nodes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: 15 + Math.random() * 30,
    delay: Math.random() * -20
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
          style={{
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
            linear-gradient(90deg, rgba(147, 51, 234, 0.05) 1px, transparent 1px),
            linear-gradient(0deg, rgba(147, 51, 234, 0.05) 1px, transparent 1px)
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

const Hero = ({ scrollToServices }) => {
  const metrics = [
    { label: 'Protocol Speed', value: '200k+', unit: 'TPS' },
    { label: 'Total Value Locked', value: '$2.8B', unit: 'USD' },
    { label: 'Active Users', value: '85k+', unit: 'Weekly' }
  ];

  return (
    <section className="bg-gradient-to-b from-slate-950 to-purple-950 min-h-screen">
      <div className="container mx-auto px-4 py-24 relative">
        {/* Background Animation */}
        <BackgroundAnimation />
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 bg-purple-900/50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <Shield size={16} className="text-purple-400" />
            <span className="text-sm font-medium text-purple-200">Enterprise-Grade Security</span>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            The Future of Finance is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400">
              Unstoppable
            </span>
          </h1>
          
          <p className="text-slate-300 text-xl mb-8">
            Experience quantum-secure cross-chain operations with zero-knowledge proofs
            and near-instant finality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={scrollToServices}
              className="bg-gradient-to-r from-purple-600 to-rose-500 text-white px-8 py-4 rounded-lg font-medium
                hover:from-purple-500 hover:to-rose-400 transition-all duration-300 flex items-center justify-center gap-2
                shadow-lg shadow-purple-500/20"
            >
              <Bolt size={20} />
              <span>Launch Evm</span>
            </button>
            
            <Link
              to="/docs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg
                border border-purple-700/50 text-purple-100 hover:bg-purple-900/50 transition-all duration-300
                backdrop-blur-sm"
            >
              <Cpu size={20} />
              <span>Technical Specs</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-purple-700/20
                  hover:border-purple-500/30 transition-all duration-300"
              >
                <p className="text-3xl font-bold text-white mb-2">
                  {metric.value}
                  <span className="text-purple-400 text-xl ml-1">{metric.unit}</span>
                </p>
                <p className="text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
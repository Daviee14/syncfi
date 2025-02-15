import React from 'react';
import { Shield, Network, Wallet } from 'lucide-react';

const BlockchainAnimation = () => (
  <svg viewBox="0 0 400 400" className="  opacity-50">
    <defs>
      <linearGradient id="nodeGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#059669" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Central Node */}
    <circle
      cx="200"
      cy="200"
      r="30"
      fill="url(#nodeGradient)"
      filter="url(#glow)"
      className="animate-pulse"
    />

    {/* Orbiting Nodes */}
    {[0, 120, 240].map((angle, i) => (
      <g key={i}>
        <circle
          cx={200 + Math.cos((angle + Date.now() / 50) * Math.PI / 180) * 80}
          cy={200 + Math.sin((angle + Date.now() / 50) * Math.PI / 180) * 80}
          r="20"
          fill="url(#nodeGradient)"
          filter="url(#glow)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 200 200`}
            to={`360 200 200`}
            dur={`${8 + i * 2}s`}
            repeatCount="indefinite"
          />
        </circle>
        
        {/* Connection lines */}
        <line
          x1="200"
          y1="200"
          x2={200 + Math.cos((angle + Date.now() / 50) * Math.PI / 180) * 80}
          y2={200 + Math.sin((angle + Date.now() / 50) * Math.PI / 180) * 80}
          stroke="url(#nodeGradient)"
          strokeWidth="2"
          strokeDasharray="5,5"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 200 200`}
            to={`360 200 200`}
            dur={`${8 + i * 2}s`}
            repeatCount="indefinite"
          />
        </line>
      </g>
    ))}

    {/* Data flow particles */}
    {[0, 120, 240].map((angle, i) => (
      <circle
        key={`particle-${i}`}
        r="4"
        fill="#3B82F6"
        filter="url(#glow)"
      >
        <animateMotion
          path={`M200,200 L${200 + Math.cos(angle * Math.PI / 180) * 80},${200 + Math.sin(angle * Math.PI / 180) * 80}`}
          dur="1.5s"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath href={`#path-${i}`} />
        </animateMotion>
      </circle>
    ))}

    {/* Outer ring */}
    <circle
      cx="200"
      cy="200"
      r="120"
      fill="none"
      stroke="#059669"
      strokeWidth="2"
      strokeDasharray="4,4"
      opacity="0.2"
    >
      <animate
        attributeName="opacity"
        values="0.2;0.4;0.2"
        dur="4s"
        repeatCount="indefinite"
      />
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 200 200"
        to="360 200 200"
        dur="20s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4 p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm 
    border border-purple-800/30 hover:border-purple-500/50 transition-all duration-300">
    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-rose-500/20 
      rounded-lg flex items-center justify-center flex-shrink-0">
      <Icon className="text-purple-400 w-6 h-6" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-slate-400">{description}</p>
    </div>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Decentralized Protocol",
      description: "Fully distributed network architecture ensuring no single point of failure and maximum uptime"
    },
    {
      icon: Network,
      title: "Smart Contract Security",
      description: "Automated verification and auditing of smart contracts with real-time monitoring"
    },
    {
      icon: Wallet,
      title: "Cross-Chain Bridge",
      description: "Seamless asset transfer across multiple blockchains with atomic swap capability"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-slate-950 to-purple-950 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
            Advanced Security Architecture
            </h1>
            <p className="text-xl text-slate-300">
            Enterprise-grade protection with quantum-resistant encryption
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[]">
              <BlockchainAnimation />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <FeatureItem
                    key={idx}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
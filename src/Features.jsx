import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Network, 
  Wallet, 
  Boxes,
  ArrowRight, 
  ExternalLink,
  Lock,
  Cpu,
  Database
} from 'lucide-react';

const BlockchainAnimation = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
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
        />
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

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-xl blur-lg
        opacity-70 transform group-hover:scale-105 transition-all duration-300" />
      <div className="relative h-full flex flex-col bg-slate-900/80 backdrop-blur-sm border border-slate-800
        rounded-xl p-6 hover:border-teal-500/40 transition-all duration-300">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-3 w-12 h-12
          flex items-center justify-center mb-4 shadow-md">
          <Icon className="text-teal-400 w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-grow">
          {description}
        </p>
        <Link to="/details" className="mt-auto">
          <button
            className="w-full bg-slate-800/80 border border-slate-700 text-white px-6 py-3 rounded-lg
              hover:bg-teal-900/20 hover:border-teal-500/30 transition-all duration-300
              flex items-center justify-center gap-2 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0
              group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Learn More</span>
            <ArrowRight className="w-4 h-4 text-teal-400 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </Link>
      </div>
    </div>
  );
};

const FeatureCategory = ({ title, icon: Icon, color = "teal" }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/70 rounded-full border border-slate-800
    hover:border-teal-500/30 transition-all duration-300 backdrop-blur-sm cursor-pointer">
    <Icon size={14} className={`text-${color}-400`} />
    <span className="text-xs font-medium text-white">{title}</span>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Decentralized Protocol",
      description: "Fully distributed network architecture ensuring no single point of failure and maximum uptime with quantum-resistant cryptography."
    },
    {
      icon: Network,
      title: "Smart Contract Security",
      description: "Automated verification and auditing of smart contracts with real-time monitoring and advanced threat detection systems."
    },
    {
      icon: Wallet,
      title: "Cross-Chain Bridge",
      description: "Seamless asset transfer across multiple blockchains with atomic swap capability and minimal latency for optimal user experience."
    },
    {
      icon: Lock,
      title: "ZK-Proof Integration",
      description: "Zero-knowledge cryptography for enhanced privacy and security during transaction validation without sacrificing speed."
    },
    {
      icon: Cpu,
      title: "AI-Powered Analysis",
      description: "Machine learning algorithms to detect anomalies and optimize performance across distributed ledger networks."
    },
    {
      icon: Database,
      title: "Sharded Architecture",
      description: "Horizontal scaling through sharding to increase throughput and transaction finality while maintaining decentralization."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-24" id="features">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-900/70 px-4 py-2 rounded-full mb-8
              backdrop-blur-sm border border-slate-800">
              <Shield size={16} className="text-teal-400" />
              <span className="text-sm font-medium text-teal-200">Enterprise Security</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Security Architecture
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-12">
              Enterprise-grade protection with quantum-resistant encryption
            </p>
            
            {/* Feature Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <FeatureCategory title="Security" icon={Shield} />
              <FeatureCategory title="Scalability" icon={Database} color="blue" />
              <FeatureCategory title="Privacy" icon={Lock} />
              <FeatureCategory title="Interoperability" icon={Network} color="blue" />
              <FeatureCategory title="Intelligence" icon={Cpu} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-teal-500/10 rounded-full blur-xl"></div>
            <div className="absolute left-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full blur-xl"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Security Assessment</h3>
                <p className="text-slate-300 max-w-xl">
                  Schedule a comprehensive security audit and receive a custom implementation plan for your organization
                </p>
              </div>
              <Link to="/security-assessment">
                <button className="whitespace-nowrap flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-teal-500 to-blue-600
                  rounded-lg text-white font-medium hover:from-teal-400 hover:to-blue-500
                  transition-all duration-300 shadow-lg shadow-blue-900/30">
                  Request Audit
                  <ExternalLink size={16} />
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-24 flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 h-96">
              <BlockchainAnimation />
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-slate-900/70 px-4 py-2 rounded-full mb-4
                backdrop-blur-sm border border-slate-800">
                <Boxes size={16} className="text-blue-400" />
                <span className="text-sm font-medium text-blue-200">Active Protection</span>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-6">
                Next-Generation Defense System
              </h2>
              
              <p className="text-slate-300 mb-8 leading-relaxed">
                Our distributed security architecture provides round-the-clock protection against advanced threats including quantum computing attacks, 51% attacks, and smart contract vulnerabilities.
              </p>
              
              <div className="space-y-4 mb-8">
                {features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="bg-teal-500/10 rounded-full p-1">
                      <feature.icon size={16} className="text-teal-400" />
                    </div>
                    <span className="text-slate-300 text-sm">{feature.description}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/technology">
                <button className="flex items-center gap-2 px-6 py-3 bg-slate-800/80 border border-slate-700
                  rounded-lg text-white hover:bg-teal-900/20 hover:border-teal-500/30
                  transition-all duration-300 group">
                  <span>Explore Our Technology</span>
                  <ArrowRight className="w-4 h-4 text-teal-400 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
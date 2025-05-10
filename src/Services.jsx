import React from 'react';
import { Link } from 'react-router-dom';
import {
  RefreshCw, Check, Building2, Repeat, Clock, BarChart3,
  ArrowRightLeft, PlusCircle, LineChart, Image, Shield, Network, Wallet, Boxes,
  ArrowRight, ExternalLink
} from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSelectedService } from './serviceSlice';

const ServiceCard = ({ title, description, icon: Icon }) => {
  const dispatch = useDispatch();
  const handleServiceSelect = () => {
    dispatch(setSelectedService({ title, description }));
  };

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
        
        <Link to="/connect" className="mt-auto">
          <button
            onClick={handleServiceSelect}
            className="w-full bg-slate-800/80 border border-slate-700 text-white px-6 py-3 rounded-lg 
              hover:bg-teal-900/20 hover:border-teal-500/30 transition-all duration-300 
              flex items-center justify-center gap-2 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 
              group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Access Protocol</span>
            <ArrowRight className="w-4 h-4 text-teal-400 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </Link>
      </div>
    </div>
  );
};

const ServiceCategory = ({ title, icon: Icon, color = "teal" }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/70 rounded-full border border-slate-800
    hover:border-teal-500/30 transition-all duration-300 backdrop-blur-sm cursor-pointer">
    <Icon size={14} className={`text-${color}-400`} />
    <span className="text-xs font-medium text-white">{title}</span>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "My NFTs",
      description: "View and manage your entire collection of digital assets with decentralized detailed insights, secure storage, and seamless transfer options.",
      icon: Image
    },
    {
      title: "Rectification",
      description: "Ensure the integrity and accuracy of your blockchain transactions with decentralized rectification support, providing a seamless way to correct discrepancies.",
      icon: RefreshCw
    },
    {
      title: "Balance Recovery",
      description: "Recover lost or irregular balances with secure, decentralized solutions to restore your cryptocurrency funds efficiently.",
      icon: Shield
    },
    {
      title: "Validation",
      description: "Validate wallets on ERC20/BEP20 protocols to ensure secure integration with the blockchain.",
      icon: Check
    },
    {
      title: "Harvest My Stakings",
      description: "Enable users to redeem and return their staking assets seamlessly to their spot wallet.",
      icon: Clock
    },
    {
      title: "Staking Pool",
      description: "Facilitate collective staking where multiple stakeholders combine computational resources for increased rewards.",
      icon: BarChart3
    },
    {
      title: "Migration",
      description: "Support the migration of tokens to new contracts, ensuring smooth transitions within blockchain ecosystems.",
      icon: ArrowRightLeft
    },
    {
      title: "Add Tokens",
      description: "Allow users to add various cryptocurrency tokens, broadening their investment and interaction scope within the ecosystem.",
      icon: PlusCircle
    },
    {
      title: "Update My Portfolios",
      description: "Provide real-time profit and loss reports, coin values, and tax reports for comprehensive portfolio management.",
      icon: LineChart
    },
    {
      title: "Withdrawal",
      description: "Offer a secure crypto withdrawal process to external crypto wallets like Ledger or Trezor",
      icon: Wallet
    },
    {
      title: "Bridge",
      description: "Enable cross-chain communication and interaction, supporting integration with multiple blockchains like Ethereum, BSC, Avalanche, and Polygon.",
      icon: Network
    }
  ];

  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-24" id="services">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-900/70 px-4 py-2 rounded-full mb-8 
              backdrop-blur-sm border border-slate-800">
              <Boxes size={16} className="text-teal-400" />
              <span className="text-sm font-medium text-teal-200">Protocol Suite</span>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6">
              Quantum-Secure DeFi
            </h2>
            
            <p className="text-slate-300 max-w-2xl mx-auto mb-12">
              Enterprise-grade protocols for the next generation of finance
            </p>
            
            {/* Service Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <ServiceCategory title="Wallets" icon={Wallet} />
              <ServiceCategory title="Staking" icon={BarChart3} />
              <ServiceCategory title="Security" icon={Shield} color="blue" />
              <ServiceCategory title="Networks" icon={Network} />
              <ServiceCategory title="Assets" icon={Image} color="blue" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
          
          {/* Enterprise CTA */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-teal-500/10 rounded-full blur-xl"></div>
            <div className="absolute left-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full blur-xl"></div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
              <h3 className="text-2xl font-bold text-white mb-3">Next-Gen Blockchain for Institutions</h3>
              <p className="text-slate-300 max-w-xl">
  Quantum-secure blockchain infrastructure, dedicated enterprise protocols, and advanced decentralized security solutions for institutional clients
</p>
              </div>
              
              <Link to="/enterprise">
                <button className="whitespace-nowrap flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-teal-500 to-blue-600 
                  rounded-lg text-white font-medium hover:from-teal-400 hover:to-blue-500 
                  transition-all duration-300 shadow-lg shadow-blue-900/30">
                  Contact Support
                  <ExternalLink size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
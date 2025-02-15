import React from 'react';
import { Link } from 'react-router-dom';
import {
  RefreshCw, Check, Building2, Repeat, Clock, BarChart3,
  ArrowRightLeft, PlusCircle, LineChart, Image, Shield, Network,Wallet, Boxes
} from 'lucide-react';

import { useDispatch } from 'react-redux';
import { setSelectedService } from './serviceSlice';
import { Sparkles, Blocks, Flame } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon }) => {
  const dispatch = useDispatch();
  const handleServiceSelect = () => {
    dispatch(setSelectedService({ title, description }));
  };

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-rose-500/10 rounded-xl blur-lg transform group-hover:scale-105 transition-transform duration-300" />
      <div className="relative bg-slate-900/80 backdrop-blur-sm border border-purple-800/30 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
        <div className="bg-gradient-to-br from-purple-900 to-slate-900 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
          <Icon className="text-purple-400 w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-slate-400 mb-6 text-sm leading-relaxed h-24">
          {description}
        </p>
        <Link to="/connect">
          <button
            onClick={handleServiceSelect}
            className="w-full bg-gradient-to-r from-purple-500/10 to-rose-500/10 border border-purple-800/30 text-white px-6 py-3 rounded-lg hover:from-purple-500/20 hover:to-rose-500/20 transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>Access Protocol</span>
            <ArrowRightLeft className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </Link>
      </div>
    </div>
  );
};

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
    <section className="bg-gradient-to-b from-purple-950 to-slate-950 py-24">
      <div className="container mx-auto px-4">
        <div className="max-xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-900/50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <Boxes size={16} className="text-purple-400" />
              <span className="text-sm font-medium text-purple-200">Protocol Suite</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum-Secure DeFi
            </h2>
            <p className="text-slate-300">
              Enterprise-grade protocols for the next generation of finance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
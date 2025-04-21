import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './serviceSlice';
import walletReducer from './walletSlice';
import Home from './Home';
import WalletConnectPage from './WalletConnectPage';
import Header from './Header';
import MainPage from './MainPage';

// Create the Redux store
const store = configureStore({
  reducer: {
    service: serviceReducer,
    wallet: walletReducer
  }
});

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const servicesRef = useRef(null);
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-100">
        <nav className="">
          <Header scrollToServices={scrollToServices} />
        </nav>
        <Routes>
          <Route path="/" element={<MainPage servicesRef={servicesRef} />} />
          <Route path="/connect" element={<Home />} />
          <Route path="/connect-wallet" element={<WalletConnectPage />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}

export default App;
import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Services from './Services';
import WelcomeModal from './WelcomeModal';

function MainPage({ servicesRef }) {
  return (
    <div className="mx-auto">
      <WelcomeModal />
      <Hero scrollToServices={() => {
        servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
      }} />
      <div ref={servicesRef}>
        <Services />
      </div>
      <Features scrollToServices={() => {
        servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
      }} />
    </div>
  );
}

export default MainPage;
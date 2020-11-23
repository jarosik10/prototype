import React, { useState, useContext } from 'react';
import { Context } from './Store';

import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import SiteTitle from './components/SiteTitle/SiteTitle';
import MobileNavigation from './components/MobileNavigation/MobileNavigation';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showMobileNavigation, setShowMobileNavigation] = useState(true);
  const isMobile = useContext(Context);

  const openLogin = () => {
    setShowLoginModal(true);
    setShowMobileNavigation(false);
  }

  const closeLogin = () => {
    setShowLoginModal(false);
    setShowMobileNavigation(true);
  }

  return (
    <Layout>
      <Header>
        <SiteTitle>Prototype</SiteTitle>
        {!isMobile && <Navigation openLogin={openLogin} />}
      </Header>
      {showLoginModal && <Login closeLogin={closeLogin} />}
      {isMobile && showMobileNavigation && <MobileNavigation openLogin={openLogin} />}
    </Layout>
  );
}

export default App;

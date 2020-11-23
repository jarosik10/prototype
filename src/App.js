import React, { useState, useContext, useEffect } from 'react';
import { Context } from './Store';
import debounce from 'lodash.debounce';

import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import SiteTitle from './components/SiteTitle/SiteTitle';
import MobileNavigation from './components/MobileNavigation/MobileNavigation';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showMobileNavigation, setShowMobileNavigation] = useContext(Context);
  const [windowDimension, setWindowDimension] = useState(window.innerWidth);
  const isMobile = windowDimension < 805;

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension(window.innerWidth)
      console.log(window.innerWidth)
    }

    const debouncedHandleResize = debounce(handleResize, 100, { 'leading': false, 'trailing': true });
    window.addEventListener('resize', debouncedHandleResize);

    return () => { window.removeEventListener('resize', debouncedHandleResize) };
  }, []);

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
        {!isMobile && <Navigation openLogin={openLogin}/>}
      </Header>
      {showLoginModal && <Login closeLogin={closeLogin} />}
      {isMobile && showMobileNavigation && <MobileNavigation openLogin={openLogin} />}
    </Layout>
  );
}

export default App;

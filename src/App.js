import React, { useState, useContext } from 'react';
import { Context } from './Store';

import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import MobileNavigation from './components/MobileNavigation/MobileNavigation';
import Login from './components/Login/Login';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showMobileNavigation, setShowMobileNavigation] = useContext(Context);
  
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
      <Header />
      {showLoginModal && <Login closeLogin={closeLogin} />}
      {showMobileNavigation && <MobileNavigation openLogin={openLogin} />}
    </Layout>
  );
}

export default App;

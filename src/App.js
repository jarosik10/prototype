import React, { useContext, useReducer } from 'react';
import { Context } from './Store';

import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import SiteTitle from './components/SiteTitle/SiteTitle';
import MobileNavigation from './components/MobileNavigation/MobileNavigation';
import Navigation from './components/Navigation/Navigation';
import Login from './containers/Login/Login';
import Registration from './containers/Registration/Registration';
import RecoverPassword from './containers/RecoverPassword/RecoverPassword';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';

const modalTypes = {
  login: 'LOGIN',
  registration: 'REGISTRATION',
  recoverPassword: 'RECOVER_PASSWORD',
}

const actionTypes = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
}

const initialState = {
  showModal: false,
  modalType: '',
  showMobileNavigation: true,
}

const showModal = (state, { modalType }) => {
  return {
    ...state,
    showModal: true,
    modalType: modalType,
    showMobileNavigation: false,
  }
}
const hideModal = (state, action) => {
  return {
    ...state,
    showModal: false,
    modalType: '',
    showMobileNavigation: true,
  }
}

const modalsReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return showModal(state, action);
    case 'HIDE_MODAL':
      return hideModal(state, action);
    default:
      return state;
  }
}

function App() {
  const isMobile = useContext(Context);
  const [state, dispatch] = useReducer(modalsReducer, initialState);

  const openLogin = () => {
    dispatch({ type: actionTypes.SHOW_MODAL, modalType: modalTypes.login });
  }

  const openRegistration = () => {
    dispatch({ type: actionTypes.SHOW_MODAL, modalType: modalTypes.registration });
  }

  const openRecoverPassword = () => {
    dispatch({ type: actionTypes.SHOW_MODAL, modalType: modalTypes.recoverPassword });
  }

  const closeModal = () => {
    dispatch({ type: actionTypes.HIDE_MODAL });
  }

  return (
    <Layout>
      <Header>
        <SiteTitle>Prototype</SiteTitle>
        {!isMobile && <Navigation openRegistration={openRegistration} openLogin={openLogin} />}
      </Header>
      {state.showModal &&
        <>
          <Backdrop />
          <Modal>
            {state.modalType === modalTypes.login ? <Login closeLogin={closeModal} openRegistration={openRegistration} openRecoverPassword={openRecoverPassword} /> :
              state.modalType === modalTypes.registration ? <Registration closeRegistration={closeModal} openLogin={openLogin} /> :
                state.modalType === modalTypes.recoverPassword ? <RecoverPassword closeRecoverPassword={closeModal} openLogin={openLogin} /> : null
            }
          </Modal>
        </>}
      {isMobile && state.showMobileNavigation && <MobileNavigation openLogin={openLogin} />}
    </Layout>
  );
}

export default App;

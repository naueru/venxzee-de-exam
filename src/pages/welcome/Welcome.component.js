/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';

import { loginService } from 'services/rest';

import Modal from 'components/modal';
import Login from 'components/sessionForms/login';

import styles from './styles';

const Welcome = () => {
  const [ showLoginModal, setShowLoginModal ] = useState(false);
  const [ loginError, setLoginError ] = useState('');
  const login = async (data) => {
    return await loginService(data)
      .then((res) => console.log('ToDo: store ->', res?.token))
      .catch(err => setLoginError(err.error));
  };

  return <div css={styles.container}>
    <header css={styles.header}>
      <button css={styles.button} onClick={() => setShowLoginModal(true)}>Login</button>
    </header>
    {showLoginModal && <Modal
      title={'Login'}
      onClose={() => setShowLoginModal(false)}
    >
      <Login onSubmit={login} errorMsg={loginError} />
    </Modal>}
  </div>;
};

export default Welcome;

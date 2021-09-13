/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';

import { loginService } from 'services/rest';

import Modal from 'components/modal';

import styles from './styles';

const Welcome = () => {
  const [ showLoginModal, setShowLoginModal ] = useState(false);
  const login = async (data) => {
    return await loginService(data)
      .then((res) => console.log('ToDo: store ->', res?.token))
  };

  return <div css={styles.container}>
    <header css={styles.header}>
      <button css={styles.button} onClick={() => setShowLoginModal(true)}>Login</button>
    </header>
    {showLoginModal && <Modal
      title={'Login'}
      onClose={() => setShowLoginModal(false)}
    >
      Login form
    </Modal>}
  </div>;
};

export default Welcome;

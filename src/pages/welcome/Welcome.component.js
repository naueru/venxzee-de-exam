/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';

import { loginService, registerService } from 'services/rest';

import { MOCKS } from 'globals/constants';
import { parsePost } from 'utils/helpers';

import Modal from 'components/modal';
import Login from 'components/sessionForms/login';
import Register from 'components/sessionForms/register';
import PostCard from '../../components/postCard/PostCard.component';

import styles from './styles';

const Welcome = () => {
  const [ showLoginModal, setShowLoginModal ] = useState(false);
  const [ showRegisterModal, setShowRegisterModal ] = useState(false);
  const [ loginError, setLoginError ] = useState('');
  const [ registerError, setRegisterError ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const login = async (data) => {
    return await loginService(data)
      .then((res) => console.log('ToDo: store ->', res?.token))
      .catch(err => setLoginError(err.error));
  };

  const register = async (data) => {
    setLoading(true)
    setRegisterError('');
    try {
      const res = await registerService(data);
      setLoading(false);
      console.log('ToDo: Login ->', res);
    } catch(err) {
      setLoading(false);
      setRegisterError(err.error);
    }
  };

  return <div css={styles.container}>
    <header css={styles.header}>
      <button css={styles.button} onClick={() => setShowLoginModal(true)}>Login</button>
      /
      <button css={styles.button} onClick={() => setShowRegisterModal(true)}>Register</button>
    </header>
    <PostCard {...parsePost(MOCKS.UNKNOWN[0])} />
    {showLoginModal && <Modal
      title={'Login'}
      onClose={() => setShowLoginModal(false)}
    >
      <Login onSubmit={login} errorMsg={loginError} />
    </Modal>}
    {showRegisterModal && <Modal
      title={'Register'}
      onClose={() => setShowRegisterModal(false)}
    >
      <Register
        onSubmit={register}
        errorMsg={registerError}
        loading={loading}
      />
    </Modal>}
  </div>;
};

export default Welcome;

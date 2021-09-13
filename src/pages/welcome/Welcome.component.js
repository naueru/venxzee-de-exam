/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState, useEffect } from 'react';

import { loginService, registerService, getPostList } from 'services/rest';

import Modal from 'components/modal';
import Login from 'components/sessionForms/login';
import Register from 'components/sessionForms/register';
import InfinitePostList from 'components/infinitePostList/InfinitePostList.component';

import styles from './styles';

const Welcome = () => {
  const [ showLoginModal, setShowLoginModal ] = useState(false);
  const [ showRegisterModal, setShowRegisterModal ] = useState(false);
  const [ loginError, setLoginError ] = useState('');
  const [ registerError, setRegisterError ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ postData, setPostData ] = useState(null);
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

  const fetchPosts = async () => {
    return await getPostList()
      .then((post) => setPostData(post?.data));
  };

  useEffect(() => {
    // This is just for testing
    if (!postData) {
      fetchPosts();
    }
  }, [postData]);

  return <div css={styles.container}>
    <header css={styles.header}>
      <button css={styles.button} onClick={() => setShowLoginModal(true)}>Login</button>
      /
      <button css={styles.button} onClick={() => setShowRegisterModal(true)}>Register</button>
    </header>
    <InfinitePostList />
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

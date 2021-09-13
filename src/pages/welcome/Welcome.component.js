/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { loginService } from 'services/rest';

import styles from './styles';

const Welcome = () => {

  const login = async (data) => {
    return await loginService(data)
      .then((res) => console.log('ToDo: store ->', res?.token))
  };

  return <div css={styles.container}>
    <header css={styles.header}>
      <button css={styles.button} onClick={() => login({})}>Login</button>
    </header>
  </div>;
};

export default Welcome;

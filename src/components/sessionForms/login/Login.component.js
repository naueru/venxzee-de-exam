/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from 'react';
import { jsx } from '@emotion/react';

import PropTypes from 'prop-types';

import { validateEmail } from 'utils/validators';
import { MESSAGES } from 'globals/constants';
import styles from '../styles';

const Login = ({ onSubmit, errorMsg }) => {
  const [ error, setError ] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const isValidEmail = validateEmail(data?.email)
    if ( isValidEmail && data.password ) {
      setError('');
      return onSubmit(data);
    } else {
      setError(!isValidEmail ? MESSAGES.INVALID_EMAIL : MESSAGES.MISSING_PASSWORD);
    }
  };
  return (
    <form onSubmit={handleSubmit} css={styles.container}>
      <label htmlFor='email' css={styles.label}>Email</label>
      <input placeholder={'Please insert a valid email...'} id='email' name='email' css={styles.input} />
      <label htmlFor='password' css={styles.label}>Password</label>
      <input placeholder={'Please insert a valid password...'} id='password' name='password' css={styles.input} />
      {(error || errorMsg) && <p css={styles.error}>{error || errorMsg}</p>}
      <button type="submit" css={styles.submit}>Login</button>
    </form>
)};

Login.propTypes = {
  onSubmit: PropTypes.func,
  errorMsg: PropTypes.string
};

Login.defaultProps = {
  onSubmit: () => {}
};

export default Login;

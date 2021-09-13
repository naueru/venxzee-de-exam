/** @jsxRuntime classic */
/** @jsx jsx */

import { useState } from 'react';
import { jsx } from '@emotion/react';

import PropTypes from 'prop-types';

import { validatePasswordMatch, validateEmail } from 'utils/validators';

import { MESSAGES } from 'globals/constants';

import Loader from 'components/loader';

import styles from '../styles';

const Register = ({ onSubmit, errorMsg, loading }) => {
  const [ error, setError ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const isPasswordMatch = validatePasswordMatch(data);
    const isValidEmail = validateEmail(data?.email);

    if ( isValidEmail && isPasswordMatch ) {
      setError('');
      return onSubmit(data);
    } else {
      setError(!isValidEmail ? MESSAGES.INVALID_EMAIL : MESSAGES.PASSWORD_MISSMATCH);
    }
  };

  return (
    <form onSubmit={handleSubmit} css={styles.container}>
      <label htmlFor='email' css={styles.label}>Email</label>
      <input placeholder={'Please insert a valid email...'} id='email' name='email' css={styles.input} />
      <label htmlFor='password' css={styles.label}>Password</label>
      <input type="password" placeholder={'Please insert a valid password...'} id='password' name='password' css={styles.input} />
      <label htmlFor='repeatpassword' css={styles.label}>Repeat Password</label>
      <input type="password" placeholder={'Please repeat password...'} id='repeatpassword' name='repeatpassword' css={styles.input} />
      {(error || errorMsg) && <p css={styles.error}>{error || errorMsg}</p>}
      <button type="submit" css={styles.submit}>{loading ? <Loader /> : 'Register'} </button>
    </form>
)};

Register.propTypes = {
  onSubmit: PropTypes.func,
  errorMsg: PropTypes.string,
  loading: PropTypes.bool,
};

Register.defaultProps = {
  onSubmit: () => {},
  loading: false,
};

export default Register;

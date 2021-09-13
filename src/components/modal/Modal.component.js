/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

import styles from './styles';

const Modal = ({ children, onClose, title }) => {
  return (
    <div css={styles.curtain}>
      <div css={styles.modalContainer}>
        <header css={styles.modalHeader}>
          <h2 css={styles.modalTitle}>{title}</h2>
          <button css={styles.modalClose} onClick={onClose}>x</button>
        </header>
        <div css={styles.modalContentContainer}>
          {children}
        </div>
      </div>
    </div>);
};

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  onClose: PropTypes.func,
  title: PropTypes.string
};

Modal.defaultProps = {
  onClose: () => {},
  title: ''
};

export default Modal;

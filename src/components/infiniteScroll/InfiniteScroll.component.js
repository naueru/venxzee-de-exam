/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useEffect, useRef } from 'react';
import useOnScreen from 'hooks/useOnScreen';
import PropTypes from 'prop-types';

import styles from './styles';

const InfiniteScroll = ({ children, bottomContent, hasMore, onBottomReached }) => {
  const bottomRef = useRef(null);
  const isOnScreen = useOnScreen(bottomRef);

  useEffect(() => {
    if (isOnScreen && hasMore) {
      onBottomReached();
    }
  }, [isOnScreen, hasMore]);

  return (
    <div css={styles.wrapper} scroll="no">
      { children }
      <div css={styles.bottom} ref={bottomRef}>
        { bottomContent }
      </div>
    </div>
  );
};

InfiniteScroll.propTypes = {
  children: PropTypes.any,
  bottomContent: PropTypes.any,
  hasMore: PropTypes.bool,
  onBottomReached: PropTypes.func.isRequired,
};

InfiniteScroll.defaultProps = {
  onBottomReached: () => {},
  hasMore: false,
};

export default InfiniteScroll;

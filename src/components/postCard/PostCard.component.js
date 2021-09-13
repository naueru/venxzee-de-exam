/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

import { LOREM_IPSUM } from 'globals/constants';

import styles from './styles';

const Avatar = styled.div`
  background-color: ${(props) => props.avatarColor};
  height: 80px;
  width: 80px;
`;

const PostCard = ({ id, avatar, name, title, description, date, showReplaysLink }) => {
  const history = useHistory();
  return (
    <article css={styles.container}>
      <div css={styles.contentContainer}>
        <section css={styles.leftPane}>
          <Avatar avatarColor={avatar} />
          <p css={styles.name}>{name}</p>
        </section>
        <section css={styles.rightPane}>
          <h2 css={styles.title}>{title}</h2>
          <p>{description} - {LOREM_IPSUM}</p>
        </section>
      </div>
      <footer css={styles.footer}>
        <p css={styles.date}>Created: {date}</p>
        {showReplaysLink &&
        <button
          css={styles.navigateButton}
          onClick={() => history.push(`/post/${id}`)}
        >
          View replays
        </button>}
      </footer>
    </article>);
};

PostCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  avatar: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showReplaysLink: PropTypes.bool
};

PostCard.defaultProps = {
  avatar: '#FFF',
  showReplaysLink: true
};

export default PostCard;

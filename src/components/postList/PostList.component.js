/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { useCallback } from 'react';
import PropTypes from 'prop-types';

import { parsePost } from 'utils/helpers';

import PostCard from 'components/postCard';

import styles from './styles';

const ListItem = styled.li`
  display: flex;
  max-width: ${(props) => props.isReplays ? '70vw' : '100%'}
`;

const PostList = ({ posts, isReplays }) => {
  const renderPosts = useCallback(() => {
    return posts.map((post, index) => {
      const postProps = parsePost(post)
      return <ListItem isReplays={isReplays} key={`Post_key_${index}_id_${postProps?.id}`}>
          <PostCard {...postProps} />
        </ListItem>
    })
  }, [posts, isReplays]);
  return (
    <ul css={styles.list}>
      {renderPosts()}
    </ul>);
};

PostList.propTypes = {
  posts: PropTypes.array,
  isReplays: PropTypes.bool
};

PostList.defaultProps = {
  posts: [],
  isReplays: false
};

export default PostList;

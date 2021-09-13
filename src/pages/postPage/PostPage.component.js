/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import PostList from 'components/postList';
import PostCard from 'components/postCard';

import { getPost, getPostList } from 'services/rest';

import { parsePost } from 'utils/helpers';

import styles from './styles';
import { useHistory } from 'react-router';

const Post = () => {
  const [ postData, setPostData ] = useState(null);
  const [ replays, setReplays ] = useState(null);

  const history = useHistory();
  const postId = history?.location?.pathname?.split?.('/')?.[2];

  const fetchPost = async () => {
    return await getPost(postId)
      .then((post) => setPostData(post?.data));
  };

  const fetchReplays = async () => {
    return await getPostList()
      .then((post) => setReplays(post?.data));
  };

  useEffect(() => {
    if (!postData) {
      fetchPost();
    }
    if (!replays) {
      fetchReplays();
    }
  }, [postData, replays]);

  return (<div css={styles.container}>
    <div css={styles.contentContainer}>
      {postData && <PostCard {...parsePost(postData || {})} showReplaysLink={false} />}
      {replays && <PostList posts={replays} isReplays />}
    </div>
  </div>)
};

export default Post;

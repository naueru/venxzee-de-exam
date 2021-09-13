/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import useInfiniteData from 'hooks/useInifinteData';
import { getPostList } from 'services/rest';

import InfiniteScroll from 'components/infiniteScroll';
import PostList from 'components/postList';
import Loader from 'components/loader';

import styles from './styles';

const InfinitePostList = () => {
  const { data, loading, error, hasMore, getMore } = useInfiniteData(getPostList);

  const BottomContent = () => {
    if (loading) {
      return (<div css={styles.bottomWrapper}>
        <Loader />
      </div>);
    }
    if (error) {
      return <div css={styles.bottomWrapper}>{error}</div>;
    }
    if (!hasMore) {
      return <div css={styles.bottomWrapper}>
        This is the end of the list{' '}
        <button onClick={getMore}>Force Refresh</button>
      </div>;
    }
    return null;
  };

  const AllPosts = () => {
    if (loading && !data?.length) {
      return null;
    }
    if (data?.length) {
      return <PostList posts={data} />;
    }
    return <div css={styles.empty}>Empty list</div>;
  };

  return <InfiniteScroll
    hasMore={hasMore}
    onBottomReached={getMore}
    bottomContent={BottomContent()}
  >
    <AllPosts />
  </InfiniteScroll>;
}

export default InfinitePostList;

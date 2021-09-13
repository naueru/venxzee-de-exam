import { useState, useMemo } from 'react';
import debounce from 'lodash.debounce';

const useInfiniteData = (rest, debounceWait = 200 ) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [hasMore, setHasMore] = useState(true);

  const _getMore = async () => {
    setLoading(true);
    try {
      const moreData = await fetchData(page + 1);
      const canDoMore =  !!moreData?.length;
      setHasMore(canDoMore);
      if (canDoMore) {
        setPage(prev => prev + 1);
        setData(prev => [...prev, ...moreData]);
      }
      setLoading(false);

    } catch (err) {
      setLoading(false);
      setPage(0);
      setData([]);
      setError(err);
    }
  };

  const getMore = useMemo(() => debounce(_getMore, debounceWait), [page]);

  const fetchData = async restPage => {
    try {
      const res = await rest(restPage);
      return res.data;
    } catch(err) {
      throw err;
    }
  };

  return { data, page, loading, error, hasMore, getMore };
};

export default useInfiniteData;

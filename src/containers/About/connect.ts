import type { Query } from '@prismicio/types';
import { useQuery } from 'react-query';

const useConnect = () => {
  const { isLoading, isError, error, data } = useQuery<Query>(
    'about',
    () =>
      fetch(
        'https://virginia-otero.cdn.prismic.io/api/v2/documents/search?ref=YfwNZhEAAC8ARs10&q=%5B%5Bat(document.type%2C+%22about%22)%5D%5D',
      ).then((res) => res.json()),
    {
      keepPreviousData: true,
      staleTime: Infinity,
    },
  );

  return { isLoading, isError, error, data };
};

export default useConnect;

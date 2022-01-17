import type { Query } from '@prismicio/types';
import type { FC } from 'react';
import { useQuery } from 'react-query';

import { Container, Title } from './styles';
import type Props from './types';

const Post: FC<Props> = ({ query }) => {
  const { slug } = query;

  const { isLoading, isError, error, data } = useQuery<Query>(
    `posts/${String(slug)}`,
    () =>
      fetch(
        `https://virginia-otero.cdn.prismic.io/api/v2/documents/search?ref=YeIKthEAACkA0m1t&q=%5B%5Bat(my.post.uid%2C%22${String(
          slug,
        )}%22)%5D%5D`,
      ).then((res) => res.json()),
    {
      keepPreviousData: true,
      staleTime: Infinity,
    },
  );
  console.log(query);
  console.log('data =>', isLoading, isError, error, data);

  return (
    <Container>
      <Title>Post</Title>
    </Container>
  );
};

export default Post;

import type { Query, RichTextField } from '@prismicio/types';
import { formatDistance } from 'date-fns';
import es from 'date-fns/locale/es';
import { useQuery } from 'react-query';

import PostCard from '$/components/PostCard';
import { SectionTitle } from '$/styles/mixins';
import type { Image } from '$/types/Document';

import { Container, Content, Description, Split } from './styles';

const Blog = () => {
  const { _isLoading, _isError, _error, data } = useQuery<Query>(
    'posts',
    () =>
      fetch(
        'https://virginia-otero.cdn.prismic.io/api/v2/documents/search?ref=YfwNZhEAAC8ARs10&q=%5B%5Bat(document.type%2C+%22post%22)%5D%5D',
      ).then((res) => res.json()),
    {
      keepPreviousData: true,
      staleTime: Infinity,
    },
  );
  const documents = data?.results;

  return (
    <Container>
      <SectionTitle>Blog</SectionTitle>
      <Description>
        En este espacio encontrarás reflexiones, tips o artículos relacionados
        con la inteligencia emocional desde una perspectiva muy actual que voy
        compartiendo cuando la agenda me lo permite. Espero que te puedan servir
        y los disfrutes.
      </Description>
      <Split />
      <Content>
        {documents?.map(({ id, uid, data }) => {
          const dateFormatted = data.date
            ? formatDistance(new Date(String(data.date)), new Date(), {
                addSuffix: true,
                locale: es,
              })
            : undefined;
          return (
            <PostCard
              key={id}
              title={data?.title ? (data.title as RichTextField) : []}
              description={data?.description ? String(data.description) : ''}
              slug={String(uid)}
              date={dateFormatted}
              coverImage={data?.coverImage ? (data.coverImage as Image) : null}
            />
          );
        })}
      </Content>
    </Container>
  );
};

export default Blog;

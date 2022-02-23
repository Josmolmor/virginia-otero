import type { RichTextField } from '@prismicio/types';
import { format } from 'date-fns';
import es from 'date-fns/locale/es';

import PostCard from '$/components/PostCard';
import Spinner from '$/components/Spinner';
import { SectionTitle, Split } from '$/styles/mixins';
import type { Image } from '$/types/Document';

import useConnect from './connect';
import { Container, Content, Description, LoadingContainer } from './styles';

const Blog = () => {
  const { documents, loading } = useConnect();

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
      {loading ? (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      ) : (
        <Content>
          {documents?.map(({ id, uid, data }) => {
            const dateFormatted = data.date
              ? format(new Date(String(data.date)), 'dd MMMM yyy', {
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
                coverImage={
                  data?.coverImage ? (data.coverImage as Image) : null
                }
              />
            );
          })}
        </Content>
      )}
    </Container>
  );
};

export default Blog;

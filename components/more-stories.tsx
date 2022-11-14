import { Content } from '@prismicio/client';

import { Preview } from 'components/post';
import styled from 'styled-components';

type MoreStoriesProps = {
  posts: Content.PostDocument[];
};

const Container = styled.div`
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  padding-bottom: 8rem;

  @media (min-width: 768px) {
    gap: 4rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    gap: 6rem;
  }
`;

const H2 = styled.h2`
  @media (min-width: 768px) {
    font-size: 4rem;
  }

  color: ${({ theme }) => theme.colors.darkBlue};
  font-family: 'Great Sailor', sans-serif;
  letter-spacing: 1px;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  line-height: 1.2;
  font-weight: 700;
`;

export default function MoreStories({ posts }: MoreStoriesProps) {
  return (
    <section>
      <H2>Más artículos</H2>
      <Container>
        {posts.map((post) => (
          <Preview
            key={post.uid}
            href={post.url}
            title={post.data.title}
            coverImage={post.data.cover_image}
            date={post.data.date}
            excerpt={post.data.excerpt}
          />
        ))}
      </Container>
    </section>
  );
}

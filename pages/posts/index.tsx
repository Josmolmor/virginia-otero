import Container from 'components/container';
import MoreStories from 'components/more-stories';
import { Hero } from 'components/post';
import Layout from 'components/layout';
import { createClient } from 'lib/prismic';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { Content } from '@prismicio/client';
import styled from 'styled-components';
import LeavesSmall from 'components/icons/leaves-small';
import { NextSeo } from 'next-seo';
import { asImageSrc } from '@prismicio/helpers';

type IndexProps = {
  preview: boolean;
  allPosts: Content.PostDocument[];
};

const Heading = styled.section`
  margin-bottom: 4rem;
  margin-top: 4rem;
  align-items: center;
  flex-direction: column;
  display: flex;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
`;

const H1 = styled.h1`
  @media (min-width: 768px) {
    font-size: 6.25rem;
    padding-right: 2rem;
  }

  font-family: 'Diamond Bridge', 'Great Sailor', sans-serif;
  text-shadow: 0px 0px white;
  letter-spacing: 1.5px;
  font-size: 2.75rem;
  line-height: 1.2;
  font-weight: 700;
`;

const H4 = styled.h4`
  @media (min-width: 768px) {
    padding-left: 2rem;
    text-align: left;
  }

  font-size: 1.125rem;
  text-align: center;
  margin-top: 1.25rem;
`;

const LeavesIcon = styled(LeavesSmall)`
  z-index: -1;
  position: absolute;
  right: 0;
  transform: rotate(0deg);
  opacity: 0.5;
  top: 0;
  pointer-events: none;
`;

export default function Index({ preview, allPosts }: IndexProps) {
  const [heroPost, ...morePosts] = allPosts;

  return (
    <Layout preview={preview}>
      <NextSeo
        title='Blog'
        description='Aprende tips de psicología en 3 minutos'
        openGraph={{
          images: [
            {
              url: asImageSrc(heroPost.data.cover_image, {
                width: 1200,
                height: 600,
                fit: 'crop'
              })
            }
          ]
        }}
      />
      <Container>
        <Heading>
          <H1>Blog</H1>
          <H4>
            En este espacio encontrarás reflexiones, tips o artículos
            relacionados con la inteligencia emocional desde una perspectiva muy
            actual que voy compartiendo cuando la agenda me lo permite.
            <br />
            Espero que te puedan servir y los disfrutes.
          </H4>
          <LeavesIcon />
        </Heading>
        {heroPost && (
          <Hero
            title={heroPost.data.title}
            href={heroPost.url}
            coverImage={heroPost.data.cover_image}
            date={heroPost.data.date}
            excerpt={heroPost.data.excerpt}
          />
        )}
        {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({
  preview = false,
  previewData
}: GetStaticPropsContext): Promise<GetStaticPropsResult<IndexProps>> {
  const client = createClient({ previewData });

  const allPosts = await client.getAllByType('post', {
    orderings: [{ field: 'my.post.date', direction: 'desc' }]
  });

  return {
    props: { preview, allPosts }
  };
}

import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Content, predicate } from '@prismicio/client';
import { asImageSrc, asText } from '@prismicio/helpers';
import { motion, useScroll } from 'framer-motion';

import { createClient } from 'lib/prismic';

import Container from 'components/container';
import Layout from 'components/layout';
import MoreStories from 'components/more-stories';
import { Body, Header as PostHeader, Title } from 'components/post';
import SectionSeparator from 'components/section-separator';
import styled, { css } from 'styled-components';
import LeavesSmall from 'components/icons/leaves-small';
import LeavesMedium from 'components/icons/leaves-medium';

type PostProps = {
  preview: boolean;
  post: Content.PostDocument;
  morePosts: Content.PostDocument[];
};

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: ${({ theme }) => theme.colors.brick};
  transform-origin: 0%;
`;

const PostContent = styled.div`
  position: relative;
`;

const commonLeavesCss = css`
  z-index: -1;
  position: absolute;
  opacity: 0.5;
  pointer-events: none;
`;

const LeavesIconTop = styled(LeavesSmall)`
  ${commonLeavesCss};
  right: 0;
  top: 0;
  transform: rotate(80deg);
`;

const LeavesIconMiddle = styled(LeavesMedium)`
  ${commonLeavesCss};
  left: 0;
  transform: rotate(160deg) translateY(-50%);
  top: 50%;
`;

export default function Post({ post, morePosts, preview }: PostProps) {
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <Title>Loading…</Title>
        ) : (
          <PostContent>
            <article>
              <Head>
                <title>{asText(post.data.title)} | Virginia Otero</title>
                <meta
                  property='og:image'
                  content={asImageSrc(post.data.cover_image, {
                    width: 1200,
                    height: 600,
                    fit: 'crop'
                  })}
                />
              </Head>
              <ProgressBar style={{ scaleX: scrollYProgress }} />
              <PostHeader
                title={post.data.title}
                coverImage={post.data.cover_image}
                date={post.data.date}
              />
              <Body slices={post.data.slices} />
              <LeavesIconTop />
              <LeavesIconMiddle />
            </article>
            <SectionSeparator />
            {morePosts && morePosts?.length > 0 && (
              <MoreStories posts={morePosts} />
            )}
          </PostContent>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({
  params,
  preview = false,
  previewData
}: GetStaticPropsContext<{ slug: string }>): Promise<
  GetStaticPropsResult<PostProps>
> {
  const client = createClient({ previewData });

  const [post, morePosts] = await Promise.all([
    client.getByUID<Content.PostDocument>('post', params.slug),
    client.getAllByType<Content.PostDocument>('post', {
      orderings: [{ field: 'my.post.date', direction: 'desc' }],
      predicates: [predicate.not('my.post.uid', params.slug)],
      limit: 2
    })
  ]);

  if (!post) {
    return {
      notFound: true
    };
  } else {
    return {
      props: { preview, post, morePosts }
    };
  }
}

export async function getStaticPaths() {
  const client = createClient();

  const allPosts = await client.getAllByType('post');

  return {
    paths: allPosts.map((post) => post.url),
    fallback: true
  };
}

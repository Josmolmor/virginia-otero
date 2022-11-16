import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Content, predicate } from '@prismicio/client';
import { asImageSrc, asText } from '@prismicio/helpers';

import { createClient } from 'lib/prismic';

import Container from 'components/container';
import Layout from 'components/layout';
import MoreStories from 'components/more-stories';
import { Body, Header as PostHeader, Title } from 'components/post';
import SectionSeparator from 'components/section-separator';
import styled, { css } from 'styled-components';
import LeavesSmall from 'components/icons/leaves-small';
import LeavesMedium from 'components/icons/leaves-medium';

import ShareSocials from 'components/share-socials';

type PostProps = {
  preview: boolean;
  post: Content.PostDocument;
  morePosts: Content.PostDocument[];
};

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
  const { asPath, isFallback } = useRouter();

  return (
    <Layout preview={preview}>
      <Container>
        {isFallback ? (
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
              <PostHeader
                title={post.data.title}
                coverImage={post.data.cover_image}
                date={post.data.date}
              />
              <Body slices={post.data.slices} />
              <LeavesIconTop />
              <LeavesIconMiddle />
            </article>
            <ShareSocials
              title={post.data.title[0].text}
              url={asPath}
              types={[
                'linkedin',
                'twitter',
                'facebook',
                'telegram',
                'whatsapp'
              ]}
            />
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

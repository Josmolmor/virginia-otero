import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
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
import CommentTextArea from 'components/comments/text-area';

import ShareSocials from 'components/share-socials';
import { NextSeo } from 'next-seo';
import {
  deleteComment,
  DocumentDataComment,
  likeComment,
  readComments,
  writeComment
} from 'firebase-config';
import { useSession } from 'next-auth/react';
import CommentComponent from 'components/comments/comment';
import { formatDistance } from 'date-fns';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';

type PostProps = {
  preview: boolean;
  post: Content.PostDocument;
  morePosts: Content.PostDocument[];
  slug: string;
  comments: string;
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

const CommentsTitle = styled(Title)`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  text-align: center;
`;

const CommentsSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 560px;
  width: 100%;
  gap: 24px;
  margin: auto;
`;

const TextAreaComment = styled(CommentTextArea)`
  margin: 32px auto 0;
`;

export default function Post({
  post,
  morePosts,
  preview,
  slug,
  comments
}: PostProps) {
  const notify = (message: string) => toast(message);
  const { data, status } = useSession();

  const { asPath, isFallback } = useRouter();
  const typedComments: DocumentDataComment[] = JSON.parse(comments);
  const [parsedComments, setParsedComments] = useState(typedComments);
  const [updates, setUpdates] = useState(0);

  useEffect(() => {
    (async () => {
      const typedComments = await readComments(slug);
      const filteredComments = typedComments.filter(
        (comment) => comment.slug === slug
      );
      setParsedComments(filteredComments);
    })();

    return () => {
      // this now gets called when the component unmounts
    };
  }, [updates]);

  const onComment = async (content) => {
    const payload: DocumentDataComment = {
      content,
      name: data.user.name,
      avatar: data.user.image,
      email: data.user.email,
      pId: '7KrMoxIBpUUzwduI9UHy',
      time: new Date(),
      slug
    };
    await writeComment(payload);
    notify('Comentario añadido correctamente');
    setUpdates(updates + 1);
  };

  const onCommentLiked = async (payload: {
    email: string;
    content: string;
    slug: string;
  }) => {
    await likeComment(payload);
    notify('Comentario liked correctamente');
    setUpdates(updates + 1);
  };

  const onCommentDeleted = async (payload: {
    email: string;
    content: string;
    slug: string;
  }) => {
    await deleteComment(payload);
    notify('Comentario eliminado correctamente');
    setUpdates(updates + 1);
  };

  return (
    <Layout preview={preview}>
      <Container>
        {isFallback ? (
          <Title>Loading…</Title>
        ) : (
          <PostContent>
            <article>
              <NextSeo
                title={asText(post.data.title)}
                description={post.data.excerpt}
                openGraph={{
                  images: [
                    {
                      url: asImageSrc(post.data.cover_image, {
                        width: 1200,
                        height: 600,
                        fit: 'crop'
                      })
                    }
                  ]
                }}
              />
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
            <CommentsTitle>Comentarios</CommentsTitle>
            {parsedComments?.length > 0 ? (
              <CommentsSection>
                {parsedComments.map(
                  ({ name, email, avatar, time, content, likes }) => {
                    const timeInfo = time as {
                      nanoseconds: number;
                      seconds: number;
                    };
                    const parsedDate = new Date(
                      timeInfo.seconds * 1000 + timeInfo.nanoseconds / 1000000
                    );
                    const timeAgo = formatDistance(parsedDate, new Date(), {
                      addSuffix: true
                    });
                    return (
                      <AnimatePresence key={content}>
                        <CommentComponent
                          avatarSrc={avatar}
                          name={name}
                          date={timeAgo}
                          content={content}
                          liked={likes?.includes(data?.user.email)}
                          canBeDeleted={data?.user.email === email}
                          numOfLikes={likes?.length}
                          onLiked={() =>
                            onCommentLiked({ email, content, slug })
                          }
                          onDeleted={() =>
                            onCommentDeleted({ email, content, slug })
                          }
                        />
                      </AnimatePresence>
                    );
                  }
                )}
              </CommentsSection>
            ) : null}
            {status !== 'loading' ? (
              <TextAreaComment enabled={!!data} onClick={onComment} />
            ) : null}
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

  const typedComments = await readComments(params.slug);
  const filteredComments = typedComments.filter(
    (comment) => comment.slug === params.slug
  );
  const comments = JSON.stringify(filteredComments);

  if (!post) {
    return {
      notFound: true
    };
  } else {
    return {
      props: { preview, post, morePosts, slug: params.slug, comments }
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

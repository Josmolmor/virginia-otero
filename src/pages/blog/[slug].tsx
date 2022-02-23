import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { NextSeo } from 'next-seo';
import type { ParsedUrlQuery } from 'querystring';

import Post from '$/containers/Post';

import deSlugify from '../../utils/deSlugify';

export function getServerSideProps({ query }: GetServerSidePropsContext): {
  props: {
    query: ParsedUrlQuery;
  };
} {
  return {
    props: {
      query,
    },
  };
}

function PostPage({
  query,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { slug } = query;

  return (
    <>
      <NextSeo title={deSlugify(slug)} />
      <Post slug={slug} />
    </>
  );
}

export default PostPage;

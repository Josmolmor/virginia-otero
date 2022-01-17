import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { ParsedUrlQuery } from 'querystring';

import Post from '$/containers/Post';

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
  return <Post query={query} />;
}

export default PostPage;

import Head from 'next/head';
import Container from 'components/container';
import Layout from 'components/layout';
import { CMS_NAME } from 'lib/constants';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';

type IndexProps = {
  preview: boolean;
};

export default function Index({ preview }: IndexProps) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Virginia Otero Perez</title>
      </Head>
      <Container>Main page</Container>
    </Layout>
  );
}

export async function getStaticProps({
  preview = false
}: GetStaticPropsContext): Promise<GetStaticPropsResult<IndexProps>> {
  return {
    props: { preview }
  };
}

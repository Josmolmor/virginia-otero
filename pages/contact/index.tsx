import Head from 'next/head';
import Container from 'components/container';
import Layout from 'components/layout';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';

type IndexProps = {
  preview: boolean;
};

export default function About({ preview }: IndexProps) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Contacto | Virginia Otero Perez</title>
      </Head>
      <Container>Contacto</Container>
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

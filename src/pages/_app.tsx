import * as prismic from '@prismicio/client';
import { PrismicProvider } from '@prismicio/react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';

import Layout from '$/components/layout';
import Maintenance from '$/components/maintenance';
import config from '$/config/seo.json';
import { linkResolver } from '$/lib/linkResolver';
import GlobalStyle from '$/styles/global';
import theme from '$/styles/themes';

const App = ({ Component, pageProps }: AppProps) => {
  if (!process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME) {
    console.warn('Failed to initialize Prismic provider');
  }
  const endpoint = prismic.getEndpoint(
    String(process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME),
  );
  const client = prismic.createClient(endpoint);

  if (process.env.NEXT_PUBLIC_MAINTENANCE === '1') {
    return (
      <>
        <DefaultSeo {...config} />
        <Maintenance />
      </>
    );
  }
  return (
    <PrismicProvider linkResolver={linkResolver} client={client}>
      <GlobalStyle />
      <DefaultSeo {...config} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </PrismicProvider>
  );
};

export default App;

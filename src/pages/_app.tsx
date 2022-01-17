import * as prismic from '@prismicio/client';
import { PrismicProvider } from '@prismicio/react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';

import Layout from '$/components/layout';
import { Body, H1, H2, H3, H4 } from '$/components/Typography';
import config from '$/config/seo.json';
import { linkResolver } from '$/lib/linkResolver';
import GlobalStyle from '$/styles/global';
import theme from '$/styles/themes';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  if (!process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME) {
    console.warn('Failed to initialize Prismic provider');
  }
  const endpoint = prismic.getEndpoint(
    String(process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME),
  );
  const client = prismic.createClient(endpoint);

  return (
    <QueryClientProvider client={queryClient}>
      <PrismicProvider
        linkResolver={linkResolver}
        client={client}
        richTextComponents={{
          heading1: ({ children }) => <H1>{children}</H1>,
          heading2: ({ children }) => <H2>{children}</H2>,
          heading3: ({ children }) => <H3>{children}</H3>,
          heading4: ({ children }) => <H4>{children}</H4>,
          paragraph: ({ children }) => <Body>{children}</Body>,
        }}
      >
        <GlobalStyle />
        <DefaultSeo {...config} />
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </PrismicProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  );
};

export default App;

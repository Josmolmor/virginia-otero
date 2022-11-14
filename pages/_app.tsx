import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '../lib/prismic';
import 'styles/index.css';
import { ThemeProvider } from 'styled-components';
import { themeLight, GlobalStyles } from 'styles/themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyles />
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </ThemeProvider>
  );
}

export default MyApp;

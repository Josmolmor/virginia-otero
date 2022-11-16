import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from 'lib/prismic';
import 'styles/index.css';
import 'remixicon/fonts/remixicon.css';
import styled, { ThemeProvider } from 'styled-components';
import { themeLight, GlobalStyles } from 'styles/themes';
import { motion, useScroll } from 'framer-motion';
import { useRouter } from 'next/router';

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: ${({ theme }) => theme.colors.brick};
  transform-origin: 0%;
  z-index: 1;
`;

function MyApp({ Component, pageProps }) {
  const { route } = useRouter();
  const { scrollYProgress } = useScroll();

  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyles />
      <PrismicPreview repositoryName={repositoryName}>
        {route === '/posts/[slug]' ? (
          <ProgressBar style={{ scaleX: scrollYProgress }} />
        ) : null}
        <Component {...pageProps} />
      </PrismicPreview>
    </ThemeProvider>
  );
}

export default MyApp;

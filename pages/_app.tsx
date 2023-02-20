import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from 'lib/prismic';
import 'styles/index.css';
import 'remixicon/fonts/remixicon.css';
import styled, { ThemeProvider } from 'styled-components';
import { themeLight, GlobalStyles } from 'styles/themes';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import SEO from 'config/next-seo';
import Script from 'next/script';
import { SessionProvider } from 'next-auth/react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Slide } from 'react-toastify';
import Socials from '../components/socials';
import Logo from '../components/icons/logo/wordmark';

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: ${({ theme }) => theme.colors.brick};
  transform-origin: 0;
  z-index: 1;
`;

const Maintenance = styled.div`
  background: ${({ theme }) => theme.colors.brick};
  color: white;
  padding: 32px;
  border-radius: 8px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 500;
  height: 100vh;
  width: 100vw;

  h1 {
    text-align: center;
    max-width: 260px;
  }
`;

function MyApp({ Component, pageProps }) {
  const { route } = useRouter();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const renderContent = () => {
    if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true') {
      return (
        <Maintenance>
          <Logo
            style={{ height: 'auto', width: '140px', marginBottom: '24px' }}
          />
          <h1>La web está en mantenimiento, volvemos pronto</h1>
          <Socials />
        </Maintenance>
      );
    } else {
      return <Component {...pageProps} />;
    }
  };

  return (
    <SessionProvider session={pageProps.session}>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
        transition={Slide}
      />
      <ThemeProvider theme={themeLight}>
        <DefaultSeo {...SEO} />
        <GlobalStyles />
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-T94YL3R0LE'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-T94YL3R0LE');
        `}
        </Script>
        <PrismicPreview repositoryName={repositoryName}>
          {route === '/posts/[slug]' ? (
            <ProgressBar style={{ scaleX }} />
          ) : null}
          {renderContent()}
        </PrismicPreview>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;

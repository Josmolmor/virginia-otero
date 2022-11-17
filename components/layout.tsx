import Alert from 'components/alert';
import Meta from 'components/meta';
import Header from './header';
import styled from 'styled-components';
import Footer from './footer';
import { useRouter } from 'next/router';

type LayoutProps = {
  preview: boolean;
  children: React.ReactNode;
};

const Container = styled.div`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    overflow: visible;
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export default function Layout({ preview, children }: LayoutProps) {
  const { route } = useRouter();

  return (
    <>
      <Meta />
      <Container>
        <Alert preview={preview} />
        <Header />
        <main>{children}</main>
      </Container>
      {route !== '/contact' ? <Footer /> : null}
    </>
  );
}

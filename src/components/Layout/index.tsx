import type { FC } from 'react';

import Header from '$/components/Header';

import { Container, Main, Section } from './styles';
import type Props from './types';

const Layout: FC<Props> = ({ className, children }) => (
  <Container className={className}>
    <Header />
    <Main>
      <Section>{children}</Section>
    </Main>
  </Container>
);

export default Layout;

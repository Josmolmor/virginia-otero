import type { FC } from 'react';

import Header from '$/components/Header';
import { Wrapper } from '$/styles/mixins';

import { Container, Main, Section } from './styles';
import type Props from './types';

const Layout: FC<Props> = ({ className, children }) => (
  <Container className={className}>
    <Header />
    <Main>
      <Section>
        <Wrapper>{children}</Wrapper>
      </Section>
    </Main>
  </Container>
);

export default Layout;

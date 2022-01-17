import type { FC } from 'react';

import { Container, Link, Logo, LogoContainer, Wrapper } from './styles';
import type Props from './types';

const Header: FC<Props> = ({ className }) => (
  <Container className={className}>
    <Wrapper>
      <LogoContainer>
        <Link href="/">
          <Logo />
        </Link>
      </LogoContainer>
      <Link href="/blog">Blog</Link>
    </Wrapper>
  </Container>
);

export default Header;

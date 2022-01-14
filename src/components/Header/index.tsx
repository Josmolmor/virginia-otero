import NextLink from 'next/link';
import type { FC } from 'react';

import { Container, Link, Logo, LogoContainer } from './styles';
import type Props from './types';

const Header: FC<Props> = ({ className }) => (
  <Container className={className}>
    <LogoContainer>
      <NextLink passHref href="/">
        <Link>
          <Logo />
        </Link>
      </NextLink>
    </LogoContainer>
  </Container>
);

export default Header;

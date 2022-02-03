import type { FC } from 'react';

import {
  Container,
  Link,
  LinksContainer,
  Logo,
  LogoContainer,
  LogoLink,
  Wrapper,
} from './styles';
import type Props from './types';

const Header: FC<Props> = ({ className }) => (
  <Container className={className}>
    <Wrapper>
      <LogoContainer>
        <LogoLink href="/">
          <Logo />
        </LogoLink>
      </LogoContainer>
      <LinksContainer>
        <Link href="/blog">Blog</Link>
        <Link href="/sobre-mi">Sobre mi</Link>
        <Link href="/servicios">Servicios</Link>
        <Link href="/contacto">Contacto</Link>
      </LinksContainer>
    </Wrapper>
  </Container>
);

export default Header;

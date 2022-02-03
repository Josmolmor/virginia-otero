import type { FC } from 'react';

import {
  Container,
  IgLink,
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
        <Link href="/sobre-mi">Sobre mí</Link>
        <Link href="/servicios">Servicios</Link>
        <Link href="/reviews">Reseñas</Link>
        <Link href="/contacto">Contacto</Link>
        <IgLink href="https://www.instagram.com/laconsultadevirginia/">
          <i className="ri-instagram-line ri-lg" />
        </IgLink>
      </LinksContainer>
    </Wrapper>
  </Container>
);

export default Header;

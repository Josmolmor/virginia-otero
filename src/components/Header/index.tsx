import type { FC } from 'react';
import { useRef, useState } from 'react';

import useClickOutside from '$/hooks/useClickOutside';

import { from, useMediaQuery } from '../../styles/responsive';
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

const Header: FC<Props> = ({ className }) => {
  const isMobile = !useMediaQuery(from.tablet);
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setShowMenu(false));

  return (
    <Container className={className}>
      <Wrapper>
        <LogoContainer>
          <LogoLink href="/">
            <Logo />
          </LogoLink>
        </LogoContainer>
        {isMobile && (
          <i
            ref={ref}
            style={{ color: '#18171C' }}
            className="ri-menu-3-line ri-2x"
            onClick={() => setShowMenu(!showMenu)}
          />
        )}
        {(!isMobile || (isMobile && showMenu)) && (
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
        )}
      </Wrapper>
    </Container>
  );
};

export default Header;

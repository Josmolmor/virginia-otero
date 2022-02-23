import { AnimatePresence } from 'framer-motion';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';

import useClickOutside from '$/hooks/useClickOutside';
import { from, useMediaQuery } from '$/styles/responsive';

import {
  BranchVector,
  BurgerIcon,
  CloseIcon,
  Container,
  DarkBranchVector,
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

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showMenu]);

  return (
    <Container className={className}>
      <Wrapper>
        <LogoContainer>
          <LogoLink href="/">
            <Logo />
          </LogoLink>
        </LogoContainer>
        <AnimatePresence>
          {isMobile &&
            (showMenu ? (
              <CloseIcon
                ref={ref}
                className="ri-close-line ri-xl"
                onClick={() => setShowMenu(!showMenu)}
              />
            ) : (
              <BurgerIcon
                ref={ref}
                className="ri-menu-3-line ri-xl"
                onClick={() => setShowMenu(!showMenu)}
              />
            ))}
        </AnimatePresence>
        {(!isMobile || (isMobile && showMenu)) && (
          <LinksContainer>
            <Link href="/blog">Blog</Link>
            <Link href="/sobre-mi">Sobre mí</Link>
            <Link href="/servicios">Servicios</Link>
            <Link href="/reviews">Reseñas</Link>
            <Link href="/contacto">Contacto</Link>
            <IgLink href="https://www.instagram.com/laconsultadevirginia/">
              {isMobile ? (
                <i className="ri-instagram-line ri-2x" />
              ) : (
                <i className="ri-instagram-line ri-lg" />
              )}
            </IgLink>
            <DarkBranchVector />
          </LinksContainer>
        )}
      </Wrapper>
      <BranchVector />
    </Container>
  );
};

export default Header;

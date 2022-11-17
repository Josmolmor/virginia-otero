import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Instagram, Menu, X } from 'react-feather';
import Logo from './icons/logo/wordmark';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const { div } = motion;
import useMediaQuery from 'hooks/useMediaQuery';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  padding: 16px 0;
  justify-content: center;

  @media (min-width: 768px) {
    align-self: flex-start;
    padding: 16px 12px;
    justify-content: flex-start;
  }

  @media (min-width: 1024px) {
    padding: 16px 20px;
  }
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 24px;
  flex-direction: column;
  flex: 1;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
  }
`;

const commonLinkStyles = css`
  display: block;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 500;
  letter-spacing: 0.2px;
  text-decoration: none;
  transition-property: color;
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:focus-within,
  &:hover {
    color: ${({ theme }) => theme.colors.brick};
  }
`;

const LinkEl = styled(Link)`
  padding: 10px 20px;
  ${commonLinkStyles};
`;

const LinkLogo = styled(Link)`
  ${commonLinkStyles};
  color: ${({ theme }) => theme.colors.logo};
  padding: 16px 0 0;
  z-index: 851;

  @media (min-width: 768px) {
    padding: 16px;
  }
`;

const Anchor = styled.a`
  padding: 10px 20px;
  ${commonLinkStyles};
`;

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    align-self: flex-start;
  }
`;

const ContactButton = styled(Link)`
  ${commonLinkStyles};
  background-color: ${({ theme }) => theme.colors.brick};
  padding: 8px 10px;
  font-size: 14px;
  border-radius: 22px;
  color: white;
  margin-top: 1rem;

  &:focus-within,
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBrick};
    color: white;
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const MainLogo = styled(Logo)`
  width: 125px;
  margin-left: -8px;
  height: auto;

  ${({ $isHomeRoute }) =>
    $isHomeRoute &&
    css`
      width: 260px;
    `};
`;

const ContainerMobile = styled(div)`
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  position: fixed;
  -webkit-transition: all 0.3s cubic-bezier(0.59, 0.01, 0.28, 1);
  -o-transition: all 0.3s cubic-bezier(0.59, 0.01, 0.28, 1);
  transition: all 0.3s cubic-bezier(0.59, 0.01, 0.28, 1);
  z-index: 850;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  background: rgba(0, 0, 0, 0.9);
`;

const ContentMobile = styled.div`
  padding-top: 103px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 599px) {
    width: auto;
    padding-right: 20px;
    padding-left: 20px;
  }

  ${LinkEl},
  ${Anchor} {
    color: #fff;
    line-height: 40px;
    font-size: 22px;
    font-variant: normal;
    font-feature-settings: 'smcp';
    letter-spacing: 0.5px;
  }
`;

const IconContainer = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  cursor: pointer;
  z-index: 851;
`;

export default function Header() {
  const { route } = useRouter();
  const isHomeRoute = route === '/';
  const matches = useMediaQuery(768);

  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => setIsDesktop(matches), [matches]);

  useEffect(() => {
    if (mobileMenuOpened) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'auto';
    }
  }, [mobileMenuOpened]);

  const closeIfMenuOpened = () => {
    if (mobileMenuOpened) {
      setMobileMenuOpened(false);
    }
  };

  const menuItems = () => {
    return (
      <Links>
        <Li>
          <LinkEl href='/about' onClick={closeIfMenuOpened}>
            Sobre mi
          </LinkEl>
        </Li>
        <Li>
          <LinkEl href='/posts' onClick={closeIfMenuOpened}>
            Blog
          </LinkEl>
        </Li>
        <Li>
          <Anchor
            target='_blank'
            href='https://www.instagram.com/laconsultadevirginia'
            onClick={closeIfMenuOpened}
          >
            <Instagram size={isDesktop ? 20 : 30} />
          </Anchor>
        </Li>
        <Li>
          <ContactButton href='/contact' onClick={closeIfMenuOpened}>
            Contacto
          </ContactButton>
        </Li>
      </Links>
    );
  };

  return (
    <Nav>
      <LinkLogo href='/' onClick={closeIfMenuOpened}>
        <MainLogo $isHomeRoute={false && isDesktop && isHomeRoute} />
      </LinkLogo>
      {isDesktop ? (
        <Container>{menuItems()}</Container>
      ) : (
        <>
          <IconContainer onClick={() => setMobileMenuOpened(!mobileMenuOpened)}>
            {mobileMenuOpened ? <X color='white' /> : <Menu color='black' />}
          </IconContainer>

          {mobileMenuOpened ? (
            <ContainerMobile
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              transition={{ duration: 0.1 }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
              }}
            >
              <ContentMobile>{menuItems()}</ContentMobile>
            </ContainerMobile>
          ) : (
            <></>
          )}
        </>
      )}
    </Nav>
  );
}

import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Instagram } from 'react-feather';
import Logo from './icons/logo/wordmark';
import { useRouter } from 'next/router';

const Container = styled.div`
  align-items: center;
  display: flex;
  padding: 16px 0;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 16px 20px;
    justify-content: flex-start;
  }
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 12px;
  flex-direction: row;
  flex: 1;
`;

const commonLinkStyles = css`
  display: block;
  color: ${({ theme }) => theme.colors.darkBlue};
  padding: 10px 20px;
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
  ${commonLinkStyles};
`;

const Anchor = styled.a`
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

const HomeLi = styled(Li)`
  @media (min-width: 768px) {
    margin-right: auto;
  }

  ${LinkEl} {
    padding: 0;
  }
`;

const ContactButton = styled(Link)`
  ${commonLinkStyles};
  background-color: ${({ theme }) => theme.colors.brick};
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 22px;
  color: white;

  &:focus-within,
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBrick};
    color: white;
  }
`;

const MainLogo = styled(Logo)`
  color: ${({ theme }) => theme.colors.brick};
  width: 105.065px;
  height: auto;

  ${({ $isHomeRoute }) =>
    $isHomeRoute &&
    css`
      width: 261.05px;
    `};
`;

export default function Header() {
  const { route } = useRouter();
  const isHomeRoute = route === '/';

  return (
    <Container>
      <Links>
        <HomeLi>
          <LinkEl href='/'>
            <MainLogo $isHomeRoute={isHomeRoute} />
          </LinkEl>
        </HomeLi>
        <Li>
          <LinkEl href='/about'>Sobre mi</LinkEl>
        </Li>
        <Li>
          <LinkEl href='/posts'>Blog</LinkEl>
        </Li>
        <Li>
          <Anchor
            target='_blank'
            href='https://www.instagram.com/laconsultadevirginia'
          >
            <Instagram size={20} />
          </Anchor>
        </Li>
        <Li>
          <ContactButton href='/contact'>Contacto</ContactButton>
        </Li>
      </Links>
    </Container>
  );
}

import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Instagram } from 'react-feather';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 12px;
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
`;

const ContactButton = styled(Link)`
  ${commonLinkStyles};
  background-color: ${({ theme }) => theme.colors.brick};
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 22px;
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBrick};
    color: white;
  }
`;

export default function Header() {
  return (
    <Container>
      <LinkEl href='/'>Home</LinkEl>
      <Links>
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

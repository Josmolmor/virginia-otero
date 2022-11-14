import styled from 'styled-components';
import { Instagram, Mail } from 'react-feather';
import { FC } from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBrick};
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding: 24px 20px;
`;

const User = styled.div`
  font-size: 0.75rem;
  text-transform: uppercase;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Name = styled.span``;

const Icons = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

const Icon = styled.li``;

const IconLink = styled.a`
  display: block;
  padding: 20px 14px;
  transition-property: mix-blend-mode;
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    mix-blend-mode: overlay;
  }
`;

const Footer: FC<Props> = ({ children, className }) => {
  return (
    <Container className={className}>
      <Icons>
        <Icon>
          <IconLink href='https://wa.me/+34684094901?text=Hola!'>
            <img
              height='24'
              width='24'
              src='https://cdn.simpleicons.org/whatsapp/white'
            />
          </IconLink>
        </Icon>
        <Icon>
          <IconLink
            target='_blank'
            href='https://www.instagram.com/laconsultadevirginia'
          >
            <Instagram />
          </IconLink>
        </Icon>
        <Icon>
          <IconLink
            target='_blank'
            href='mailto:virginia.otpe+consultasweb@gmail.com?Subject=Consulta%20Web'
          >
            <Mail />
          </IconLink>
        </Icon>
      </Icons>
      <User>
        <Name>© Virginia Otero Pérez · {new Date().getFullYear()}</Name>
      </User>
      {children}
    </Container>
  );
};

export default Footer;

import styled, { css } from 'styled-components';
import { Instagram, Mail } from 'react-feather';
import { FC } from 'react';

type Props = {
  color?: string;
  asBubbles?: boolean;
  children?: React.ReactNode;
  className?: string;
};

const Container = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

const Icon = styled.li`
  flex-shrink: 0;
  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `};
`;

const IconLink = styled.a`
  display: block;
  padding: 20px 14px;
`;

const Socials: FC<Props> = ({ color = 'white', children, className }) => {
  return (
    <Container className={className}>
      <Icon
        $color={color}
        title='Whatsapp'
        aria-label='Ponte en contacto conmigo usando Whatsapp'
      >
        <IconLink href='https://wa.me/+34684094901?text=Hola!'>
          <img
            height='24'
            width='24'
            src={`https://cdn.simpleicons.org/whatsapp/${color}`}
          />
        </IconLink>
      </Icon>
      <Icon
        $color={color}
        title='Instagram'
        aria-label='Ponte en contacto conmigo a través de Instagram'
      >
        <IconLink
          target='_blank'
          href='https://www.instagram.com/laconsultadevirginia'
        >
          <Instagram />
        </IconLink>
      </Icon>
      <Icon
        $color={color}
        title='Correo electrónico'
        aria-label='Ponte en contacto conmigo usando tu correo electrónico'
      >
        <IconLink
          target='_blank'
          href='mailto:virginia.otpe+consultasweb@gmail.com?Subject=Consulta%20Web'
        >
          <Mail />
        </IconLink>
      </Icon>
      {children}
    </Container>
  );
};

export default Socials;

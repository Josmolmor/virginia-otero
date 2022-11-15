import styled from 'styled-components';
import { FC } from 'react';
import Socials from './socials';

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

const Footer: FC<Props> = ({ children, className }) => {
  return (
    <Container className={className}>
      <Socials />
      <User>
        <Name>© Virginia Otero Pérez · {new Date().getFullYear()}</Name>
      </User>
      {children}
    </Container>
  );
};

export default Footer;

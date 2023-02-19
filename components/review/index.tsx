import styled from 'styled-components';
import { ReactNode } from 'react';

type ReviewProps = {
  title: string;
  name: string;
  message: string;
  className?: string;
  children?: ReactNode;
};

const Container = styled.div`
  background-color: white;
  padding: 32px 24px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  margin: 24px 16px;
  box-shadow: 0 15px 35px 0 rgb(60 66 87 / 8%), 0 5px 15px 0 rgb(0 0 0 / 12%);
  cursor: grab;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h4`
  font-weight: 500;
  font-size: 18px;
  text-align: left;
`;

const Name = styled.span`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.75);
  display: block;
`;

const Message = styled.p`
  margin: 16px 0 0 0;
  text-align: left;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const Q = styled.q`
  font-size: 16rem;
  position: absolute;
  z-index: 0;
  opacity: 0.05;
  transform: rotate(-45deg);
  right: 0;
  top: -32px;
  font-weight: bold;
`;

export default function Review({
  title,
  name,
  message,
  className,
  children
}: ReviewProps) {
  return (
    <Container className={className}>
      <Q />
      <Content>
        <Title>{title}</Title>
        <Name>{name}</Name>
      </Content>
      <Message>{message}</Message>
      {children}
    </Container>
  );
}

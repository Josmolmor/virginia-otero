import type { FC } from 'react';

import { Container, Content, Message, Name, Title, User } from './styles';
import type Props from './types';

const ReviewCard: FC<Props> = ({ name, title, message, className }) => (
  <Container className={className}>
    <Content>
      <i
        style={{ color: '#d5d8e0', transform: 'rotate(-25deg)' }}
        className="ri-double-quotes-l  ri-3x"
      />
      <User>
        <Title>{title}</Title>
        <Name>{name}</Name>
      </User>
    </Content>
    <Message>{message}</Message>
  </Container>
);

export default ReviewCard;

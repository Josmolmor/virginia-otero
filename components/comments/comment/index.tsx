import styled, { css } from 'styled-components';
import { FC } from 'react';
import { Heart, Trash } from 'react-feather';

type Props = {
  avatarSrc: string;
  name: string;
  date: string;
  content: string;
  canBeDeleted?: boolean;
  liked?: boolean;
  numOfLikes?: number;
  loggedIn?: boolean;
  className?: string;
  onLiked: () => void;
  onDeleted: () => void;
};

const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
  width: 100%;
`;

const Avatar = styled.img`
  height: 40px;
  width: 40px;
  background-color: ${({ theme }) => theme.colors.brick};
  border-radius: 50%;
  flex-shrink: 0;
`;

const UserInfo = styled.div`
  width: 100%;
`;

const Data = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`;

const Name = styled.span`
  font-weight: 500;
`;

const Time = styled.span`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.55);
  font-size: 14px;
`;

const Content = styled.p`
  margin-top: 4px;
`;

const Interactions = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 16px;
`;

const Likes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const InteractionsButton = styled.button`
  cursor: pointer;
  background: transparent;
  padding: 0;
  width: 20px;
`;

const HeartIcon = styled(Heart)`
  ${({ $liked }) =>
    $liked &&
    css`
      color: tomato;
      fill: tomato;
    `};
`;

const NumOfLikes = styled.span``;

const TrashIcon = styled(Trash)``;

const CommentComponent: FC<Props> = ({
  avatarSrc,
  name,
  date,
  content,
  canBeDeleted,
  liked,
  numOfLikes,
  onLiked,
  onDeleted,
  loggedIn,
  className
}) => {
  return (
    <Container className={className}>
      <Avatar src={avatarSrc} referrerpolicy='no-referrer' />
      <UserInfo>
        <Data>
          <Name>{name}</Name>
          <Time>{date}</Time>
        </Data>
        <Content>{content}</Content>
      </UserInfo>
      <Interactions>
        <Likes>
          <InteractionsButton
            title='Dar "me gusta" al comentario'
            onClick={onLiked}
            disabled={!loggedIn}
          >
            <HeartIcon $liked={liked} />
          </InteractionsButton>
          <NumOfLikes>{numOfLikes > 0 ? numOfLikes : null}</NumOfLikes>
        </Likes>
        {canBeDeleted ? (
          <InteractionsButton title='Borrar comentario' onClick={onDeleted}>
            <TrashIcon />
          </InteractionsButton>
        ) : null}
      </Interactions>
    </Container>
  );
};

export default CommentComponent;

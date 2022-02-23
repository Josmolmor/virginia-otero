import { FC, useState } from 'react';

import Button from '$/components/Button';

import {
  ButtonIcon,
  Caption,
  Container,
  Content,
  Icon,
  Image,
  Video,
} from './styles';
import type Props from './types';

const Post: FC<Props> = ({
  caption,
  media_type,
  media_url,
  permalink,
  thumbnail_url,
  className,
}) => {
  const [showCaption, setShowCaption] = useState(false);

  const renderElement = () => {
    switch (media_type) {
      default:
      case 'CAROUSEL_ALBUM':
      case 'IMAGE':
        return <Image src={media_url} />;
      case 'VIDEO':
        return <Video src={media_url} controls poster={thumbnail_url} />;
    }
  };

  return (
    <Container className={className}>
      {showCaption ? (
        <Content>
          <Caption>{caption}</Caption>
          <Button href={permalink}>Ver post en IG</Button>
        </Content>
      ) : (
        renderElement()
      )}
      <ButtonIcon
        leftIcon={
          <Icon
            className={
              showCaption ? 'ri-image-line ri-lg' : 'ri-chat-quote-line ri-lg'
            }
          />
        }
        onClick={() => setShowCaption(!showCaption)}
      />
    </Container>
  );
};

export default Post;

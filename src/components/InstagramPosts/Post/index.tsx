import { FC, useState } from 'react';

import Button from '$/components/Button';

import type { MediaType } from '../types';
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
  className,
}) => {
  const [showCaption, setShowCaption] = useState(false);

  const renderElement = (type: MediaType, url: string) => {
    switch (type) {
      default:
      case 'CAROUSEL_ALBUM':
      case 'IMAGE':
        return <Image src={url} />;
      case 'VIDEO':
        return <Video src={url} controls />;
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
        renderElement(media_type, media_url)
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

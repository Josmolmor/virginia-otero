import type { FC } from 'react';

import Post from './Post';
import { Container } from './styles';
import type { Props } from './types';

const InstagramPosts: FC<Props> = ({ className, posts = [] }) => (
  <Container className={className}>
    {posts.map(({ id, caption, media_url, permalink, media_type }) => (
      <Post
        key={id}
        id={id}
        caption={caption}
        media_url={media_url}
        permalink={permalink}
        media_type={media_type}
      />
    ))}
  </Container>
);

export default InstagramPosts;

import type { Post } from '../types';

interface Props {
  id: Post['id'];
  caption: Post['caption'];
  media_url: Post['media_url'];
  permalink: Post['permalink'];
  media_type: Post['media_type'];
  thumbnail_url: Post['thumbnail_url'];
  className?: string;
}

export default Props;

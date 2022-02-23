export type MediaType = 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';

export type Post = {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  media_type: MediaType;
};

export interface Props {
  className?: string;
  posts: Post[];
}

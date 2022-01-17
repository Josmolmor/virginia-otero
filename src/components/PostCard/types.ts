import type { RichTextField } from '@prismicio/types';
import type { Image } from 'src/types/Document';

interface Props {
  coverImage?: Image | null;
  slug: string;
  title: RichTextField;
  description?: string;
  date?: string;
  className?: string;
}

export default Props;

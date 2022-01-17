import { PrismicRichText } from '@prismicio/react';
import type { FC } from 'react';

import {
  ArrowRight,
  Container,
  Content,
  Date,
  Description,
  Image,
  ImageContainer,
  ReadMore,
  Title,
} from './styles';
import type Props from './types';

const PostCard: FC<Props> = ({
  slug,
  title,
  description,
  coverImage,
  date,
  className,
}) => (
  <Container className={className} href={`/blog/${slug}`}>
    <ImageContainer>
      <Image src={coverImage?.url} />
    </ImageContainer>
    <Content>
      <PrismicRichText
        field={title}
        components={{
          heading1: ({ children }) => <Title key="heading1">{children}</Title>,
        }}
      />
      {date && <Date>{date}</Date>}
      {description && <Description>{description}</Description>}
      <ReadMore>
        Leer más
        <ArrowRight />
      </ReadMore>
    </Content>
  </Container>
);

export default PostCard;

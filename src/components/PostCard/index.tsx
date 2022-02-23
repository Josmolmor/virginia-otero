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
  ReadMoreLabel,
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
      <PrismicRichText
        field={title}
        components={{
          heading1: ({ children }) => <Title key="heading1">{children}</Title>,
        }}
      />
    </ImageContainer>
    <Content>
      {date && (
        <Date>
          <i className="ri-calendar-line" />
          {date}
        </Date>
      )}
      {description && <Description>{description}</Description>}
      <ReadMore>
        <ReadMoreLabel>Leer más</ReadMoreLabel>
        <ArrowRight />
      </ReadMore>
    </Content>
  </Container>
);

export default PostCard;

import { DateField, ImageField, TitleField } from '@prismicio/types';
import { PrismicText } from '@prismicio/react';
import { asText } from '@prismicio/helpers';
import Date from 'components/date';

import CoverImage, { Image } from '../cover-image';
import styled from 'styled-components';
import Anchor from '../anchor';

type PostPreviewProps = {
  title: TitleField;
  coverImage: ImageField;
  date: DateField;
  excerpt: string;
  href: string;
};

const Container = styled.div``;

const PreviewImage = styled(CoverImage)`
  margin-bottom: 1.25rem;

  ${Image} {
    border-radius: 4px;
    @media (min-width: 640px) {
      transition: transform 0.75s;

      &:hover {
        transform: scale(1.025);
      }
    }
  }
`;

const DateContainer = styled.div`
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

const Excerpt = styled.p`
  font-size: 1.125rem;
  line-height: 1.625;
`;

export default function Preview({
  title,
  coverImage,
  date,
  excerpt,
  href
}: PostPreviewProps) {
  return (
    <Container>
      <PreviewImage title={asText(title)} href={href} image={coverImage} />
      <h3>
        <Anchor href={href}>
          <PrismicText field={title} />
        </Anchor>
      </h3>
      <DateContainer>
        <Date dateField={date} />
      </DateContainer>
      <Excerpt>{excerpt}</Excerpt>
    </Container>
  );
}

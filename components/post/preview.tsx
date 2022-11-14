import { DateField, ImageField, TitleField } from '@prismicio/types';
import { PrismicText } from '@prismicio/react';
import { asText } from '@prismicio/helpers';
import Date from 'components/date';

import CoverImage, { Image } from '../cover-image';
import styled from 'styled-components';
import Anchor from '../anchor';
import { Clock, ArrowRight } from 'react-feather';

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
  align-items: flex-start;
  display: flex;
  gap: 6px;
  font-size: 0.75rem;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  font-weight: 500;
  color: #9c9c9c;
  line-height: initial;
`;

const Excerpt = styled.p`
  font-size: 1rem;
  line-height: 1.625;
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 1.5rem;
  line-height: 1.375;
  margin-bottom: 0.25rem;

  @media (min-width: 768px) {
    font-size: 1.875rem;
    margin-bottom: 0.5rem;
  }
`;

const ReadMoreAnchor = styled(Anchor)`
  color: ${({ theme }) => theme.colors.brick};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  transition-property: color;
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    color: ${({ theme }) => theme.colors.darkBlue};

    svg {
      transition-property: transform;
      transition: 350ms cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translateX(3px);
    }
  }
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
      <H3>
        <Anchor href={href}>
          <PrismicText field={title} />
        </Anchor>
      </H3>
      <DateContainer>
        <Clock size={14} />
        <Date dateField={date} />
      </DateContainer>
      <Excerpt>
        {excerpt}
        <ReadMoreAnchor href={href}>
          Leer más <ArrowRight size={14} />
        </ReadMoreAnchor>
      </Excerpt>
    </Container>
  );
}

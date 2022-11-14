import { DateField, ImageField, TitleField } from '@prismicio/types';
import { PrismicText } from '@prismicio/react';
import { asText } from '@prismicio/helpers';
import CoverImage, { Image } from 'components/cover-image';
import Date from 'components/date';
import styled from 'styled-components';
import Anchor from 'components/anchor';
import { ArrowRight, Clock } from 'react-feather';

type HeroPostProps = {
  title: TitleField;
  coverImage: ImageField;
  date: DateField;
  excerpt: string;
  href: string;
};

const HeroImage = styled(CoverImage)`
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }

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

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;

  @media (min-width: 1024px) {
    font-size: 2.75rem;
    margin-bottom: 0.75rem;
  }
`;

const Container = styled.div`
  margin-bottom: 5rem;

  @media (min-width: 1024px) {
    grid-column-gap: 2rem;
    column-gap: 2rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-column-gap: 4rem;
    column-gap: 4rem;
    display: grid;
    margin-bottom: 7rem;
  }
`;

const Excerpt = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.625;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 0;
  }
`;

const DateContent = styled.div`
  align-items: center;
  display: flex;
  gap: 6px;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  color: #9c9c9c;
  line-height: initial;

  @media (min-width: 768px) {
    margin-bottom: 0;
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

export default function Hero({
  title,
  coverImage,
  date,
  excerpt,
  href
}: HeroPostProps) {
  return (
    <section>
      <HeroImage
        title={asText(title)}
        href={href}
        image={coverImage}
        priority='true'
      />
      <Container>
        <div>
          <Title>
            <Anchor href={href}>
              <PrismicText field={title} />
            </Anchor>
          </Title>
          <DateContent>
            <Clock size={16} />
            <Date dateField={date} />
          </DateContent>
        </div>
        <Excerpt>
          {excerpt}
          <ReadMoreAnchor href={href}>
            Leer más <ArrowRight size={14} />
          </ReadMoreAnchor>
        </Excerpt>
      </Container>
    </section>
  );
}

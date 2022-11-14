import { DateField, ImageField, TitleField } from '@prismicio/types';
import { PrismicText } from '@prismicio/react';
import { asText } from '@prismicio/helpers';
import CoverImage, { Image } from 'components/cover-image';
import Date from 'components/date';
import styled from 'styled-components';
import Anchor from 'components/anchor';

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
  font-size: 2.25rem;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (min-width: 1024px) {
    font-size: 2.75rem;
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
  font-size: 1.125rem;
  margin-bottom: 1rem;
  line-height: 1.625;
`;

const DateContent = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  font-size: 1.125rem;
  margin-bottom: 1rem;
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
            <Date dateField={date} />
          </DateContent>
        </div>
        <Excerpt>{excerpt}</Excerpt>
      </Container>
    </section>
  );
}

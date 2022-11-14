import { PrismicText } from '@prismicio/react';
import { asText } from '@prismicio/helpers';
import { DateField, ImageField, TitleField } from '@prismicio/types';
import Date from 'components/date';
import CoverImage from 'components/cover-image';
import { Title } from 'components/post';
import styled from 'styled-components';
import { Calendar } from 'react-feather';

type PostHeaderProps = {
  title: TitleField;
  coverImage: ImageField;
  date: DateField;
};

const ImageContainer = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }

  @media (min-width: 640px) {
    margin-left: 0;
    margin-right: 0;
  }

  margin-bottom: 2rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
`;

const TitleContainer = styled.div`
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
`;

const DateContent = styled(Date)`
  font-size: 1rem;
  opacity: 0.75;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const DateContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 1.5rem;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
    padding-left: 0.25rem;
  }
`;

export default function Header({ title, coverImage, date }: PostHeaderProps) {
  return (
    <>
      <TitleContainer>
        <Title>
          <PrismicText field={title} />
        </Title>
        <DateContainer>
          <Calendar size={20} />
          <DateContent dateField={date} />
        </DateContainer>
      </TitleContainer>
      <ImageContainer>
        <CoverImage title={asText(title)} image={coverImage} />
      </ImageContainer>
    </>
  );
}

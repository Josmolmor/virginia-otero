import { PrismicText } from '@prismicio/react';
import { asText } from '@prismicio/helpers';
import { DateField, ImageField, TitleField } from '@prismicio/types';
import Date from 'components/date';
import CoverImage from 'components/cover-image';
import Title from 'components/post/title';
import styled from 'styled-components';
import { Clock } from 'react-feather';

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
  max-width: 44rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
`;

const TitleValue = styled(Title)`
  text-align: center;
`;

const DateContent = styled(Date)``;

const DateContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 1.5rem;
  justify-content: center;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const Image = styled(CoverImage)`
  img {
    max-height: 40rem;
    object-fit: cover;
  }
`;

export default function Header({ title, coverImage, date }: PostHeaderProps) {
  return (
    <>
      <TitleContainer>
        <TitleValue>
          <PrismicText field={title} />
        </TitleValue>
        <DateContainer>
          <Clock size={20} />
          Publicado el <DateContent dateField={date} />
        </DateContainer>
      </TitleContainer>
      <ImageContainer>
        <Image title={asText(title)} image={coverImage} />
      </ImageContainer>
    </>
  );
}

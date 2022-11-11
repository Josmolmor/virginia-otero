import { PrismicText } from '@prismicio/react';
import { asText } from '@prismicio/helpers';
import { DateField, ImageField, TitleField } from '@prismicio/types';
import Date from 'components/date';
import CoverImage from 'components/cover-image';
import { Title } from 'components/post';
import styled from 'styled-components';

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

const DateContainer = styled.div`
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
`;

const DateContent = styled(Date)`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
`;

export default function Header({ title, coverImage, date }: PostHeaderProps) {
  return (
    <>
      <Title>
        <PrismicText field={title} />
      </Title>
      <ImageContainer>
        <CoverImage title={asText(title)} image={coverImage} />
      </ImageContainer>
      <DateContainer>
        <DateContent dateField={date} />
      </DateContainer>
    </>
  );
}

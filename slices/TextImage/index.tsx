import React from 'react';
import styled, { css } from 'styled-components';
import CoverImage from 'components/cover-image';
import { PrismicRichText } from '@prismicio/react';

/**
 * @typedef {import("@prismicio/client").Content.TextImageSlice} TextImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextImageSlice>} TextImageProps
 * @param { TextImageProps }
 */

const Container = styled.section``;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  &:not(:last-child) {
    margin-bottom: 48px;

    @media (min-width: 768px) {
      margin-bottom: 6rem;
    }
  }

  &:last-child {
    padding-bottom: 48px;

    @media (min-width: 768px) {
      padding-bottom: 6rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 64px;
  }

  ${({ $reverse }) => {
    return (
      $reverse &&
      css`
        @media (min-width: 768px) {
          flex-direction: row-reverse;
        }
      `
    );
  }}

  > * {
    flex-basis: 50%;
  }
`;

const TextContent = styled.div``;

const Text = styled.p`
  font-size: 1rem;
  text-align: left;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const Image = styled(CoverImage)`
  border-radius: 4px;

  > img {
    max-height: 50rem;
    object-fit: cover;
  }
`;

const TextImage = ({ slice, index }) => {
  console.log(slice, index, index % 2);

  const { primary } = slice;
  const { image, text } = primary;

  return (
    <Container>
      <Row $reverse={index % 2 === 1}>
        <TextContent>
          <PrismicRichText
            field={text}
            components={{
              paragraph: ({ children }) => <Text>{children}</Text>
            }}
          />
        </TextContent>
        <Image image={image} />
      </Row>
    </Container>
  );
};

export default TextImage;

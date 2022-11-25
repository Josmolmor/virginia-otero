import Container from 'components/container';
import Layout from 'components/layout';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import styled, { css } from 'styled-components';
import CoverImage from 'components/cover-image';
import LeavesSmall from 'components/icons/leaves-small';
import LeavesMedium from 'components/icons/leaves-medium';
import { NextSeo } from 'next-seo';
import { createClient } from 'lib/prismic';
import { Content } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';
import { SliceZone } from '@prismicio/react';
import { components } from 'slices';

type IndexProps = {
  preview: boolean;
  about: Content.AboutDocument;
};

const AboutContent = styled.div`
  position: relative;
`;

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
  position: relative;
`;

const Hello = styled.h4`
  display: block;
  color: white;
  font-family: 'Diamond Bridge', 'Great Sailor', sans-serif;
  letter-spacing: 1.5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  text-shadow: 1px 1px #000;

  @media (min-width: 768px) {
    font-size: 7rem;
    left: 150px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const MainImage = styled(CoverImage)`
  > img {
    max-height: 30rem;
    object-fit: cover;
  }
`;

const HeadingContainer = styled.div`
  position: relative;
`;

const Heading = styled.h4`
  font-size: 1.125rem;
  text-align: center;
  margin: 3rem 2rem;

  @media (min-width: 640px) {
    margin: 4rem;
  }

  @media (min-width: 768px) {
    max-width: 54rem;
    margin: 6rem auto;
  }
`;

const commonLeavesCss = css`
  z-index: -1;
  position: absolute;
  opacity: 0.5;
  pointer-events: none;
`;

const LeavesIconTop = styled(LeavesSmall)`
  ${commonLeavesCss};
  left: 0;
  top: 0;
`;

const LeavesMediumIcon = styled(LeavesMedium)`
  ${commonLeavesCss};
  left: 0;
  bottom: 0;
  transform: rotate(65deg);
`;

export default function About({ preview, about }: IndexProps) {
  const { cover_image: coverImage, intro, slices } = about.data;

  return (
    <Layout preview={preview}>
      <NextSeo
        title='Sobre mi'
        description='Conóceme un poco más'
        openGraph={{
          images: [
            {
              url: coverImage.url
            }
          ]
        }}
      />
      <Container>
        <AboutContent>
          <ImageContainer>
            <MainImage image={coverImage} priority='true' />
            <Hello>Hola!</Hello>
          </ImageContainer>
          <HeadingContainer>
            <PrismicRichText
              field={intro}
              components={{
                heading1: ({ children }) => <Heading>{children}</Heading>,
                heading2: ({ children }) => <Heading>{children}</Heading>,
                heading3: ({ children }) => <Heading>{children}</Heading>,
                heading4: ({ children }) => <Heading>{children}</Heading>
              }}
            />
            <LeavesIconTop />
          </HeadingContainer>
          <SliceZone slices={slices} components={components} />
          <LeavesMediumIcon />
        </AboutContent>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({
  preview = false,
  previewData
}: GetStaticPropsContext): Promise<GetStaticPropsResult<IndexProps>> {
  const client = createClient({ previewData });

  const aboutInfo = await client.getAllByType<Content.AboutDocument>('about');

  return {
    props: { preview, about: aboutInfo[0] }
  };
}

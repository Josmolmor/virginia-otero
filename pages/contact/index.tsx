import Container from 'components/container';
import Layout from 'components/layout';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import ContactForm from 'components/contact-form';
import styled, { css } from 'styled-components';
import Socials from 'components/socials';
import { NextSeo } from 'next-seo';
import { createClient } from 'lib/prismic';
import { Content } from '@prismicio/client';
import Review from 'components/review';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import LeavesSmall from '../../components/icons/leaves-small';

type IndexProps = {
  preview: boolean;
  allReviews: Content.ReviewDocument[];
};

const Main = styled(Container)`
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.25;
  z-index: -1;
  background-image: radial-gradient(currentColor 0.25px, transparent 0.45px);
  background-size: calc(10 * 1px) calc(10 * 1px);
`;

const H1 = styled.h1`
  @media (min-width: 768px) {
    font-size: 6.25rem;
  }

  font-family: 'Diamond Bridge', 'Great Sailor', sans-serif;
  text-shadow: 0px 0px white;
  letter-spacing: 1.5px;
  font-size: 2.75rem;
  line-height: 1.2;
  font-weight: 700;
  text-align: center;

  ${({ $smaller }) =>
    $smaller &&
    css`
      font-size: 1.75rem;

      @media (min-width: 768px) {
        font-size: 3.25rem;
      }
    `}
`;

const H4 = styled.h4`
  font-size: 1.125rem;
  text-align: center;
  padding-left: 0;
  max-width: 44rem;
  margin: 1.25rem auto 2rem;

  @media (min-width: 768px) {
    margin: 1.25rem auto 4rem;
  }
`;

const FormContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 768px) {
    gap: 12px;
    width: 50%;
  }
  margin: auto;
`;

const Form = styled(ContactForm)``;

const Icons = styled(Socials)`
  position: initial;
  gap: 8px;

  > * {
    border-radius: 2px;
    transition-property: background-color;
    transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
    background-color: ${({ theme }) => theme.colors.brick};

    &:focus-within,
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkBrick};
    }
  }

  @media (min-width: 768px) {
    left: initial;
    top: 0;
    right: -54px;
    transform: none;
    flex-direction: column;
    gap: 12px;
    position: absolute;
  }
`;

const ReviewsContent = styled(Carousel)`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

const HR = styled.hr`
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  margin-top: 4.5rem;
  margin-bottom: 4.5rem;
  border-color: #eaeaea;
  border-top-width: 1px;
`;

const LeavesIconTop = styled(LeavesSmall)`
  width: 80px;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 48px;
  z-index: -1;
  opacity: 0.25;

  @media (min-width: 768px) {
    width: 120px;
    opacity: 0.85;
  }
`;

const LeavesIconBot = styled(LeavesIconTop)`
  left: auto;
  right: 0;
  transform: rotate(90deg);
  opacity: 0.25;

  @media (min-width: 768px) {
    opacity: 0.5;
  }
`;

const BottomSection = styled.div`
  position: relative;
`;

export default function About({ preview, allReviews }: IndexProps) {
  return (
    <Layout preview={preview}>
      <NextSeo title='Contacto' description='Hablemos' />
      <Main>
        <Background />
        <LeavesIconTop />
        <H1 $smaller>Reseñas de clientes</H1>
        <H4>Mira lo que otros pacientes dicen de nuestro tiempo juntos</H4>
        <ReviewsContent
          autoPlay={true}
          emulateTouch={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={8000}
        >
          {allReviews.map(({ id, data }) => (
            <Review
              key={id}
              title={data.title}
              name={data.name}
              message={data.message}
            />
          ))}
        </ReviewsContent>
        <HR />
        <BottomSection>
          <LeavesIconBot />
          <H1 $smaller>Hablemos</H1>
          <H4>
            ¿Tienes alguna duda? Escribeme y cuéntame un poco más sobre ti
            usando el formulario a continuación o a través de los iconos de
            redes sociales.
          </H4>
          <FormContainer>
            <Form />
            <Icons color='white' />
          </FormContainer>
        </BottomSection>
        <div style={{ paddingBottom: '8rem' }} />
      </Main>
    </Layout>
  );
}

export async function getStaticProps({
  preview = false,
  previewData
}: GetStaticPropsContext): Promise<GetStaticPropsResult<IndexProps>> {
  const client = createClient({ previewData });

  const allReviews = await client.getAllByType('review');

  return {
    props: { preview, allReviews }
  };
}

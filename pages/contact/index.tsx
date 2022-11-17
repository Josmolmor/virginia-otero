import Container from 'components/container';
import Layout from 'components/layout';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import ContactForm from 'components/contact-form';
import styled from 'styled-components';
import Socials from 'components/socials';
import { NextSeo } from 'next-seo';

type IndexProps = {
  preview: boolean;
};

const Main = styled(Container)``;

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

  font-family: 'Great Sailor', sans-serif;
  letter-spacing: 1px;
  font-size: 2.75rem;
  line-height: 1.2;
  font-weight: 700;
  text-align: center;
`;

const H4 = styled.h4`
  font-size: 1.125rem;
  text-align: center;
  padding-left: 0;
  text-align: center;
  max-width: 44rem;
  margin: 1.25rem auto 6rem;

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

export default function About({ preview }: IndexProps) {
  return (
    <Layout preview={preview}>
      <NextSeo title='Contacto' description='Hablemos' />
      <Main>
        <Background />
        <H1>Hablemos</H1>
        <H4>
          ¿Tienes alguna duda? Escribeme y cuéntame un poco más sobre ti usando
          el formulario a continuación o a través de los iconos de redes
          sociales.
        </H4>
        <FormContainer>
          <Form />
          <Icons color='white' />
        </FormContainer>
        <div style={{ paddingBottom: '5rem' }} />
      </Main>
    </Layout>
  );
}

export async function getStaticProps({
  preview = false
}: GetStaticPropsContext): Promise<GetStaticPropsResult<IndexProps>> {
  return {
    props: { preview }
  };
}

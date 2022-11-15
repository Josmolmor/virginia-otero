import Head from 'next/head';
import Container from 'components/container';
import Layout from 'components/layout';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import styled, { css } from 'styled-components';
import { Button } from 'components/contact-form';
import CoverImage from 'components/cover-image';
import {
  MessageCircle,
  Watch,
  Search,
  Map,
  Heart,
  Users,
  Target,
  Award
} from 'react-feather';

const ServicesList = [
  {
    icon: <MessageCircle />,
    text: 'Mejorar mi comunicación conmigo misma/o y con los demás'
  },
  {
    icon: <Watch />,
    text: 'Gestionar eficazmente mi tiempo y energía'
  },
  {
    icon: <Search />,
    text: 'Conocer mis debilidades y fortalezas personales'
  },
  {
    icon: <Map />,
    text: 'Trazar un plan de acción para conseguir mis metas'
  },
  {
    icon: <Heart />,
    text: 'Desarrollar habilidades emocionales'
  },
  {
    icon: <Users />,
    text: 'Aprender a cuidar mis relaciones'
  },
  {
    icon: <Target />,
    text: 'Descubrir qué quiero, cómo lo quiero y cuando lo quiero'
  },
  {
    icon: <Award />,
    text: 'Identificar mis prioridades y aprender a darles sitio'
  }
];

type IndexProps = {
  preview: boolean;
};

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex-basis: 42%;
`;

const commonH4 = css`
  @media (min-width: 768px) {
    text-align: left;
  }

  font-size: 1.125rem;
  text-align: center;
`;

const H4 = styled.h4`
  ${commonH4};
`;

const Buttons = styled.div`
  display: flex;
  gap: 8px;
`;

const MainButton = styled(Button)`
  max-width: 10rem;
`;

const SecondaryButton = styled(Button)`
  max-width: 10rem;
  color: ${({ theme }) => theme.colors.brick};
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.brick};

  &:focus-within,
  &:hover {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.darkBrick};
    color: ${({ theme }) => theme.colors.darkBrick};
  }
`;

const Image = styled(CoverImage)`
  border-radius: 20px;
  margin-top: -5rem;
  flex-basis: 50%;
  z-index: 1;
`;

const H2 = styled.h2`
  @media (min-width: 768px) {
    font-size: 4rem;
    text-align: left;
  }

  color: white;
  font-family: 'Great Sailor', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  line-height: 1.2;
  font-weight: 500;
  text-align: center;
`;

const ServicesText = styled.h4`
  @media (min-width: 768px) {
    max-width: 60%;
  }
  ${commonH4};
`;

const ServicesStripe = styled.div`
  background-image: radial-gradient(currentColor 0.15px, transparent 0.45px);
  background-size: calc(10 * 1px) calc(10 * 1px);
  color: white;
  background-color: ${({ theme }) => theme.colors.brick};
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-top: 0;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 4rem 1.25rem 6rem;

  @media (min-width: 768px) {
    margin-top: -2rem;
    padding: 4rem 7rem 6rem;
  }

  @media (min-width: 1280px) {
    margin-top: -4rem;
  }
`;

const Services = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

const Cards = styled.div`
  align-items: flex-start;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: center;
  column-gap: 64px;
  row-gap: 64px;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, 300px);
    column-gap: 24px;
    row-gap: 48px;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-direction: column;
  text-align: center;

  svg {
    height: 2rem;
    width: auto;
    flex-shrink: 0;
  }
`;

export default function Index({ preview }: IndexProps) {
  const coverImage = {
    url: 'https://images.prismic.io/virginia-otero/29bb912f-358d-4b6c-b7da-e732ef79310c_PXL_20221022_123232979.PORTRAIT.jpg?auto=compress,format',
    alt: '',
    copyright: '',
    dimensions: {
      height: 100,
      width: 200
    }
  };

  return (
    <Layout preview={preview}>
      <Head>
        <title>Virginia Otero Perez</title>
      </Head>
      <Container>
        <Heading>
          <LeftSide>
            <H4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. When an unknown printer took a gallery of type and
              scrambled it to make a type specimen book.
            </H4>
            <Buttons>
              <MainButton>Hablemos</MainButton>
              <SecondaryButton>Conóceme</SecondaryButton>
            </Buttons>
          </LeftSide>
          <Image image={coverImage} />
        </Heading>
        <ServicesStripe>
          <Services>
            <H2>Mis servicios</H2>
            <ServicesText>
              Entre otros beneficios enfocados al desarrollo de la mejor versión
              de ti mismo/a y de tus metas, en las sesiones de crecimiento y
              desarrollo personal puedes aprender a…
            </ServicesText>
            <Cards>
              {ServicesList.map(({ icon, text }) => {
                return (
                  <Card>
                    {icon}
                    <span>{text}</span>
                  </Card>
                );
              })}
            </Cards>
          </Services>
        </ServicesStripe>
      </Container>
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

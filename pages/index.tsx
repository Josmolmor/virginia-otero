import Head from 'next/head';
import Container from 'components/container';
import Layout from 'components/layout';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { buttonCss } from 'components/contact-form';
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
import LeavesSmall from 'components/icons/leaves-small';
import { useEffect, useState } from 'react';
import Branch from 'components/icons/branch';

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

const MainContainer = styled(Container)`
  margin-bottom: 0;
`;

const Heading = styled.div`
  display: flex;
  padding-bottom: 5rem;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media (min-width: 640px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 0;
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
    padding-bottom: 0;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 640px) {
    gap: 1.5rem;
    flex-basis: 42%;
  }

  @media (min-width: 768px) {
    gap: 3rem;
  }
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

const MainButton = styled(Link)`
  ${buttonCss};
  @media (min-width: 768px) {
    max-width: 10rem;
  }
`;

const SecondaryButton = styled(Link)`
  ${buttonCss};
  @media (min-width: 768px) {
    max-width: 10rem;
  }
  color: ${({ theme }) => theme.colors.brick};
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.brick};

  &:focus-within,
  &:hover {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.darkBrick};
    color: ${({ theme }) => theme.colors.darkBrick};
  }

  @media (min-width: 640px) {
    max-width: 10rem;
  }
`;

const Image = styled(CoverImage)`
  border-radius: 20px;
  z-index: 1;

  > img {
    border-radius: 20px;
  }

  @media (min-width: 1024px) {
    margin-top: -5rem;
  }

  @media (min-width: 640px) {
    flex-basis: 50%;
  }
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
    margin-top: 0;
    padding: 4rem 7rem 6rem;
  }

  @media (min-width: 1024px) {
    margin-top: -2.5rem;
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

const TipsContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 4rem;
  flex-direction: column;
  gap: 56px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 0;
    padding: 4rem 0 6rem;
    gap: 0;
  }
`;

const TipsImage = styled(CoverImage)`
  border-radius: 20px;
  z-index: 1;

  > img {
    border-radius: 20px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  flex-basis: 40%;
`;

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 56px;
`;

const TextContent = styled.div`
  color: ${({ theme }) => theme.colors.darkBrick};
  text-align: center;
`;

const Words = styled.p`
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.25rem;
  }
`;

const Emphasis = styled.span`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 5px;

  @media (min-width: 768px) {
    font-size: 3.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

const commonLeavesCss = css`
  z-index: -1;
  position: absolute;
  pointer-events: none;
`;

const TipsLeavesLeft = styled(LeavesSmall)`
  ${commonLeavesCss};
  opacity: 0.75;
  left: -120px;
  top: -48px;
  width: 200px;
  height: auto;

  @media (min-width: 1024px) {
    width: 250px;
  }
`;

const TipsLeavesRight = styled(LeavesSmall)`
  ${commonLeavesCss};
  opacity: 0.55;
  right: -60px;
  bottom: -32px;
  transform: rotate(140deg);

  @media (min-width: 640px) {
    right: -80px;
  }
`;

const InstagramContainer = styled.div`
  color: white;
  background-color: ${({ theme }) => theme.colors.brick};
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 4rem 1.25rem 6rem;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 4rem 7rem 6rem;
  }
`;

const IgTitle = styled(H2)`
  text-align: center;
`;

const BranchIcon = styled(Branch)`
  mix-blend-mode: screen;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: scaleX(-1);
  width: 100%;
  height: auto;

  @media (min-width: 768px) {
    width: auto;
    height: 73%;
  }

  @media (min-width: 1024px) {
    height: 95%;
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

  const tipsImage = {
    url: 'https://images.pexels.com/photos/4468206/pexels-photo-4468206.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4468206.jpg&fm=jpg',
    alt: '',
    copyright: '',
    dimensions: {
      height: 100,
      width: 200
    }
  };

  const [igVisible, setIgVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.eapps-link')?.remove();
      document.querySelector('.eapps-widget-toolbar')?.remove();
      document.querySelector('.eapps-instagram-feed-title-container')?.remove();
    }, 1250);
  }, []);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Virginia Otero Perez</title>
      </Head>
      <MainContainer>
        <Heading>
          <LeftSide>
            <H4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. When an unknown printer took a gallery of type and
              scrambled it to make a type specimen book.
            </H4>
            <Buttons>
              <MainButton href='/contact'>Hablemos</MainButton>
              <SecondaryButton href='/about'>Conóceme</SecondaryButton>
            </Buttons>
          </LeftSide>
          <Image image={coverImage} priority='true' />
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
                  <Card key={text}>
                    {icon}
                    <span>{text}</span>
                  </Card>
                );
              })}
            </Cards>
          </Services>
        </ServicesStripe>
        <TipsContainer>
          <ImageContainer>
            <TipsImage image={tipsImage} />
            <TipsLeavesLeft />
            <TipsLeavesRight />
          </ImageContainer>
          <TextSide>
            <TextContent>
              <Words>¿Quieres aprender</Words>
              <Emphasis>Tips de psicologia</Emphasis>
              <Words>en 3 minutos?</Words>
            </TextContent>
            <MainButton href='/posts'>Ir al blog</MainButton>
          </TextSide>
        </TipsContainer>
        {/*<InstagramContainer>
            <IgTitle>Instagram</IgTitle>
            <script
              src='https://apps.elfsight.com/p/platform.js'
              defer
            ></script>
            <div className='elfsight-app-dbc38c2e-7887-4515-84a3-09e8fa149d27'></div>
            <BranchIcon />
          </InstagramContainer>*/}
      </MainContainer>
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

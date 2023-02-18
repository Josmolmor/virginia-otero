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
import { NextSeo } from 'next-seo';
import { useScroll } from 'framer-motion';
import useMediaQuery from 'hooks/useMediaQuery';
import useViewportSizes from 'hooks/useViewportSizes';

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

const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background-image: linear-gradient(
    rgba(0 0 0 / 0) 0%,
    rgba(0 0 0 / 0.85) 100%
  );
`;

const Image = styled(CoverImage)`
  border-radius: 20px;
  max-height: 20rem;

  > img {
    max-height: 25rem;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    max-height: 50rem;
    border-radius: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 1;

    > img {
      max-height: 40rem;
      width: 100vw;
      object-fit: cover;
    }
  }

  /*
    @media (min-width: 1024px) {
      margin-top: -5rem;
    }
  
    @media (min-width: 640px) {
      flex-basis: 50%;
    }*/
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    padding: 5rem 4rem;
    max-height: 100%;

    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin: 0 -50vw;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  @media (min-width: 1024px) {
    // min-height: 50rem;
  }

  /*@media (min-width: 640px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 0;
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
    padding-bottom: 0;
  }*/
`;

const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    z-index: 2;
    max-width: 48rem;
  }

  /*display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 640px) {
    gap: 1.5rem;
    flex-basis: 42%;
  }

  @media (min-width: 768px) {
    gap: 3rem;
  }*/
`;

const ScriptText = styled.p`
  font-family: 'Diamond Bridge', cursive;
  font-size: 3.5rem;
  line-height: 1;

  @media (min-width: 768px) {
    text-shadow: 1px 1px black;
    line-height: 1.2;
    font-size: 5rem;
  }

  ${({ $visible }) =>
    $visible &&
    css`
      @media (min-width: 768px) {
        text-shadow: 1px 1px black;
      }
    `}
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
  text-align: left;
`;

const Buttons = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const MainButton = styled(Link)`
  ${buttonCss};
  @media (min-width: 768px) {
    min-width: 15rem;
  }
`;

const SecondaryButton = styled(Link)`
  ${buttonCss};
  color: ${({ theme }) => theme.colors.brick};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.brick};

  &:focus-within,
  &:hover {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.darkBrick};
    color: ${({ theme }) => theme.colors.darkBrick};
  }

  @media (min-width: 768px) {
    color: white;
    min-width: 15rem;
  }
`;

const ThirdButton = styled(Link)`
  ${buttonCss};
  @media (min-width: 768px) {
    max-width: 10rem;
  }
`;

const H2 = styled.h2`
  @media (min-width: 768px) {
    font-size: 4rem;
    text-align: left;
  }

  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  line-height: 1.2;
  font-weight: 500;
  text-align: center;
  font-family: 'Diamond Bridge', 'Great Sailor', sans-serif;
  text-shadow: 0px 0px white;
  letter-spacing: 1.5px;
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
  padding: 5rem 2rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  /*  @media (min-width: 1024px) {
    margin-top: -2.5rem;
  }

  @media (min-width: 1280px) {
    margin-top: -4rem;
  }*/
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
  padding: 4rem 0;
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
    object-fit: cover;
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
  font-family: 'Diamond Bridge', 'Great Sailor', sans-serif;
  text-shadow: 0px 0px white;
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

export default function Index({ preview }: IndexProps) {
  const isDesktop = useMediaQuery(768);
  const { scrollY } = useScroll();
  const [opacity, setOpacity] = useState(0);
  const [showHeadingElementsByDefault, setShowHeadingElementsByDefault] =
    useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest >= 75) {
        return setOpacity(1);
      }
      return setOpacity(latest / 75);
    });
  }, []);

  const coverImage = {
    url: 'https://lh3.googleusercontent.com/gi4ABn-fqjGY-mCcGFxNqI525AO3DdJoCZ89YzBuFgLhMS1bMKxgCZGC0m5h97aoPbUikt4t5AvNsFp1oRWvjsQyTeQTGm-wsDM4FP3lRClh7xzKJ_jDV9galXcZMHGmKtz7c-cj62nCh-91GuXDCeuV4fJcIkwj7nmy3bTKF29wErT-anWXu7kHwlqqt8QWdybpUfmqH2-BPacandZHJNTrUcBpUTct0sMPqc-A7uGoWC89hYYKD0A6tTgGq04BeINTIP2kTGTopuwn7OTS-zQcBGE0zQOHJsw7WYW16z6r8bHDoZtJWk7_eKDD3wYEY_g3dMKSYcXoQIfXqfOmTLFRbOKjj26iNNVR2vi7NpDSLEIn69V_5biRyHU650DzWc0Dok4zU3WMUpYBoggJUNAfRGHYQO3rRo-35db1SxUhOygP1mXnJmtuFuthRLHLaTNw3S-1d5DuO_wEohMnWpkmjO24yWx2Esokxdh8lqd3XfLG5hpr76HDT860zPiYcSLVoUwTi4j-8rP0p1t6VRsu8FvcKhbNWIzYsEd_s1rtdl_nDU-nvD4oPt0Brargo3_gGcl8pzfBviIxxxfkvT9qlAQ2reTM6fTaENmaFFwQyxa_GVQntB8t_b_oaSs0r6frfiJqN3hPcoRWbILDL4hN_AzAoz1FydzTi0q_OBPeZvDw5E4qP42kiJ5oRrpCUBfmYt1NwM5qLl-Ht6hkxXVqptmBQ9ca6DyC2dakK0ChwyIuafK_3FaZELqZZVrpRtE5Xjud5INDGvJvnNaw1ak3INzZTxI-9J1vbCtG93jQRlvCKIGuTUXHr1idO3TvnkojKXukUsE7Zim8Nls2sPAUbOEoRSmiX8DxEYPCJhA05cl4xvv8uiAuEzxeQQNfcXCjCUDAgh-hqZP3-FyHPD79aKodQrr3XikBSbT9jrM2=w1964-h2608-no?authuser=0',
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

  const [vpWidth] = useViewportSizes({ dimension: 'w' });
  useEffect(() => {
    if (vpWidth > 768) {
      setTimeout(() => setShowHeadingElementsByDefault(true), 250);
    } else {
      setTimeout(() => setShowHeadingElementsByDefault(true), 250);
    }
  }, [vpWidth]);

  return (
    <Layout preview={preview}>
      <NextSeo />
      <MainContainer>
        <Heading>
          {isDesktop && <Backdrop style={{ opacity }} />}
          <LeftSide
            style={{
              opacity: isDesktop
                ? opacity
                : showHeadingElementsByDefault
                ? 1
                : 0
            }}
          >
            <ScriptText $visible={opacity > 0}>
              Crecimiento y Desarrollo Personal
            </ScriptText>
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
          <Image image={coverImage} priority='true' animationDuration={0.25} />
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
              <Emphasis>tips de psicología</Emphasis>
              <Words>en 3 minutos?</Words>
            </TextContent>
            <ThirdButton href='/posts'>Ir al blog</ThirdButton>
          </TextSide>
        </TipsContainer>
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

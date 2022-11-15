import Head from 'next/head';
import Container from 'components/container';
import Layout from 'components/layout';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import styled, { css } from 'styled-components';
import CoverImage from 'components/cover-image';
import LeavesSmall from 'components/icons/leaves-small';
import LeavesMedium from 'components/icons/leaves-medium';

type IndexProps = {
  preview: boolean;
};

const Content = styled.div`
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
  font-family: 'Great Sailor', sans-serif;
  letter-spacing: 1px;
  position: absolute;
  right: 120px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 5rem;
`;

const Image = styled(CoverImage)`
  border-radius: 4px;
`;

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
        flex-direction: column-reverse;
      `
    );
  }}

  > * {
    flex-basis: 50%;
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

const Text = styled.p`
  font-size: 1.125rem;
  text-align: left;
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

export default function About({ preview }: IndexProps) {
  const coverImage = {
    url: 'https://images.pexels.com/photos/1000529/pexels-photo-1000529.jpeg?cs=srgb&dl=pexels-jimmy-chan-1000529.jpg&fm=jpg',
    alt: '',
    copyright: '',
    dimensions: {
      height: 100,
      width: 200
    }
  };

  const coverImageTwo = {
    ...coverImage,
    url: 'https://images.pexels.com/photos/189342/pexels-photo-189342.jpeg?cs=srgb&dl=pexels-ravi-kant-189342.jpg&fm=jpg'
  };

  const coverImageThree = {
    ...coverImage,
    url: 'https://images.pexels.com/photos/998593/pexels-photo-998593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  };

  return (
    <Layout preview={preview}>
      <Head>
        <title>Sobre mi | Virginia Otero Perez</title>
      </Head>
      <Container>
        <Content>
          <ImageContainer>
            <CoverImage image={coverImage} priority='true' />
            <Hello>Hola!</Hello>
          </ImageContainer>
          <HeadingContainer>
            <Heading>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. When an unknown printer took a gallery of type and
              scrambled it to make a type specimen book. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. When an
              unknown printer took a gallery of type and scrambled it to make a
              type specimen book.
            </Heading>
            <LeavesIconTop />
          </HeadingContainer>
          <Row>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. When an unknown printer took a gallery of type and
              scrambled it to make a type specimen book. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. When an
              unknown printer took a gallery of type and scrambled it to make a
              type specimen book.
            </Text>
            <Image image={coverImage} />
          </Row>
          <Row $reverse>
            <Image image={coverImageTwo} />
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. When an unknown printer took a gallery of type and
              scrambled it to make a type specimen book. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. When an
              unknown printer took a gallery of type and scrambled it to make a
              type specimen book.
            </Text>
          </Row>
          <Row>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. When an unknown printer took a gallery of type and
              scrambled it to make a type specimen book. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. When an
              unknown printer took a gallery of type and scrambled it to make a
              type specimen book.
            </Text>
            <Image image={coverImageThree} />
          </Row>
          <LeavesMediumIcon />
        </Content>
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

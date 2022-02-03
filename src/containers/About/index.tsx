import { PrismicRichText } from '@prismicio/react';

import Spinner from '$/components/Spinner';
import { H1 } from '$/components/Typography';
import { SectionTitle } from '$/styles/mixins';

import useConnect from './connect';
import { Container, Content, Image, LoadingContainer, Text } from './styles';

const About = () => {
  const { documents, loading } = useConnect();

  return (
    <Container>
      <SectionTitle>Sobre mi</SectionTitle>
      <Image $src="/images/me.jpg" />
      <Content>
        {loading && (
          <LoadingContainer>
            <Spinner />
          </LoadingContainer>
        )}
        {documents && documents[0] && documents[0].data.text && (
          <PrismicRichText
            field={documents[0].data.text}
            components={{
              heading1: ({ children }) => (
                <H1 style={{ margin: '0 0 2rem 0' }}>{children}</H1>
              ),
              paragraph: ({ children }) => <Text>{children}</Text>,
            }}
          />
        )}
      </Content>
    </Container>
  );
};

export default About;

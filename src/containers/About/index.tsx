import { PrismicRichText } from '@prismicio/react';
import type { PrismicDocument, RichTextField } from '@prismicio/types';
import { useEffect, useState } from 'react';

import { Title } from '$/components/PostCard/styles';
import { SectionTitle } from '$/styles/mixins';

import useConnect from './connect';
import { Container, Content } from './styles';

const About = () => {
  const { isLoading, isError, error, data } = useConnect();
  const [aboutText, setAboutText] = useState<RichTextField>([]);

  useEffect(() => {
    const aboutDocument = data?.results as unknown as PrismicDocument<{
      text: RichTextField;
    }>[];

    if (aboutDocument && aboutDocument[0]) {
      setAboutText(aboutDocument[0]?.data?.text);
    }
  }, [data]);

  return (
    <Container>
      <SectionTitle>Sobre mi</SectionTitle>
      <PrismicRichText
        field={aboutText}
        components={{
          paragraph: ({ children }) => <Content>{children}</Content>,
        }}
      />
    </Container>
  );
};

export default About;

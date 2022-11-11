import { PrismicNextImage } from '@prismicio/next';
import { SliceComponentProps } from '@prismicio/react';
import { Content } from '@prismicio/client';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type ImageProps = SliceComponentProps<Content.ImageSlice>;

const Container = styled(motion.div)``;

export const MainImage = styled(PrismicNextImage)`
  border-radius: 4px;

  margin: 32px auto;
  @media (min-width: 640px) {
    border-radius: 4px;
  }
`;

const Image = ({ slice }: ImageProps) => {
  return (
    <section>
      <Container
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 }
        }}
      >
        <MainImage
          load='lazy'
          field={slice.primary.image}
          imgixParams={{ fit: 'crop', ar: '2:1' }}
        />
      </Container>
    </section>
  );
};

export default Image;

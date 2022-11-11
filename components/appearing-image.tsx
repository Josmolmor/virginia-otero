import { motion } from 'framer-motion';
import { PrismicNextImage } from '@prismicio/next';
import styled from 'styled-components';
import { FC } from 'react';
import { RTImageNode } from '@prismicio/types';

type AppearingImage = {
  image: RTImageNode;
  children?: React.ReactNode;
};

const Container = styled(motion.div)`
  display: block;
`;

export const Img = styled(PrismicNextImage)`
  border-radius: 4px;
  display: block;
  margin: 32px auto;

  @media (min-width: 640px) {
    border-radius: 4px;
  }
`;

const AppearingImage: FC<AppearingImage> = ({ image, children, ...rest }) => {
  return (
    <Container
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
      {...rest}
    >
      <Img field={image} imgixParams={{ fit: 'crop', ar: '1:1' }} />
    </Container>
  );
};

export default AppearingImage;

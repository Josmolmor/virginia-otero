import { PrismicNextImage } from '@prismicio/next';
import { ImageField } from '@prismicio/types';
import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

type CoverImageProps = {
  title: string;
  image: ImageField;
  href?: string;
  priority?: 'true';
  className?: string;
};

const Container = styled(motion.div)`
  overflow: hidden;

  @media (min-width: 640px) {
    border-radius: 4px;
  }
`;

export const Image = styled(PrismicNextImage)``;

export default function CoverImage({
  title,
  image: imageField,
  href,
  priority,
  className
}: CoverImageProps) {
  const image = (
    <Image
      field={imageField}
      width={2000}
      height={1000}
      imgixParams={{ fit: 'crop', ar: '2:1' }}
      priority={priority}
    />
  );

  return (
    <Container
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
      className={className}
    >
      {href ? (
        <Link href={href} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </Container>
  );
}

import { PrismicNextImage } from '@prismicio/next';
import { ImageField } from '@prismicio/types';
import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

type CoverImageProps = {
  image: ImageField;
  title?: string;
  href?: string;
  priority?: 'true';
  className?: string;
  crop?: boolean;
  ar?: string;
  animationDuration?: number;
};

const Container = styled(motion.div)`
  overflow: hidden;

  @media (min-width: 640px) {
    border-radius: 4px;
  }
`;

export const Image = styled(PrismicNextImage)``;

export default function CoverImage({
  image: imageField,
  title,
  href,
  priority,
  crop,
  ar,
  className,
  animationDuration
}: CoverImageProps) {
  const image = (
    <Image
      field={imageField}
      width={2000}
      height={1000}
      priority={priority}
      imgixParams={{ fit: crop ? 'crop' : '', ar }} // ar: '2:1'
    />
  );

  return (
    <Container
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: animationDuration || 0.75 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
      className={className}
    >
      {href ? (
        <Link href={href} aria-label={title ?? ''}>
          {image}
        </Link>
      ) : (
        image
      )}
    </Container>
  );
}

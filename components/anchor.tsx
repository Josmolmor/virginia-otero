import Link from 'next/link';
import styled from 'styled-components';
import { FC } from 'react';

type AnchorProps = {
  title?: string;
  href?: string;
  children?: React.ReactNode;
  target?: 'Document' | 'Media' | 'Web';
};

const A = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

const Container = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

const Anchor: FC<AnchorProps> = ({ href, title, target, children }) => {
  return target === 'Web' ? (
    <A href={href} target='_blank'>
      {children}
    </A>
  ) : (
    <Container href={href} aria-label={title}>
      {children}
    </Container>
  );
};

export default Anchor;

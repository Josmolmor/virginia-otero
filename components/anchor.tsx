import Link from 'next/link';
import styled from 'styled-components';
import { FC } from 'react';

type AnchorProps = {
  title?: string;
  href?: string;
  children?: React.ReactNode;
  target?: 'Document' | 'Media' | 'Web';
  className?: string;
};

const A = styled.a`
  transition-property: color;
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    color: ${({ theme }) => theme.colors.brick};
  }
`;

const Container = styled(Link)`
  transition-property: color;
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    color: ${({ theme }) => theme.colors.brick};
  }
`;

const Anchor: FC<AnchorProps> = ({
  href,
  title,
  target,
  children,
  className
}) => {
  return target === 'Web' ? (
    <A href={href} target='_blank' className={className}>
      {children}
    </A>
  ) : (
    <Container href={href} aria-label={title} className={className}>
      {children}
    </Container>
  );
};

export default Anchor;

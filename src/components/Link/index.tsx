import NextLink from 'next/link';
import { forwardRef } from 'react';

import { isInternalUrl } from '$/utils/isInternalUrl';

import { Anchor } from './styles';
import type { Props } from './types';

const Link = forwardRef<HTMLAnchorElement, Props>(function Link(
  { children, href, ...props },
  ref,
) {
  if (isInternalUrl(href)) {
    return (
      <NextLink href={href} passHref>
        <Anchor ref={ref} {...props}>
          {children}
        </Anchor>
      </NextLink>
    );
  }

  return (
    <Anchor
      ref={ref}
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      {...props}
    >
      {children}
    </Anchor>
  );
});

export default Link;

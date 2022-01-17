import type { ReactNode } from 'react';

import type { ElementProps } from '$/utils/elementProps';

export type Props = {
  children?: ReactNode;
  href: string;
} & ElementProps<'a'>;

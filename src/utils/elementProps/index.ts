import type { StyledComponentProps } from 'styled-components';

import type { Theme } from '$/styles/themes/theme';

export type ElementProps<
  // eslint-disable-next-line no-undef
  T extends keyof JSX.IntrinsicElements,
  // eslint-disable-next-line @typescript-eslint/ban-types
> = StyledComponentProps<T, Theme, {}, keyof {}>;

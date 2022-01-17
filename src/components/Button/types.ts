import type { ReactNode } from 'react';

import type { ElementProps } from '$/utils/elementProps';

type CommonProps = {
  children?: ReactNode;
  variant?: 'secondary' | 'ghost';
  disabled?: boolean;
  className?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  size?: 'small' | 'tiny';
  type?: 'submit' | 'reset' | 'button';
  link?: boolean;
};

export type LinkProps = { href?: string } & ElementProps<'a'>;
export type ButtonProps = { href?: never } & ElementProps<'button'>;

export type Props = CommonProps & (ButtonProps | LinkProps);

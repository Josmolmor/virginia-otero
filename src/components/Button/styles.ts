import styled, { css } from 'styled-components';

import { Anchor } from '$/styles/mixins';

import Link from '../Link';
import type { Props } from './types';

const commonButtonStyled = css<{
  $variant: Props['variant'];
  $link: Props['link'];
}>`
  align-items: center;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  padding: 0.84375rem 0.921875rem;
  background-color: ${({ theme }) => theme.colors.primary200};
  color: ${({ theme }) => theme.colors.white};

  :disabled {
    cursor: not-allowed;
  }

  :focus,
  :focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.primary400};
    background-color: ${({ theme }) => theme.colors.primary300};
  }

  :not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.primary300};
  }

  ${({ $link }) =>
    $link &&
    css`
      ${Anchor};
    `};
`;

export const ContainerAsButton = styled.button`
  ${commonButtonStyled};
`;

export const ContainerAsAnchor = styled(Link)`
  ${commonButtonStyled};
  text-decoration: none;
`;

export const ButtonText = styled.span<{
  $hasLeftIcon?: boolean;
  $hasRightIcon?: boolean;
  $link: Props['link'];
}>`
  color: ${({ theme }) => theme.colors.white};
  display: block;
  margin: 0;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 0.9375rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  
  ${({ $hasLeftIcon }) =>
    $hasLeftIcon &&
    css`
      margin-left: 0.9375rem;
    `}}

  ${({ $hasLeftIcon }) =>
    $hasLeftIcon &&
    css`
      margin-right: 0.9375rem;
    `}}

  ${({ $link }) =>
    !$link &&
    css`
      font-size: 0.75rem;
      line-height: 0.9375rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    `};
`;

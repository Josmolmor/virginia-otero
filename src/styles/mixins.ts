import { css } from 'styled-components';

import { commonOverlineCss } from '$/components/Typography';

export const Anchor = css`
  ${commonOverlineCss};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary500};

  :disabled {
    background: none;
  }
  :not(:disabled):hover {
    background: none;
    text-decoration: underline;
  }
  :focus,
  :focus-within {
    background: none;
    text-decoration: underline;
  }
`;

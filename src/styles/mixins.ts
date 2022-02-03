import styled, { css } from 'styled-components';

import { Body, commonOverlineCss, H1 } from '$/components/Typography';

import { from } from './responsive';

export const fancyAnchor = css`
  &:after {
    display: block;
    content: '';
    border-bottom: solid 1px ${({ theme }) => theme.colors.grey700};
    margin-top: 4px;
    transform: scaleX(0);
    transition: transform 200ms ease-in-out;
  }
  &:hover:after {
    border-bottom: solid 1px ${({ theme }) => theme.colors.primary200};
    transform: scaleX(1);
  }
`;

export const SectionTitle = styled(H1)`
  color: ${({ theme }) => theme.colors.primary200};
  margin: 0 auto 2rem auto;
  text-align: center;
  font-family: 'Playfair Display', serif;
`;

export const SectionDescription = styled(Body)`
  text-align: center;
  margin: 1rem auto 3rem;
  max-width: 770px;
`;

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

export const Wrapper = styled.div`
  padding: 0 1rem 3rem;
  margin: auto;
  max-width: 1440px;
  width: 100%;

  ${from.mobile} {
    padding: 0 1.5rem 3rem;
  }

  ${from.tablet} {
    padding: 0 2.5rem 3rem;
  }
`;

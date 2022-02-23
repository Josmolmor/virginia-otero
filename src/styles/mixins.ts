import styled, { css } from 'styled-components';

import { commonOverlineCss, H1 } from '$/components/Typography';

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
  margin: 0 auto;
  text-align: center;
  font-family: 'Lobster Two', serif;
  font-weight: 400;
  padding: 2rem 1rem;

  ${from.tablet} {
    max-width: 80%;
  }
`;

export const SectionDescription = styled.p<{
  $align?: 'left' | 'center' | 'right';
}>`
  color: ${({ theme }) => theme.colors.grey700};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin: 1rem auto 3rem;
  max-width: 35rem;

  ${({ $align }) =>
    $align
      ? css`
          text-align: ${$align};
        `
      : css`
          ${from.mobile} {
            text-align: left;
          }
        `};
`;

export const Split = styled.div`
  width: 75%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grey200};
  margin: 4rem auto;

  ${from.mobile} {
    width: 50%;
  }
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

const commonWrapperCss = css`
  margin: auto;
  max-width: 1440px;
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  ${commonWrapperCss};
  padding: 0 1rem;

  ${from.mobile} {
    padding: 0 1.5rem;
  }

  ${from.tablet} {
    padding: 0 2.5rem;
  }
`;

export const Wrapper = styled.div`
  ${commonWrapperCss};
  padding: 0 1rem 5rem;

  ${from.mobile} {
    padding: 0 1.5rem 3rem;
  }

  ${from.tablet} {
    padding: 0 2.5rem 3rem;
  }
`;

export const FullWidthImageContainer = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

export const Highlight = styled.span`
  background: url('/images/brush-stroke-banner-5.svg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 8px 0;
`;

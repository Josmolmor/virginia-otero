import styled, { css } from 'styled-components';

import { from } from '$/styles/responsive';

const fontColor = css`
  color: ${({ theme }) => theme.colors.grey700};
`;

export const H1 = styled.h1`
  ${fontColor};
  font-weight: ${({ theme }) => theme.weights.semiBold};
  font-size: 40px;
  line-height: 48px;

  ${from.tablet} {
    font-size: 64px;
    line-height: 77px;
  }
`;

export const H2 = styled.h2`
  ${fontColor};
  color: ${({ theme }) => theme.colors.grey700};
  font-weight: ${({ theme }) => theme.weights.semiBold};
  font-size: 28px;
  line-height: 34px;

  ${from.tablet} {
    font-size: 48px;
    line-height: 57.6px;
  }
`;

export const H3 = styled.h3`
  ${fontColor};
  font-weight: ${({ theme }) => theme.weights.semiBold};
  font-size: 24px;
  line-height: 28.8px;

  ${from.tablet} {
    font-size: 36px;
    line-height: 43.2px;
  }
`;

export const H4 = styled.h4`
  ${fontColor};
  font-weight: ${({ theme }) => theme.weights.semiBold};
  font-size: 16px;
  line-height: 19.2px;
`;

export const commonBodyCss = css`
  ${fontColor};
  font-size: 14px;
  line-height: 24px;
  margin: 0 auto 0;
  &:not(:last-of-type) {
    margin-bottom: 0.75rem;
  }
`;

export const List = styled.ul`
  ${commonBodyCss};
  list-style: none; /* Remove default bullets */

  > li::before {
    content: '\\2022'; /* Add content: \\2022 is the CSS Code/unicode for a bullet */
    color: ${({ theme }) => theme.colors.primary300}; /* Change the color */
    font-weight: bold; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -1em; /* Also needed for space (tweak if needed) */
  }
`;

export const OrderedList = styled.ol`
  ${commonBodyCss};
`;

export const Body = styled.p`
  ${commonBodyCss};
`;

export const BodyMedium = styled.p`
  ${commonBodyCss};
`;

export const BodySemi = styled.p`
  ${commonBodyCss};
  font-weight: ${({ theme }) => theme.weights.semiBold};
`;

const commonSmallCss = css`
  ${fontColor};
  font-size: 12px;
  line-height: 22px;
  margin: 0 auto 0;
  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

export const Small = styled.p`
  ${commonSmallCss};
`;

export const SmallMedium = styled.p`
  ${commonSmallCss};
`;

export const SmallSemi = styled.p`
  ${commonSmallCss};
  font-weight: ${({ theme }) => theme.weights.semiBold};
`;

export const Caption = styled.p`
  ${fontColor};
  font-size: 0.75rem;
  line-height: 0.9375rem;
`;

export const commonOverlineCss = css`
  ${fontColor};
  font-size: 0.75rem;
  line-height: 0.9375rem;
  /* identical to box height */
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const Overline = styled.p`
  ${commonOverlineCss};
`;

export const commonOverlineCssBold = css`
  ${commonOverlineCss};
  font-weight: ${({ theme }) => theme.weights.bold};
`;

export const OverlineBold = styled.p`
  ${commonOverlineCssBold};
`;

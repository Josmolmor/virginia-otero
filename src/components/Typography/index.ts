import styled, { css } from 'styled-components';

export const H1 = styled.h1`
  font-weight: ${({ theme }) => theme.weights.semiBold};
  font-size: 3rem;
  line-height: 120%;
`;

export const H2 = styled.h2`
  font-weight: ${({ theme }) => theme.weights.semiBold};
  font-size: 2.25rem;
  line-height: 120%;
`;

export const H3 = styled.h3`
  font-weight: ${({ theme }) => theme.weights.semiBold};
  font-size: 1.5rem;
  line-height: 140%;
`;

export const H4 = styled.h4`
  font-family: 'Playfair Display', serif;
  font-weight: ${({ theme }) => theme.weights.semiBold};
  font-size: 1.125rem;
  line-height: 1.375rem;
`;

export const commonBodyCss = css`
  font-size: 1rem;
  line-height: 140%;
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
  font-size: 0.875rem;
  line-height: 1.25rem;
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
  font-size: 0.75rem;
  line-height: 0.9375rem;
`;

export const commonOverlineCss = css`
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

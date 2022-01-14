import styled, { css } from 'styled-components';

import { from } from '$/styles/responsive';

import LogoIcon from '../Icons/Logo';

export const Container = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary600};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding: 0.5625rem 1rem;

  ${from.mobile} {
    padding: 0.75rem 1.5rem;
  }
`;

const commonLogoCss = css`
  color: ${({ theme }) => theme.colors.secondary300};
  flex-shrink: 0;
`;

export const Link = styled.a`
  display: inline-block;
`;

export const Logo = styled(LogoIcon)`
  ${commonLogoCss};
  display: none;

  ${from.mobile} {
    display: block;
  }
`;

export const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-right: auto;

  ${from.mobile} {
    margin-right: 1.5rem;
  }

  ${from.tablet} {
    flex: 1;
  }
`;

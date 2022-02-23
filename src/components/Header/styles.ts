import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { DarkBottomBranch, WordMark } from '$/components/Icons';
import DefaultLink from '$/components/Link';
import { fancyAnchor, HeaderWrapper as DefaultWrapper } from '$/styles/mixins';
import { from } from '$/styles/responsive';

import Branch from '../Icons/Branch';

export const Wrapper = styled(DefaultWrapper)`
  align-items: center;
  display: flex;
`;

export const Container = styled.header`
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding: 1rem 0;
  position: relative;
`;

export const LogoLink = styled(DefaultLink)`
  display: inline-block;
`;

export const IgLink = styled(DefaultLink)`
  display: block;
  transition: color 0.25s ease;

  :hover {
    color: ${({ theme }) => theme.colors.primary200};
  }
`;

export const Link = styled(DefaultLink)`
  display: inline-block;
  font-size: 32px;
  transition: color 0.25s ease;
  :hover {
    color: ${({ theme }) => theme.colors.primary200};
  }

  ${from.tablet} {
    ${fancyAnchor};
    font-size: inherit;
  }
`;

export const Logo = styled(WordMark)`
  color: ${({ theme }) => theme.colors.primary300};
  flex-shrink: 0;
  height: 3rem;
  width: auto;
  transition: color 0.25s ease;

  ${from.tablet} {
    height: 4rem;
  }
`;

export const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  margin-right: auto;
`;

export const LinksContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  position: fixed;
  inset: 0;
  top: 84px;
  padding: 1.5rem;
  z-index: 1;

  ${from.tablet} {
    align-items: center;
    padding: 0;
    background-color: transparent;
    flex-direction: row;
    gap: 2rem;
    position: initial;
  }
`;

const commonBurgerCss = css`
  color: ${({ theme }) => theme.colors.grey700};
  cursor: pointer;
`;

export const BurgerIcon = styled(motion.i).attrs(() => ({
  initial: { rotate: 90 },
  exit: { rotate: 0 },
  animate: { rotate: 0 },
}))`
  ${commonBurgerCss};
`;

export const CloseIcon = styled(motion.i).attrs(() => ({
  initial: { rotate: -90 },
  exit: { rotate: 0 },
  animate: { rotate: 0 },
}))`
  ${commonBurgerCss};
`;

export const BranchVector = styled(Branch)`
  position: absolute;
  right: 0;
  top: 0;
  height: auto;
  pointer-events: none;
  display: none;

  ${from.tablet} {
    display: block;
    opacity: 0.5;
  }
`;

export const DarkBranchVector = styled(DarkBottomBranch)`
  position: fixed;
  right: 0;
  bottom: 0;
  height: 30%;
  width: auto;
  pointer-events: none;
  display: block;
  opacity: 0.75;
  z-index: -1;

  ${from.tablet} {
    display: none;
  }
`;

import styled from 'styled-components';

import { LogoIcon } from '$/components/Icons';
import DefaultLink from '$/components/Link';
import { fancyAnchor, Wrapper as DefaultWrapper } from '$/styles/mixins';
import { from } from '$/styles/responsive';

export const Wrapper = styled(DefaultWrapper)`
  align-items: center;
  display: flex;
  position: relative;
`;

export const Container = styled.header`
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding: 0.75rem 0;
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
  ${fancyAnchor};
  transition: color 0.25s ease;

  :hover {
    color: ${({ theme }) => theme.colors.primary200};
  }
`;

export const Logo = styled(LogoIcon)`
  color: ${({ theme }) => theme.colors.grey700};
  flex-shrink: 0;
  height: 3rem;
  width: auto;
  transition: color 0.25s ease;

  :hover {
    color: ${({ theme }) => theme.colors.primary200};
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
  box-shadow: 0 6px 12px -6px rgba(24, 23, 28, 0.12),
    0px 8px 24px -4px rgba(24, 23, 28, 0.08);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  right: 1.5rem;
  top: 3rem;
  padding: 0.75rem 1.5rem;
  z-index: 1;

  > * {
    padding-bottom: 0.5rem;
    :not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey100};
    }
  }

  ${from.tablet} {
    align-items: center;
    padding: 0;
    box-shadow: none;
    background-color: transparent;
    flex-direction: row;
    gap: 2rem;
    position: initial;

    > * {
      padding-bottom: 0;
      :not(:last-child) {
        border-bottom: none;
      }
    }
  }
`;

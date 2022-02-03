import styled from 'styled-components';

import { LogoIcon } from '$/components/Icons';
import DefaultLink from '$/components/Link';
import { fancyAnchor, Wrapper as DefaultWrapper } from '$/styles/mixins';

export const Wrapper = styled(DefaultWrapper)`
  align-items: center;
  display: flex;
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
  align-items: center;
  display: flex;
  gap: 2rem;
`;

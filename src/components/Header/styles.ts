import styled from 'styled-components';

import { LogoIcon } from '$/components/Icons';
import DefaultLink from '$/components/Link';
import { Wrapper as DefaultWrapper } from '$/styles/mixins';

export const Wrapper = styled(DefaultWrapper)`
  align-items: center;
  display: flex;
`;

export const Container = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary200};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding: 0.75rem 0;
`;

export const Link = styled(DefaultLink)`
  display: inline-block;
`;

export const Logo = styled(LogoIcon)`
  color: ${({ theme }) => theme.colors.white};
  flex-shrink: 0;
  height: 3rem;
  width: auto;
`;

export const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  margin-right: auto;
`;

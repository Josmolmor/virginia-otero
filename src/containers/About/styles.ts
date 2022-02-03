import styled, { css } from 'styled-components';

import { Body } from '$/components/Typography';
import addAlpha from '$/utils/addAlpha';

export const Container = styled.div``;

export const Content = styled.div`
  background-color: ${({ theme }) => addAlpha(theme.colors.primary200, 0.05)};
  border: 1px solid ${({ theme }) => theme.colors.grey100};
  border-radius: 1rem;
  margin-top: 3rem;
  padding: 2rem;
`;

export const VideoContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

export const Text = styled(Body)`
  line-height: 1.25rem;
`;

export const Image = styled.div<{ $src: string }>`
  border-radius: 50%;
  height: 250px;
  width: 250px;
  object-fit: cover;
  margin: auto;

  ${({ $src }) =>
    $src &&
    css`
      background-image: url(${$src});
      background-position: 100%;
      background-repeat: no-repeat;
      background-size: cover;
    `};
`;

export const LoadingContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

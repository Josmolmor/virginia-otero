import styled from 'styled-components';

import { Body, H4, Overline } from '../Typography';

export const Container = styled.div``;

export const Title = styled(H4)`
  margin: 0 0 0.25rem 0;
`;

export const Name = styled(Overline)`
  margin: 0 0 0.5rem 0;
`;

export const Message = styled(Body)`
  margin: 0;
`;

export const Content = styled.div`
  align-items: flex-end;
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`;

export const User = styled.div``;

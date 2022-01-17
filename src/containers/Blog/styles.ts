import styled from 'styled-components';

import { H1 } from '$/components/Typography';

export const Container = styled.div``;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
  flex-grow: 1;
`;

export const Title = styled(H1)``;

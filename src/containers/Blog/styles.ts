import styled from 'styled-components';

import { SectionDescription } from '$/styles/mixins';

export const Container = styled.div``;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
  flex-grow: 1;
`;

export const Description = styled(SectionDescription)``;

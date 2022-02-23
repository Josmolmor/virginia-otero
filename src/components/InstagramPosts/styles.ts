import styled from 'styled-components';

import { from } from '$/styles/responsive';

export const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-content: center;
  width: 100%;
  grid-template-columns: 1fr;

  ${from.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
  }
`;

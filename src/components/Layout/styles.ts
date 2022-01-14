import styled from 'styled-components';

import { from } from '$/styles/responsive';

const HEADER_HEIGHT = {
  mobile: '3.375rem',
  desktop: '3.75rem',
};

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Main = styled.main`
  display: flex;
  height: calc(100% - ${HEADER_HEIGHT.mobile});
  position: relative;

  ${from.mobile} {
    height: calc(100% - ${HEADER_HEIGHT.desktop});
  }
`;

export const Section = styled.section`
  overflow: auto;
  width: 100%;
`;

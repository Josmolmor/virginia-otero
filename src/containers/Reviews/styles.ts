import styled from 'styled-components';

import { SectionTitle as DefaultSectionTitle } from '$/styles/mixins';
import { from } from '$/styles/responsive';

export const Container = styled.div``;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 3rem;
`;

export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: space-between;
`;

export const Section = styled.div`
  flex-basis: 100%;

  ${from.laptop} {
    flex-basis: 47%;
  }
`;

export const SectionTitle = styled(DefaultSectionTitle)`
  ${from.laptop} {
    margin: 0 auto 4rem auto;
  }
`;

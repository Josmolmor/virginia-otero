import styled from 'styled-components';

import { Overline } from '$/components/Typography';
import { SectionTitle as DefaultSectionTitle } from '$/styles/mixins';
import { from } from '$/styles/responsive';

export const Container = styled.div``;

export const LoadingContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div``;

export const Date = styled(Overline)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const FullWidthImage = styled.img`
  max-width: 100%;
  width: 100%;
  max-height: 20rem;
  object-fit: cover;
`;

export const Redacted = styled.div``;

export const SectionTitle = styled(DefaultSectionTitle)`
  padding: 5rem 1rem;

  ${from.tablet} {
    padding: 5rem 1rem;
  }
`;

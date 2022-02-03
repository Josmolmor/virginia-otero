import styled from 'styled-components';

import { Body } from '$/components/Typography';
import { SectionDescription } from '$/styles/mixins';

export const Container = styled.div``;

export const Content = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
  gap: 1.25rem;
  flex-grow: 1;
  margin-bottom: 3rem;
  padding: 0;
`;

export const MainText = styled(SectionDescription)``;

export const Service = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.grey100};
  border-radius: 0.5rem;
  list-style: none;
  padding: 1rem 1rem 1.25rem 1.5rem;
  transition: box-shadow 0.15s ease;

  :hover {
    box-shadow: 0 10px 20px rgba(35, 43, 56, 0.1);
  }
`;

export const Text = styled(Body)`
  margin: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

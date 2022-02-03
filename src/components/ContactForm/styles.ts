import styled from 'styled-components';

import DefaultButton from '$/components/Button';

import { Body } from '../Typography';

export const Container = styled.div`
  display: flex;
`;

export const Form = styled.form`
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin: auto;
  max-width: 30rem;
  padding: 2rem;
  width: 100%;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.grey700};
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  border-radius: 0.25rem;
  padding: 0.5rem;
`;

export const TextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  border-radius: 0.25rem;
  padding: 0.5rem;
`;

export const Button = styled(DefaultButton)``;

export const Outcome = styled(Body)`
  text-align: center;
`;

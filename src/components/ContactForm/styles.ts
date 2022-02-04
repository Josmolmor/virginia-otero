import styled, { css } from 'styled-components';

import DefaultButton from '$/components/Button';
import { from } from '$/styles/responsive';

import { Body, H3 } from '../Typography';

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
  padding: 1rem;
  width: 100%;

  ${from.mobile} {
    padding: 2rem;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.grey700};
`;

const commonInputCss = css`
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  border-radius: 0.5rem;
  padding: 1rem;
  transition: border 0.25s ease;

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.grey400};
  }
`;

export const Input = styled.input`
  ${commonInputCss};
`;

export const TextArea = styled.textarea`
  ${commonInputCss};
  min-height: 10rem;
  resize: vertical;
`;

export const Button = styled(DefaultButton)`
  margin-top: 1rem;
`;

export const Outcome = styled(Body)`
  text-align: center;

  i {
    color: ${({ theme }) => theme.colors.pistachio};
  }
`;

export const ThankYouLabel = styled(H3)`
  margin: 0.5rem auto 2rem;
`;

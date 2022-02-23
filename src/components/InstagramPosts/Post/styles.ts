import styled from 'styled-components';

import Button from '$/components/Button';

export const Caption = styled.p`
  border-radius: 8px;
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  white-space: break-spaces;
`;

export const Container = styled.div`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.grey100};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Image = styled.img`
  border-radius: 8px;
  object-fit: cover;
  max-width: 350px;
  max-height: 350px;
  height: 100%;
  width: 100%;
`;

export const Video = styled.video`
  border-radius: 8px;
  object-fit: cover;
  max-width: 350px;
  max-height: 350px;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 350px;
  max-height: 350px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem 1rem 2rem;
  gap: 2rem;
`;

export const Icon = styled.i``;

export const ButtonIcon = styled(Button)`
  background-color: rgba(0, 0, 0, 0.25);
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;
  padding: 0.75rem;
  transition: background-color 0.25s ease;

  :focus,
  :focus-within {
    outline: none;
    background-color: rgba(0, 0, 0, 0.75);
  }

  :not(:disabled):hover {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

import styled from 'styled-components';
import { FC, useState } from 'react';
import { buttonCss } from 'components/contact-form';
import popupCenter from 'utils/popupCenter';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 560px;
  width: 100%;
`;

const CommentArea = styled.textarea`
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  height: 160px;
  padding: 16px 20px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  ${buttonCss};
  margin: 20px 0 0 auto;
  width: auto;
  padding: 0 20px;
`;

type Props = {
  enabled?: boolean;
  onClick?: (content: string) => void;
  className?: string;
};

const CommentTextAreaInput: FC<Props> = ({ enabled, onClick, className }) => {
  const [content, setContent] = useState('');

  const onButtonClick = () => {
    if (enabled) {
      setContent('');
      return onClick(content);
    }
    return popupCenter('/google-sign-in', 'Sample Sign In');
  };

  return (
    <Container className={className}>
      <CommentArea
        disabled={!enabled}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder='Escribe tu comentario aquí...'
      />
      <Button type='submit' onClick={onButtonClick}>
        {enabled ? 'Comentar' : 'Inicia sesión para dejar tu comentario'}
      </Button>
    </Container>
  );
};

export default CommentTextAreaInput;

import styled from 'styled-components';
import { FC } from 'react';

const Button = styled.button`
  cursor: pointer;
  border-radius: 22px;
`;

type Props = {
  label?: string;
  className?: string;
};

const ButtonComponent: FC<Props> = ({ label = 'Contacto', className }) => {
  return <Button className={className}>{label}</Button>;
};

export default ButtonComponent;

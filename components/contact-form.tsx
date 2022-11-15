import React, { FC, ReactNode } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled, { css } from 'styled-components';

type Props = {
  children: ReactNode;
  className?: string;
};

const Form = styled.form`
  box-shadow: 0 15px 35px 0 rgba(60, 66, 87, 0.08),
    0 5px 15px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  padding: 56px 48px;
  border-radius: 4px;
`;

const Label = styled.label`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 12px;
`;

const borders = css`
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px;
  border-radius: 4px;
  min-height: 44px;
  margin-bottom: 32px;
  padding: 8px 12px;
`;

const TextArea = styled.textarea`
  ${borders};
`;

const Input = styled.input`
  ${borders};
`;

export const buttonCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
  width: 100%;
  flex: 1 1 auto;
  font-size: 16px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.brick};
  min-height: 44px;
  border-radius: 4px;
  color: white;
  transition-property: color;
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:focus-within,
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBrick};
  }
`;

export const Button = styled.button`
  ${buttonCss};
`;

const ContactForm: FC<Props> = ({ children, className }) => {
  const [state, handleSubmit] = useForm('xvovzplq');

  if (state.succeeded) {
    return (
      <p>
        ¡Gracias por el mensaje!
        <br />
        Me pondré en contacto contigo lo antes posible si es necesario
      </p>
    );
  }

  return (
    <Form onSubmit={handleSubmit} className={className}>
      <Label htmlFor='email'>Correo electrónico</Label>
      <Input required id='email' type='email' name='email' />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <Label htmlFor='message'>Mensaje</Label>
      <TextArea required id='message' name='message' />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <Button type='submit' disabled={state.submitting}>
        Submit
      </Button>
      {children}
    </Form>
  );
};

export default ContactForm;

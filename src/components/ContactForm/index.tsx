import { useForm, ValidationError } from '@formspree/react';
import type { FC } from 'react';

import {
  Button,
  Container,
  Form,
  Input,
  Label,
  Outcome,
  TextArea,
  ThankYouLabel,
} from './styles';
import type Props from './types';

const ContactForm: FC<Props> = ({ className, mode = 'lead' }) => {
  const [state, handleSubmit] = useForm('mgedayvv');
  if (state.succeeded) {
    return (
      <Outcome>
        <i className="ri-chat-check-line ri-3x" />
        <ThankYouLabel>¡Gracias!</ThankYouLabel>
        Mensaje recibido. Responderé lo antes posible.{' '}
      </Outcome>
    );
  }

  return (
    <Container className={className}>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Nombre</Label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Nombre"
          required
        />
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Correo eléctronico"
          required
        />
        {mode === 'lead' && (
          <>
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              id="phone"
              type="phone"
              name="phone"
              placeholder="Teléfono"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </>
        )}
        <Label htmlFor="message">Mensaje</Label>
        <TextArea
          id="message"
          name="message"
          placeholder="Escribe tu mensaje aquí"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button type="submit" disabled={state.submitting}>
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;

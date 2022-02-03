import { useForm, ValidationError } from '@formspree/react';

import {
  Button,
  Container,
  Form,
  Input,
  Label,
  Outcome,
  TextArea,
} from './styles';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mgedayvv');
  if (state.succeeded) {
    return (
      <Outcome>¡Gracias por escribirme! Responderé lo antes posible.</Outcome>
    );
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">Correo electrónico</Label>
        <Input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <Label htmlFor="message">Mensaje</Label>
        <TextArea id="message" name="message" />
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

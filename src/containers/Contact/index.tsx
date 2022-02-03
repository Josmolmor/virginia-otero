import ContactForm from '$/components/ContactForm';
import { SectionDescription, SectionTitle } from '$/styles/mixins';

import { Container } from './styles';

const Contact = () => (
  <Container>
    <SectionTitle>Contacto</SectionTitle>
    <SectionDescription>
      ¿Quieres saber más? Escribeme y cuéntame un poco más sobre ti.
    </SectionDescription>
    <ContactForm />
  </Container>
);

export default Contact;

import ContactForm from '$/components/ContactForm';
import { SectionTitle } from '$/styles/mixins';

import { Container } from './styles';

const Contact = () => (
  <Container>
    <SectionTitle>Contacto</SectionTitle>
    <ContactForm />
  </Container>
);

export default Contact;

import { NextSeo } from 'next-seo';

import Contact from '$/containers/Contact';

function ContactPage() {
  return (
    <>
      <NextSeo title="Contacto" />
      <Contact />
    </>
  );
}

export default ContactPage;

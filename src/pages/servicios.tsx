import { NextSeo } from 'next-seo';

import Services from '$/containers/Services';

function ServicesPage() {
  return (
    <>
      <NextSeo title="Servicios" />
      <Services />
    </>
  );
}

export default ServicesPage;

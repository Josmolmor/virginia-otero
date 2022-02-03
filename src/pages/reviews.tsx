import { NextSeo } from 'next-seo';

import Reviews from '$/containers/Reviews';

function ServicesPage() {
  return (
    <>
      <NextSeo title="Reseñas" />
      <Reviews />
    </>
  );
}

export default ServicesPage;

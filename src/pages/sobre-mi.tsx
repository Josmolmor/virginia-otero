import { NextSeo } from 'next-seo';

import About from '$/containers/About';

function AboutMe() {
  return (
    <>
      <NextSeo title="Sobre mi" />
      <About />
    </>
  );
}

export default AboutMe;

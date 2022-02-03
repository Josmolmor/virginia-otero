import { NextSeo } from 'next-seo';

import Home from '$/containers/Home';

const Index = () => (
  <>
    <NextSeo title="Crecimiento y desarrollo personal" />
    <Home />
  </>
);

export default Index;

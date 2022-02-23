import { NextSeo } from 'next-seo';

import Blog from '$/containers/Blog';

const BlogPage = () => (
  <>
    <NextSeo title="Blog" />
    <Blog />
  </>
);

export default BlogPage;

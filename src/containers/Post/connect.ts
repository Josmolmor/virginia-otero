import { usePrismicDocumentByUID } from '@prismicio/react';

import type Props from './types';

const useConnect = (slug: Props['slug']) => {
  const [document, { state }] = usePrismicDocumentByUID('post', String(slug));
  const loading = state === 'loading';

  return { document, loading };
};

export default useConnect;

import { usePrismicDocumentByUID } from '@prismicio/react';
import type { ParsedUrlQuery } from 'querystring';

const useConnect = (query: ParsedUrlQuery) => {
  const { slug } = query;
  const [document, { state }] = usePrismicDocumentByUID('post', String(slug));
  const loading = state === 'loading';

  return { document, loading };
};

export default useConnect;

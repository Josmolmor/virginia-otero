import { useAllPrismicDocumentsByType } from '@prismicio/react';

const useConnect = () => {
  const [documents, { state }] = useAllPrismicDocumentsByType('post');
  const loading = state === 'loading';

  return { documents, loading };
};

export default useConnect;

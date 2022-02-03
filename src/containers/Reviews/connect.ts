import { useAllPrismicDocumentsByType } from '@prismicio/react';

const useConnect = () => {
  const [documents, { state }] = useAllPrismicDocumentsByType('review');
  const loading = state === 'loading';

  return { documents, loading };
};

export default useConnect;

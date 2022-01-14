import {
  useAllPrismicDocumentsByType,
  usePrismicDocuments,
} from '@prismicio/react';

const Index = () => {
  const [documents, { state, error }] = useAllPrismicDocumentsByType('post');
  console.log(state);

  return (
    <div>
      <pre>{JSON.stringify(documents, null, 4)}</pre>
    </div>
  );
};

export default Index;

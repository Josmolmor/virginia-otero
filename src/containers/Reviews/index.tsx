import ContactForm from '$/components/ContactForm';
import ReviewCard from '$/components/ReviewCard';
import Spinner from '$/components/Spinner';
import { SectionDescription, SectionTitle, Split } from '$/styles/mixins';

import useConnect from './connect';
import { Container, Content } from './styles';

const Reviews = () => {
  const { documents, loading } = useConnect();

  return (
    <Container>
      <SectionTitle>Reseñas</SectionTitle>
      <Content>
        {loading ? (
          <Spinner />
        ) : (
          documents?.map((document, id) => {
            const { title, name, message } = document.data;
            return (
              <ReviewCard
                key={id}
                title={String(title)}
                name={String(name)}
                message={String(message)}
              />
            );
          })
        )}
      </Content>
      <Split />
      <SectionDescription>
        Si quieres compartir cómo viviste tu proceso de crecimiento personal
        junto a mí, puedes dejar tu reseña para ayudar a otras personas a dar
        este paso. Para tener en cuenta tu privacidad, no olvides comentarme
        cómo quieres que aparezca tu nombre. (Iniciales, completo, Inicial y
        apellido...)
      </SectionDescription>
      <ContactForm mode="review" />
    </Container>
  );
};

export default Reviews;

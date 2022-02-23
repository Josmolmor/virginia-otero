import { useRouter } from 'next/router';

import Button from '$/components/Button';
import { SectionTitle } from '$/styles/mixins';

import {
  ButtonContainer,
  Container,
  Content,
  CtaText,
  Icon,
  MainText,
  Service,
  Text,
} from './styles';

const Services = () => {
  const { push } = useRouter();

  return (
    <Container>
      <SectionTitle>Servicios</SectionTitle>
      <MainText>
        Entre otros beneficios enfocados al desarrollo de la mejor versión de ti
        mismo/a y de tus metas, en las sesiones de crecimiento y desarrollo
        personal puedes aprender a…
      </MainText>
      <Content>
        <Service>
          <Icon className="ri-user-voice-line ri-2x" />
          <Text>Mejorar mi comunicación conmigo misma/o y con los demás.</Text>
        </Service>
        <Service>
          <Icon className="ri-timer-flash-line ri-2x" />
          <Text>Gestionar eficazmente mi tiempo y energía.</Text>
        </Service>
        <Service>
          <Icon className="ri-user-search-line ri-2x" />
          <Text>Conocer mis debilidades y fortalezas personales.</Text>
        </Service>
        <Service>
          <Icon className="ri-guide-line ri-2x" />
          <Text>Trazar un plan de acción para conseguir mis metas.</Text>
        </Service>
        <Service>
          <Icon className="ri-seedling-line ri-2x" />
          <Text>Desarrollar habilidades emocionales.</Text>
        </Service>
        <Service>
          <Icon className="ri-service-line ri-2x" />
          <Text>Aprender a cuidar mis relaciones.</Text>
        </Service>
        <Service>
          <Icon className="ri-search-eye-line ri-2x" />
          <Text>Descubrir qué quiero, cómo lo quiero y cuando lo quiero.</Text>
        </Service>
        <Service>
          <Icon className="ri-sort-desc ri-2x" />
          <Text>Identificar mis prioridades y aprender a darles sitio.</Text>
        </Service>
      </Content>
      <ButtonContainer>
        <CtaText>
          ¿Te sientes identificada/o con algo que has leido en lo que puedes y/o
          quieres mejorar?
        </CtaText>
        <Button onClick={() => push('/contacto')}>¡Hablemos!</Button>
      </ButtonContainer>
    </Container>
  );
};
export default Services;

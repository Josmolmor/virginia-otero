import { useEffect, useState } from 'react';

import Button from '$/components/Button';

import useConnect from './connect';
import {
  BgImage,
  BlogContent,
  BlogSection,
  Container,
  DarkBranchVector,
  Highlighted,
  Image,
  Info,
  InstagramSection,
  InstagramTitle,
  Posts,
  Title,
} from './styles';

const Home = () => {
  const [igPosts, setIgPosts] = useState([]);
  const { posts } = useConnect();
  useEffect(() => {
    console.log('=>', posts?.data);
    if (posts && posts.data) {
      setIgPosts(posts.data);
    }
  }, [posts]);

  return (
    <Container>
      <BlogSection>
        <BgImage src="/images/grainy-min.jpg" />
        <BlogContent>
          <Info>
            <Title>¿Quieres aprender tips de psicología en 3 minutos?</Title>
            <Button href="/blog">Ir al blog</Button>
          </Info>
          <Image src="/images/blog-heading-min2.png" />
        </BlogContent>
      </BlogSection>
      <InstagramSection>
        <InstagramTitle>
          <Highlighted>Instagram</Highlighted>
        </InstagramTitle>
        <Posts posts={igPosts} />
        <DarkBranchVector />
      </InstagramSection>
    </Container>
  );
};

export default Home;

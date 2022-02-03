import { PrismicRichText } from '@prismicio/react';
import type { FC } from 'react';

import Spinner from '$/components/Spinner';
import { SectionDescription, SectionTitle, Split } from '$/styles/mixins';

import useConnect from './connect';
import { Container, Content, Date, LoadingContainer, Redacted } from './styles';
import type Props from './types';

const Post: FC<Props> = ({ query }) => {
  const { document, loading } = useConnect(query);
  const postData = document?.data;

  return (
    <Container>
      {loading ? (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      ) : (
        postData && (
          <Content>
            <SectionTitle>{postData.title[0]?.text}</SectionTitle>
            <SectionDescription>{postData.description}</SectionDescription>
            <Redacted>
              <PrismicRichText field={postData.content} />
            </Redacted>
            <Split />
            <Date>Redactado el {postData.date}</Date>
          </Content>
        )
      )}
    </Container>
  );
};

export default Post;

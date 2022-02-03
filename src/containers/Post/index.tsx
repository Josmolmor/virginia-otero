import { PrismicRichText } from '@prismicio/react';
import type { RichTextField } from '@prismicio/types';
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
        postData &&
        postData.title &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        postData.title[0] && (
          <Content>
            <PrismicRichText
              field={postData.title as RichTextField}
              components={{
                heading1: ({ children }) => (
                  <SectionTitle key="heading1">{children}</SectionTitle>
                ),
              }}
            />
            <SectionDescription>{postData.description}</SectionDescription>
            <Redacted>
              <PrismicRichText field={postData.content as RichTextField} />
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

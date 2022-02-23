import { PrismicRichText } from '@prismicio/react';
import type { RichTextField } from '@prismicio/types';
import type { FC } from 'react';

import Spinner from '$/components/Spinner';
import { FullWidthImageContainer, Split } from '$/styles/mixins';
import type { Image } from '$/types/Document';

import useConnect from './connect';
import {
  Container,
  Content,
  Date,
  FullWidthImage,
  LoadingContainer,
  Redacted,
  SectionTitle,
} from './styles';
import type Props from './types';

const Post: FC<Props> = ({ slug }) => {
  const { document, loading } = useConnect(slug);
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
            <FullWidthImageContainer>
              <FullWidthImage src={(postData?.coverImage as Image)?.url} />
              <PrismicRichText
                field={postData.title as RichTextField}
                components={{
                  heading1: ({ children }) => (
                    <SectionTitle key="heading1">{children}</SectionTitle>
                  ),
                }}
              />
            </FullWidthImageContainer>

            {/* <SectionDescription>{postData.description}</SectionDescription> */}
            <Redacted>
              <PrismicRichText field={postData.content as RichTextField} />
            </Redacted>
            <Split />
            <Date>
              <i className="ri-calendar-line" /> Redactado el {postData.date}
            </Date>
          </Content>
        )
      )}
    </Container>
  );
};

export default Post;

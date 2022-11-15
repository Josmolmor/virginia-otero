import React from 'react';
import styled from 'styled-components';

/**
 * @typedef {import("@prismicio/client").Content.InstagramPostSlice} InstagramPostSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InstagramPostSlice>} InstagramPostProps
 * @param { InstagramPostProps }
 */

const Container = styled.div`
  display: flex;
  flex: 1;
  margin: auto;
  height: 378px;
  width: 280px;

  @media (min-width: 768px) {
    height: 500px;
    width: 402px;
  }
`;

const Iframe = styled.iframe`
  border: 1px solid transparent;
  border-radius: 8px;
  box-shadow: 0 15px 35px 0 rgb(60 66 87 / 8%), 0 5px 15px 0 rgb(0 0 0 / 12%);
  margin: auto;
  height: 100%;
  width: 100%;
`;

const InstagramPost = ({ slice }) => (
  <Container>
    <Iframe src={`https://www.instagram.com/p/${slice.primary.ig_id}/embed`} />
  </Container>
);

export default InstagramPost;

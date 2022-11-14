import { SliceZone } from '@prismicio/react';
import { Content } from '@prismicio/client';

import { components } from 'slices';
import styled from 'styled-components';

type PostBodyProps = {
  slices: Content.PostDocument['data']['slices'];
};

const Container = styled.div`
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
`;

const SliceContent = styled.div`
  font-size: 1.125rem;
  line-height: 1.625;
`;

const Slices = styled(SliceZone)``;

export default function Body({ slices }: PostBodyProps) {
  return (
    <Container>
      <SliceContent>
        <Slices slices={slices} components={components} />
      </SliceContent>
    </Container>
  );
}

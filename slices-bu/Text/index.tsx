import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { Content } from '@prismicio/client';
import styled, { css } from 'styled-components';
import Anchor from 'components/anchor';
import AppearingImage from 'components/appearing-image';

type TextProps = SliceComponentProps<Content.TextSlice>;

const H2 = styled.h2`
  font-size: 1.875rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
  line-height: 1.375;
`;

const H3 = styled.h3`
  font-size: 1.75rem;
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
  line-height: 1.5;
`;

const P = styled.p`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const commonListStyles = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const OL = styled.ol`
  ${commonListStyles};
`;

const UL = styled.ol`
  ${commonListStyles};
`;

const Text = ({ slice }: TextProps) => {
  return (
    <section>
      <PrismicRichText
        field={slice.primary.text}
        components={{
          heading2: ({ children }) => <H2>{children}</H2>,
          heading3: ({ children }) => <H3>{children}</H3>,
          paragraph: ({ children }) => <P>{children}</P>,
          list: ({ children }) => <UL>{children}</UL>,
          oList: ({ children }) => <OL>{children}</OL>,
          image: ({ node, children }) => (
            <AppearingImage image={node}>{children}</AppearingImage>
          ),
          hyperlink: ({ node, children, ...rest }) => (
            <Anchor href={node.data.url} target={node.data.link_type}>
              {children}
            </Anchor>
          )
        }}
      />
    </section>
  );
};

export default Text;

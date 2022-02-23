import styled, { css } from 'styled-components';

import { DarkBottomBranch } from '$/components/Icons';
import InstagramPosts from '$/components/InstagramPosts';
import { FullWidthImageContainer, Highlight } from '$/styles/mixins';
import { from } from '$/styles/responsive';

export const Container = styled.div`
  padding: 3rem 0;
`;

export const BgImage = styled.img`
  opacity: 0.1;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BlogSection = styled(FullWidthImageContainer)`
  overflow: hidden;
  position: relative;
  background-color: #fff6e9;
`;

export const BlogContent = styled.div`
  padding: 2rem;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  gap: 1rem;
  align-items: center;

  ${from.tablet} {
    gap: 4rem;
    flex-direction: row;
  }
`;

export const InstagramSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 0;
  gap: 3rem;

  ${from.tablet} {
    justify-content: center;
  }
`;

const TitleCss = css`
  text-align: center;
  margin: 0;
  font-size: 24px;
  line-height: 28.8px;

  ${from.tablet} {
    font-size: 36px;
    line-height: 43.2px;
  }
`;

export const Title = styled.p`
  ${TitleCss};
  max-width: 30rem;
  // font-family: 'Taviraj', serif;
`;

export const Image = styled.img`
  max-width: 25rem;
  width: 100%;
  height: auto;

  ${from.laptop} {
    max-width: 30rem;
  }
`;

export const InstagramTitle = styled.p`
  color: white;
  font-family: 'Lobster Two', serif;
  ${TitleCss};
`;

export const Highlighted = styled(Highlight)`
  padding: 56px 48px 64px;
`;

export const Posts = styled(InstagramPosts)``;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const DarkBranchVector = styled(DarkBottomBranch)`
  position: absolute;
  left: 0;
  bottom: 0;
  height: auto;
  width: 100%;
  pointer-events: none;
  opacity: 0.5;
  z-index: -1;
  transform: scaleX(-1);

  ${from.mobile} {
    width: 50%;
  }

  ${from.tablet} {
    width: 33%;
  }
`;

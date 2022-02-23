import styled, { css } from 'styled-components';

import { ArrowRightIcon } from '../Icons';
import Link from '../Link';
import { Body, H4, Small } from '../Typography';

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.grey700};
  border-radius: 2px;
  height: 15rem;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  opacity: 0.5;
  transition: transform 0.5s ease;
`;

export const Content = styled.div`
  padding: 1rem 0;
`;

export const Title = styled(H4)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.75rem;
  font-family: 'Lobster Two', serif;
  font-weight: 100;
  line-height: 2rem;
  margin: 0 0 0.25rem 0;
  position: absolute;
  transition: color 0.25s ease;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
`;

const smallCss = css`
  color: ${({ theme }) => theme.colors.grey700};
  transition: color 0.25s ease;
`;

export const Description = styled(Body)`
  ${smallCss};
  margin: 0 0 1rem 0;
`;

export const ReadMoreLabel = styled(Body)`
  ${smallCss};
  margin: 0;
`;

export const ReadMore = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.grey700};
  display: flex;
  gap: 0.5rem;
  transition: color 0.25s ease;
`;

export const ArrowRight = styled(ArrowRightIcon)`
  color: ${({ theme }) => theme.colors.grey700};
  transition: color 0.25s ease, transform 0.25s ease;
`;

export const Date = styled(Small)`
  color: ${({ theme }) => theme.colors.grey600};
  display: flex;
  gap: 0.5rem;
  transition: color 0.25s ease;
  font-size: 12px;
  margin: 0 0 0.5rem 0;
  text-transform: capitalize;
`;

export const Container = styled(Link)`
  text-decoration: none;

  :hover {
    ${ArrowRight} {
      transform: translateX(5px);
    }
    ${Image} {
      transform: scale(1.05);
    }
  }
`;

import styled from 'styled-components';

import { ArrowRightIcon } from '../Icons';
import Link from '../Link';
import { Body, H4, Small } from '../Typography';

export const ImageContainer = styled.div`
  height: 15rem;
  overflow: hidden;
`;

export const Image = styled.img`
  border-radius: 2px;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  padding: 1.25rem 1.5rem;
`;

export const Title = styled(H4)`
  color: ${({ theme }) => theme.colors.grey700};
  font-size: 1.5rem;
  font-family: 'Lobster', serif;
  font-weight: 100;
  line-height: 2rem;
  margin: 0 0 0.25rem 0;
  transition: color 0.25s ease;
`;

export const Description = styled(Body)`
  color: ${({ theme }) => theme.colors.grey700};
  transition: color 0.25s ease;
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
  transition: color 0.25s ease;
  margin: 0 0 1.25rem 0;
`;

export const Container = styled(Link)`
  text-decoration: none;

  :hover {
    ${Title},
    ${Description},
    ${ReadMore},
    ${Date},
    ${ArrowRight} {
      color: ${({ theme }) => theme.colors.primary200};
    }
    ${ArrowRight} {
      transform: translateX(5px);
    }
  }
`;

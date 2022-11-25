import styled from 'styled-components';
import { FC, ReactNode } from 'react';

type PostTitleProps = {
  children: ReactNode;
  className?: string;
};

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.darkBlue};
  @media (min-width: 1024px) {
    font-size: 6.25rem;
  }

  @media (min-width: 768px) {
    font-size: 4rem;
    line-height: 1;
    margin-bottom: 1rem;
  }

  font-family: 'Diamond Bridge', 'Great Sailor', sans-serif;
  text-shadow: 0px 0px white;
  letter-spacing: 1.5px;
  font-size: 2.5rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  font-weight: 700;
`;

const Title: FC<PostTitleProps> = ({ children, className }: PostTitleProps) => (
  <H1 className={className}>{children}</H1>
);

export default Title;

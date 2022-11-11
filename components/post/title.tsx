import styled from 'styled-components';

type PostTitleProps = {
  children: React.ReactNode;
};

const H1 = styled.h1`
  @media (min-width: 1024px) {
    font-size: 6.25rem;
  }

  @media (min-width: 768px) {
    font-size: 4.5rem;
    text-align: left;
    line-height: 1;
  }

  letter-spacing: -0.04em;
  font-size: 2.75rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
  line-height: 1.2;
  font-weight: 700;
`;

export default function Title({ children }: PostTitleProps) {
  return <H1>{children}</H1>;
}

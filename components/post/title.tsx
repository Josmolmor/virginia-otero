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
    margin-bottom: 1rem;
  }

  letter-spacing: -0.04em;
  font-size: 2.75rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  font-weight: 700;
`;

export default function Title({ children, ...rest }: PostTitleProps) {
  return <H1 {...rest}>{children}</H1>;
}

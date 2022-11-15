import styled from 'styled-components';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  margin-top: 4rem;
  margin-bottom: 5rem;
`;

export default function ContainerComponent({ children }: ContainerProps) {
  return <Container>{children}</Container>;
}

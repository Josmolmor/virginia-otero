import styled from 'styled-components';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    margin-top: 4rem;
  }
`;

export default function ContainerComponent({
  children,
  className
}: ContainerProps) {
  return <Container className={className}>{children}</Container>;
}

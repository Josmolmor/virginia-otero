import styled from 'styled-components';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = styled.div`
  margin-top: 4rem;
  margin-bottom: 5rem;
`;

export default function ContainerComponent({
  children,
  className
}: ContainerProps) {
  return <Container className={className}>{children}</Container>;
}

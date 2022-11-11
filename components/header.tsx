import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 12px;
`;

const LinkEl = styled(Link)`
  text-decoration: none;
`;

export default function Header() {
  return (
    <Container>
      Logo
      <Links>
        <li>
          <LinkEl href='/'>Home</LinkEl>
        </li>
        <li>
          <LinkEl href='/posts'>Blog</LinkEl>
        </li>
      </Links>
    </Container>
  );
}

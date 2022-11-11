import styled from 'styled-components';

const HR = styled.hr`
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  margin-top: 7rem;
  margin-bottom: 6rem;
  border-color: #eaeaea;
  border-top-width: 1px;
`;

export default function SectionSeparator() {
  return <HR />;
}

import styled from 'styled-components';
import { FC } from 'react';

type Props = {
  title: string;
  url: string;
  types: string[];
  className?: string;
  children?: React.ReactNode;
};

const Container = styled.div`
  border-radius: 8px;
  padding: 24px;
  gap: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 280px;
  margin: 4rem auto 0;
  background-color: rgba(0 0 0 / 0.025);
  background-image: radial-gradient(currentColor 0.01px, transparent 0.45px);
  background-size: calc(12 * 1px) calc(10 * 1px);
`;

const Text = styled.p`
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 28px;
`;

const A = styled.a``;

const Icon = styled.i`
  cursor: pointer;
  transition-property: color;
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    color: ${({ theme }) => theme.colors.brick};
  }
`;

const ShareSocials: FC<Props> = ({
  title,
  url,
  types,
  className,
  children
}) => {
  const handleHref = (network: string) => {
    const defaultUrl = `https://www.virginiaotero.es${url}`;
    const text = `Lee este artículo de Virginia Otero, titulado ${title}`;

    switch (network) {
      case 'twitter':
        return `https://twitter.com/share?text=${text}&url=${defaultUrl}&hashtags=virginiaotero,psicologia,crecimientopersonal,desarrollopersonal`;
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?t=${text}&u=${defaultUrl}`;
      case 'telegram':
        return `https://t.me/share/url?url=${defaultUrl}&text=${text}`;
      case 'whatsapp':
        return `whatsapp://send?text=${text}: ${defaultUrl}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${defaultUrl}`;
    }
  };

  return (
    <Container className={className}>
      <Text>¡Comparte este artículo en tus redes sociales!</Text>
      <Content>
        {types.map((value) => {
          return (
            <A
              href={handleHref(value)}
              key={value}
              target='_blank'
              onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
              title={`Compartir en ${
                value.charAt(0).toUpperCase() + value.slice(1)
              }`}
            >
              <Icon className={`ri-${value}-fill`}></Icon>
            </A>
          );
        })}
        {children}
      </Content>
    </Container>
  );
};

export default ShareSocials;

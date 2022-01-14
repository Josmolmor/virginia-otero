export function isInternalUrl(link: string) {
  return (
    !/https?:\/\/.+/.test(link) &&
    !link.startsWith('mailto:') &&
    !link.startsWith('tel:') &&
    !link.startsWith('#')
  );
}

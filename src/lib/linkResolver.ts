export function linkResolver(document: { type: string; uid?: string }) {
  if (document.type === 'post') {
    return '/blog/' + document.uid;
  }

  return '/';
}

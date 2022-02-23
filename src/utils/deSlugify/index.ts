function deSlugify(slug: string): string {
  const replaced = slug.replace('-', ' ');
  return replaced.charAt(0).toUpperCase() + replaced.slice(1);
}

export default deSlugify;

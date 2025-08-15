export function generateRobotsMeta(params?: { noindex?: boolean; nofollow?: boolean }) {
  const { noindex = false, nofollow = false } = params || {};
  
  const directives = [];
  
  if (!noindex && !nofollow) {
    return 'index, follow';
  }
  
  directives.push(noindex ? 'noindex' : 'index');
  directives.push(nofollow ? 'nofollow' : 'follow');
  
  return directives.join(', ');
}

export function generateCanonicalUrl(path: string): string {
  const baseUrl = 'https://www.feriadosenchile.com';
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}
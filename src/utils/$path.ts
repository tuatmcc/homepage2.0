const buildSuffix = (url?: {query?: Record<string, string>, hash?: string}) => {
  const query = url?.query;
  const hash = url?.hash;
  if (!query && !hash) return '';
  const search = query ? `?${new URLSearchParams(query)}` : '';
  return `${search}${hash ? `#${hash}` : ''}`;
};

export const pagesPath = {
  "about": {
    $url: (url?: { hash?: string }) => ({ pathname: '/about' as const, hash: url?.hash, path: `/about${buildSuffix(url)}` })
  },
  "blog": {
    _slug: (slug: string[]) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/blog/[...slug]' as const, query: { slug }, hash: url?.hash, path: `/blog/${slug?.join('/')}${buildSuffix(url)}` })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/blog' as const, hash: url?.hash, path: `/blog${buildSuffix(url)}` })
  },
  "news": {
    _slug: (slug: string[]) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/news/[...slug]' as const, query: { slug }, hash: url?.hash, path: `/news/${slug?.join('/')}${buildSuffix(url)}` })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/news' as const, hash: url?.hash, path: `/news${buildSuffix(url)}` })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash, path: `/${buildSuffix(url)}` })
};

export type PagesPath = typeof pagesPath;

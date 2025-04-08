type Route = {
  path: string;
  label: string;
};

/** ナビゲーションに使用するパスリスト */
export const navigationRoutes: Route[] = [
  { label: 'Home', path: '/' },
  { label: 'AboutUs', path: '/about' },
  { label: 'News', path: '/news' },
  { label: 'Blog', path: 'blog' },
];

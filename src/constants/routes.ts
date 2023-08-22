type Route = {
  path: string;
  label: string;
};

export const routes: { [x: string]: Route } = {
  home: { path: '/', label: 'Home' },
  about: { path: '/about', label: 'AboutUs' },
  news: { path: '/news', label: 'News' },
  blog: { path: '/blog', label: 'Blog' },
};

/** ナビゲーションに使用するパスリスト */
export const baseRouteList: Route[] = [
  routes.home,
  routes.about,
  routes.news,
  routes.blog,
];

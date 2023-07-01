type Route = {
  path: string;
  label: string;
};

export const ROUTES: { [x: string]: Route } = {
  HOME: { path: '/', label: 'Home' },
  ABOUT: { path: '/about', label: 'AboutUs' },
  NEWS: { path: '/news', label: 'News' },
  BLOG: { path: '/blog', label: 'Blog' },
  MEMBERS: { path: '/members', label: 'Members' },
  GALLERY: { path: '/gallery', label: 'Gallery' },
};

/** ナビゲーションに使用するパスリスト */
export const BASE_ROUTES_LIST: Route[] = [
  ROUTES.HOME,
  ROUTES.ABOUT,
  ROUTES.NEWS,
  ROUTES.BLOG,
  ROUTES.GALLERY,
];

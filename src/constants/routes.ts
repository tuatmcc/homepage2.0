type ROUTE = {
  PATH: string;
  LABEL: string;
};

export const ROUTES: { [x: string]: ROUTE } = {
  HOME: { PATH: '/', LABEL: 'Home' },
  ABOUT: { PATH: '/about', LABEL: 'AboutUs' },
  NEWS: { PATH: '/news', LABEL: 'News' },
  BLOG: { PATH: '/blog', LABEL: 'Blog' },
  MEMBERS: { PATH: '/members', LABEL: 'Members' },
  GALLERY: { PATH: '/gallery', LABEL: 'Gallery' },
};

/** ナビゲーションに使用するパスリスト */
export const BASE_ROUTES_LIST: ROUTE[] = [
  ROUTES.HOME,
  ROUTES.ABOUT,
  ROUTES.NEWS,
  ROUTES.BLOG,
  ROUTES.GALLERY,
];

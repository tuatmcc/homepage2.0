type ROUTE = {
  PATH: string;
  LABEL: string;
};

export const ROUTES = {
  HOME: { PATH: '/', LABEL: 'Home' },
  ABOUT: { PATH: '/about', LABEL: 'AboutUs' },
  NEWS: { PATH: '/news', LABEL: 'News' },
  BLOG: { PATH: '/blog', LABEL: 'Blog' },
  GALLERY: { PATH: '/gallery', LABEL: 'Gallery' },
};

/** ナビゲーションなどに使用するリスト。これをループ処理で使う */
export const BASE_ROUTES_LIST = [ROUTES.HOME, ROUTES.ABOUT, ROUTES.NEWS, ROUTES.BLOG, ROUTES.GALLERY];

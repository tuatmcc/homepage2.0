export type ROUTE = {
  PATH: string;
  LABEL: string;
};

export const ROUTES = {
  HOME: { PATH: '/home', LABEL: 'Home' },
  ABOUT: { PATH: '/about', LABEL: 'AboutUs' },
  ACTIVITIES: { PATH: '/activities', LABEL: 'Activities' },
  ACTIVITIES_DISCORD_TUTORIAL: {
    PATH: '/activities/discord-tutorial',
    LABEL: 'Discord Tutorial',
  },
  BLOG: { PATH: '/blog', LABEL: 'Blog' },
  GALLERY: { PATH: '/gallery', LABEL: 'Gallery' },
};

/** ナビゲーションなどに使用するリスト。これをループ処理で使う */
export const BASE_ROUTES_LIST = [ROUTES.HOME, ROUTES.ABOUT, ROUTES.ACTIVITIES, ROUTES.BLOG, ROUTES.GALLERY];

export const ACTIVITIES_ROUTES_LIST = [];

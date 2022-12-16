export type ROUTE = {
  PATH: string;
  LABEL: string;
};

export const ROUTES = {
  HOME: { PATH: '/home', LABEL: 'Home' },
  ABOUT: { PATH: '/about', LABEL: 'About' },
  ACTIVITIES: { PATH: '/activities', LABEL: 'Activities' },
  ACTIVITIES_DISCORD_TUTORIAL: {
    PATH: '/activities/discord-tutorial',
    LABEL: 'Discord Tutorial',
  },
  BLOG: { PATH: '/blog', LABEL: 'Blog' },
  SANDBOX: { PATH: '/sandbox', LABEL: 'お砂場' },
};

export const BASE_ROUTES_LIST = [ROUTES.HOME, ROUTES.ABOUT, ROUTES.ACTIVITIES, ROUTES.BLOG, ROUTES.SANDBOX];

export const ACTIVITIES_ROUTES_LIST = [];

import type { IconProps } from './types';

// biome-ignore lint/style/useNamingConvention: <explanation>
export const XIcon = ({ color, size = 24 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 121"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>X</title>
    <path
      d="M69.2282 52.8432L105.339 10.5H96.7816L65.4269 47.266L40.384 10.5H11.5L49.3698 66.0967L11.5 110.5H20.0575L53.1689 71.6739L79.616 110.5H108.5L69.2261 52.8432H69.2282ZM57.5075 66.5865L53.6705 61.0503L23.1409 16.9984H36.2847L60.9225 52.5497L64.7595 58.0859L96.7856 104.297H83.6418L57.5075 66.5886V66.5865Z"
      fill={color || 'white'}
    />
  </svg>
);

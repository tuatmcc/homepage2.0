import { FC } from 'react';

export type LogoProps = {
  height: string | number;
  width: string | number;
};

const Logo: FC<LogoProps> = (props) => {
  return (
    <div style={props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">
        <polyline
          id="M"
          points="256,511 256,256 211.659,230.4 145.148,384 78.637,153.1 34.297,127 34.297,384 78.637,409.6 78.637,281.6 122.978,435.2 167.318,460.8 211.659,358.4 211.659,486.4 256,511"
          stroke="#0080ff"
          fill="#0080ff"
        />
        <polyline
          id="C_right"
          points="256,511 256,256 477.702,128.5 477.702,230.4 433.362,256 433.362,204.8 300.340,281.6 300.340,435.2 433.362,358.4 433.362,307.2 477.702,281.6 477.702,384 256,511"
          stroke="#0000ff"
          fill="#0000ff"
        />
        <polyline
          id="C_up"
          points="256,256 34.797,126.5 256,1 344.681,51.2 300.340,76.8 256,51.2 122.978,128 256,204.8 389.021,128 344.681,102.4 389.021,76.8 477.202,128 256,256"
          stroke="#00ffff"
          fill="#00ffff"
        />
      </svg>
    </div>
  );
};

export default Logo;

import classNames from 'classnames';
import Image from 'next/image';
import type { FC } from 'react';

import { orbitron } from '~/app/fonts';
import { FadeOutOnScroll } from '../FadeOutOnScroll';
import styles from './styles.module.css';

export const Top: FC = () => (
  <div className="sticky top-0 h-svh w-full flex flex-col items-center justify-center z-[-1]">
    <FadeOutOnScroll className="flex flex-col items-center">
      <Image
        width="320"
        height="320"
        src="/animated_mcc.webp"
        alt="MCC Logo"
        className="w-80 h-80"
      />
      <h1
        className={classNames(
          styles.fadeIn,
          orbitron.className,
          'text-[84px] font-bold tracking-wider mb-2',
        )}
      >
        MCC
      </h1>
      <div className="fixed bottom-0 p-4">
        <svg
          width="84"
          height="84"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce"
        >
          <title>svg</title>
          <path
            d="M200 397L400 250V253L200 400L0 253V250L200 397Z"
            fill="black"
          />
          <path d="M199 0H201V300H199V0Z" fill="black" />
        </svg>
      </div>
    </FadeOutOnScroll>
  </div>
);

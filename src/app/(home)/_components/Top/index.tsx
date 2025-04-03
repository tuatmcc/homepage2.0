'use client';

import classNames from 'classnames';
import Image from 'next/image';
import type { FC } from 'react';

import { motion } from 'framer-motion';
import { orbitron } from '~/app/fonts';
import { FadeOutOnScroll } from '../FadeOutOnScroll';

export const Top: FC = () => (
  <div className="sticky top-0 h-svh w-full flex flex-col items-center justify-center z-[-1]">
    <FadeOutOnScroll className="flex flex-col items-center justify-center">
      <div className="relative">
        <motion.div
          className="md:flex flex-col items-center hidden"
          initial={{ x: 0 }}
          animate={{
            x: -160,
            scale: 0.6,
            transition: { duration: 1, delay: 3 },
          }}
        >
          <Image
            width="320"
            height="320"
            src="/animated_mcc.webp"
            alt="MCC Logo"
            className="w-80 h-80"
          />
        </motion.div>
        <div className="md:hidden flex flex-col items-center">
          <Image
            width="320"
            height="320"
            src="/animated_mcc.webp"
            alt="MCC Logo"
            className="w-80 h-80"
          />
        </div>
        <motion.div
          className={classNames(
            orbitron.className,
            'absolute md:flex top-1/2 left-1/2 flex-col text-[120px] tracking-wide translate-y-[-50%] translate-x-[-20%] font-bold text-center text-[#0066cc] hidden',
          )}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 3 },
          }}
        >
          MCC
        </motion.div>
      </div>
      <motion.div
        className=" flex flex-col text-xl translate-0 font-bold text-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 2, delay: 2 },
        }}
      >
        マイクロコンピュータークラブ
      </motion.div>
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

'use client';

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion';
import { useState } from 'react';

export const Progress = () => {
  const { scrollYProgress } = useScroll();
  const springY = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  const [scrollY, setScrollY] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', setScrollY);

  return (
    <div className="fixed bottom-0 right-0 p-2 w-32 h-32 z-10 grid items-center">
      <svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        className="w-full h-full col-start-1 row-start-1"
        style={{
          transform: 'rotate(-90deg)',
        }}
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="opacity-30 fill-none"
          style={{
            strokeDashoffset: '0',
            strokeWidth: '15%',
          }}
        />
        <title>Progress</title>
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator fill-none stroke-black"
          style={{
            strokeDashoffset: '0',
            strokeWidth: '2px',
            pathLength: springY,
          }}
        />
      </svg>
      <div className="col-start-1 row-start-1 flex items-center justify-center">
        {Math.round(scrollY * 100)}%
      </div>
    </div>
  );
};

'use client';

import { motion, useScroll } from 'framer-motion';
import { type FC, useState } from 'react';

export const Pulse: FC = () => {
  const { scrollY } = useScroll();

  const [fadeOut, setFadeOut] = useState(true);

  scrollY.updateAndNotify = (y: number) => {
    if (y > innerHeight * 0.5 && y < innerHeight * 1.5) {
      setFadeOut(false);
    } else {
      setFadeOut(true);
    }
  };

  return (
    <motion.div
      className="fixed h-32 w-full top-1/2 text-gray-300 bottom-0 font-bold leading-48 z-[-1]"
      initial={{ opacity: fadeOut ? 0 : 1 }}
      animate={{
        opacity: fadeOut ? 0 : 1,
        transition: { duration: 0.5 },
      }}
    >
      <motion.div
        className="w-full h-32 bg-gray-400"
        initial={{ backgroundPosition: '100% 50%' }}
        animate={{
          backgroundPosition: '0% 50%',
          transition: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
          },
        }}
        style={{
          backgroundSize: '200% 100%',
          backgroundImage:
            'linear-gradient(to right, #f6f3f4 45%, #0066cc 45%, #0066cc 50%, #f6f3f4 50%, #f6f3f4 100%)',
          clipPath: `polygon(
            0 50%,
            calc(10% + 2px) 50%,
            calc(10% + 30px + 2px) 2px,
            calc(10% + 90px - 2px) 2px,
            calc(10% + 150px - 2px) 100%,
            100% 100%,
            100% calc(100% - 2px),
            calc(10% + 150px) calc(100% - 2px),
            calc(10% + 90px) 0,
            calc(10% + 30px) 0,
            10% calc(50% - 2px),
            0 calc(50% - 2px)
          )`,
        }}
      />
    </motion.div>
  );
};

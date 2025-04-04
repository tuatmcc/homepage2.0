'use client';

import { motion, useScroll } from 'framer-motion';
import { type FC, useState } from 'react';

const message = 'Technology, Design, and Community';

export const Pulse: FC = () => {
  const { scrollY } = useScroll();

  const [fadeOut, setFadeOut] = useState(true);

  scrollY.updateAndNotify = (y: number) => {
    if (y > innerHeight * 0.5 && y < innerHeight) {
      setFadeOut(false);
    } else {
      setFadeOut(true);
    }
  };

  return (
    <motion.div
      className="fixed h-64 w-full top-1/2 text-gray-300 bottom-0 font-bold leading-48 z-[-1]"
      initial={{ opacity: fadeOut ? 0 : 1 }}
      animate={{
        opacity: fadeOut ? 0 : 1,
        transition: { duration: 0.5 },
      }}
    >
      <motion.div
        className="w-full h-64 bg-gray-600"
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
            'linear-gradient(to right, #f6f3f4 45%, #193cb8 45%, #193cb8 50%, #f6f3f4 50%, #f6f3f4 100%)',
          clipPath: `polygon(
            0% 50%,
            20% 50%,
            calc(20% + 10px) 98%,
            calc(20% + 30px) 2%,
            calc(20% + 38px) 70%,
            calc(20% + 54px) 30%,
            calc(20% + 62px) 50%,
            100% 50%,
            100% calc(50% + 2px),
            calc(20% + 61px) calc(50% + 2px),
            calc(20% + 54px) calc(30% + 6px),
            calc(20% + 37px) calc(70% + 8px),
            calc(20% + 30px) calc(2% + 12px),
            calc(20% + 10px) calc(98% + 10px),
            calc(20% - 1px) calc(50% + 2px),
            0% calc(50% + 2px)
          )`,
        }}
      />
    </motion.div>
  );
};

'use client';

import { motion, useScroll } from 'framer-motion';
import {
  type ComponentPropsWithoutRef,
  useCallback,
  useEffect,
  useState,
} from 'react';

type Props = ComponentPropsWithoutRef<typeof motion.div>;

export const FadeOutOnScroll = ({ children, className }: Props) => {
  const { scrollY } = useScroll();
  const [fadeOut, setFadeOut] = useState(false); // 初期値をfalseに設定

  // コンポーネントがマウントされた後にwindowオブジェクトを使う
  useEffect(() => {
    setFadeOut(window.scrollY > 200);
  }, []);

  scrollY.updateAndNotify = useCallback((y: number) => {
    if (y > 200) {
      setFadeOut(true);
    } else {
      setFadeOut(false);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: fadeOut ? 0 : 1 }}
      animate={{
        opacity: fadeOut ? 0 : 1,
      }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

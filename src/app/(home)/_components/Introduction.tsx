import type { FC } from 'react';
import { SlideIn } from './SlideIn';

export const Introduction: FC = () => (
  <div className="relative w-full flex flex-col">
    <div className="flex w-full max-w-[1200px] mx-auto p-4">
      <SlideIn />
    </div>
  </div>
);

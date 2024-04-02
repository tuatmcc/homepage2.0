import type { ReactNode } from 'react';
import { Article } from '../_components/Article';
import { Footer } from '../_components/Footer';
import { Navbar } from '../_components/Navbar';

export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
        <Article>{children}</Article>
      <Footer />
    </>
  );
}

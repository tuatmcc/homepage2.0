import type { ReactNode } from 'react';
import { Article } from '../_components/Article';
import { Footer } from '../_components/Footer';
import { Navbar } from '../_components/Navbar';
import { Navigation } from '../_components/Navigation/Navigation';

export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <Navigation>
        <Article>{children}</Article>
      </Navigation>
      <Footer />
    </>
  );
}

import { Navigation } from '../_components/Navigation/Navigation';
import { Footer } from './_components/Footer';
import { Introduction } from './_components/Introduction';
import { Progress } from './_components/Progress';
import { Pulse } from './_components/Pulse';
import { RecentNews } from './_components/RecentNews';
import { Top } from './_components/Top';
import { WireframeImage } from './_components/WireframeImage';

export default function HomePage() {
  return (
    <>
      <Navigation>
        <main className="relative">
          <Top />
          <WireframeImage />
          <Pulse />
          <Introduction />
          <RecentNews />
          <Footer />
          <Progress />
        </main>
      </Navigation>
    </>
  );
}

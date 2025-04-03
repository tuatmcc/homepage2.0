import { Navigation } from '../_components/Navigation/Navigation';
import { AmbientWireframeImage } from './_components/AmbientWireframeImage';
import { Introduction } from './_components/Introduction';
import { Progress } from './_components/Progress';
import { RecentNews } from './_components/RecentNews';
import { Top } from './_components/Top';

export default function HomePage() {
  return (
    <>
      <Navigation>
        <main className="relative">
          <Top />
          <AmbientWireframeImage />
          <Introduction />
          <RecentNews />
          <div className="flex flex-col items-center justify-center h-svh">
            <h1 className="text-4xl font-bold text-center">MCC</h1>

            <p className="text-center">
              The official website of the Model Christian College, Dimapur
            </p>
          </div>
          <Progress />
        </main>
      </Navigation>
    </>
  );
}

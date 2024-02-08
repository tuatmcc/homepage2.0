import styles from './styles.module.css';

import { Navbar } from '~/app/_components/Navbar';
import { HomeScrollControl } from '~/app/_components/home/home-scroll-control';
import { HomeText3d } from '~/app/_components/home/home-text-3d';

export default function HomePage() {
  return (
    <>
      <Navbar transparent={true} color="white" noBrand={true} />
      <div className={styles.container}>
        <div className={styles.topScreen}>
          <HomeText3d />
        </div>
        <div className={styles.subScreen}>
          <HomeScrollControl />
        </div>
      </div>
    </>
  );
}

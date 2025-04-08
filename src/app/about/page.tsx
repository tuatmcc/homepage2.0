import { Article } from '~/app/_components/Article';
import { Footer } from '~/app/_components/Footer';
import { Navbar } from '~/app/_components/Navbar';
import { Navigation } from '~/app/_components/Navigation/Navigation';
import { Thumbnail } from './_components/Thumbnail';

export default async function About() {
  return (
    <>
      <Navbar />
      <Navigation>
        <Thumbnail />
        <Article>
          <div className="max-w-[1000px] mx-auto">
            <h1>MCCとは</h1>
            <p>
              マイクロコンピュータークラブの略称で、IT系の活動全般をしている東京農工大学の公認サークルです。
            </p>

            <h2>活動内容</h2>
            <p>
              参加必須の活動はありません。自分の興味のある活動に参加し、また立ち上げることも可能です。
            </p>
            <ul>
              <li>
                <b>春・夏合宿</b>
                <ul>
                  <li> 自主ハッカソン </li>
                  <li>競プロ部内コンテスト</li>
                </ul>
              </li>
              <li>
                <b>コンテストへの参加</b>
                <ul>
                  <li>
                    毎週の競技プログラミング(バーチャルコンテスト, AtCoder
                    Beginners Contest など)
                  </li>
                  <li>ICPC (国際大学対抗プログラミングコンテスト) への参加</li>
                  <li>CTF への参加 (SECCON Beginners CTF, picoCTF など)</li>
                  <li>その他任意のコンテスト参加 (ICTSC など)</li>
                </ul>
              </li>
              <li>
                <b> 学祭に向けた作品制作 </b>
                <ul>
                  <li> Unityやその他ソフトを使ったチーム開発 </li>
                </ul>
              </li>
              <li>
                <b>部内講習会</b>
                <ul>
                  <li>新入生向けC言語講習会</li>
                  <li>Git / GitHub 講習会</li>
                  <li>Unity 講習会</li>
                  <li>ネットワーク講習会</li>
                </ul>
              </li>
              <li>
                <b>LT会 (新歓LT会、技術系サークル合同LT会など)</b>
              </li>
              <li>
                <b>任意の開発プロジェクト</b>
                <ul>
                  <li>入退室管理 & 電子施錠システム</li>
                  <li>ホームページリニューアル</li>
                </ul>
              </li>
            </ul>

            <h2>活動場所</h2>
            <ul>
              <li>小金井キャンパス 新サークルB棟 2階</li>
              <li>Discord サーバー</li>
            </ul>

            <div className="flex flex-wrap">
              <img
                src="/images/campas-map.webp"
                alt="campas map"
                width="500"
                className="object-cover"
              />
              <img
                src="/images/club-building-b.webp"
                alt="club building"
                width="500"
                className="object-cover"
              />
            </div>

            <p>
              部室は暇なときに自由に利用でき、色々なタイプの人と交流して刺激を受けることができます。
            </p>

            <h2>新入部員募集</h2>

            <p>
              MCC の Discord
              サーバーに参加して、新歓イベントや活動に参加しましょう。
              <br />
              農工大生であればどなたでも参加可能ですが、
              セキュリティの観点から、当サイトでは招待リンクを公開していません。代わりに、以下いずれかの方法で参加することができます。
            </p>

            <ul>
              <li className="font-bold">
                Discrod の Student Hubs から農工大サーバーに入る
              </li>
              <li className="font-bold">新歓イベントに参加する</li>
              <li className="font-bold">
                MCC の公式 X(旧Twitter) に DM で連絡し、招待リンクをもらう
              </li>
              <li className="font-bold">
                既存部員に声をかけ、招待リンクをもらう
              </li>
            </ul>

            <details>
              <summary>Student Hubs への参加方法</summary>
              <p>
                以下の写真のような手順で進み、大学のメールアドレスを入力することで、農工大サーバーに参加でき、農工大のサーバー一覧からMCCサーバーに入ることが可能です。
                <img
                  src="/images/discord-student-hubs.png"
                  alt="student hubs"
                  width="600"
                />
              </p>
            </details>

            <p>
              Discord
              に参加すると入部フォームがあるので、そちらを提出することで部員となることができます。
            </p>
            <p>みなさんの参加をお待ちしています！</p>
          </div>
        </Article>
      </Navigation>
      <Footer />
    </>
  );
}

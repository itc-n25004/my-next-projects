import Image from "next/image";
import styles from "./page.module.css";
import BottonLink from "@/app/compornents/BottonLink";
import NewsList from "@/app/compornents/NewsList";
import { News } from "@/app/libs/microms";

const data: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: { name: "更新情報" },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "2",
      title: "当社CEOが業界トップリーダーTOP30に選出されました",
      category: { name: "更新情報" },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "3",
      title: "テストの記事です",
      category: { name: "更新情報" },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
  ],
};

export default function Home() {
  const slicedData = data.contents.slice(0, 2);
  const name = "世界";

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で{name}を変える</h1>
          <p className={styles.description}>
            私達は市場をリードしているグリーバルデックカンパニーです
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
          priority
        />
      </section>

      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
                <NewsList news={slicedData} />
        <div className={styles.newsLink}> 
          <BottonLink href="/news">もっと見る</BottonLink>
        </div>
      </section>
    </>
  );
}
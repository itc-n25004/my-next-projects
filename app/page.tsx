import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/libs/microms";
import { TOP_NEWS_LIMIT } from "@/app/constance";
import BottonLink from "@/app/compornents/BottonLink";
import NewsList from "@/app/compornents/NewsList";

export default  async function Home() {
  const data = await getNewsList({ limit: TOP_NEWS_LIMIT,});
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
                <NewsList news={data.contents} />
        <div className={styles.newsLink}> 
          <BottonLink href="/news">もっと見る</BottonLink>
        </div>
      </section>
    </>
  );
}
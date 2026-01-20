import Image from "next/image";
import { MEMBERS_LIST_LIMIT } from "@/app/constance";
import styles from "./page.module.css";
import { getMenbersList  } from "@/app/libs/microms";


export default async function Page() {
  const data = await getMenbersList ({limit: MEMBERS_LIST_LIMIT});
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
      <p className={styles.empty}>メンバーが登録されていません</p>
      )
      : ( 
        
        
        <ul>
          {data.contents.map((content) => (
            <li key={content.id} className={styles.list}>
              <Image
                src={content.image.url}
                alt={content.name}
                width={content.image.width}
                height={content.image.height}
              className={styles.image}
              />
      
             
              <dl>
              <dt className={styles.name}>{content.name}</dt>
              <dd className={styles.name}>{content.position}</dd>
              <dd className={styles.name}>{content.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
      </div>
 );
}
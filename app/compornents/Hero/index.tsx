import Image from "next/image";
import styles from "./index.module.css"

type props = {
    title: string;
    sub: string
}

export default function Hello({title, sub}:props) {
    return (
        <section className={styles.container}>
            <div>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.sub}>{sub}</p>
            </div>
            <Image
                className={styles.bgimg}
                src="/img-mv.jpg"
                alt=""
                width={4000}
                height={1200}
            />
        </section>
        
    );
}
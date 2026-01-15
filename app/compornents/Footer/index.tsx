import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <Link href="/news">ニュース</Link>
                    </li>                    <li className={styles.item}>
                        <Link href="/menbers">メンバー</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/news">お問い合わせ</Link>
                    </li>
                </ul>
            </nav>
            <p className={styles.cr}> © 2023 sample. All rights reserved.</p>
        </footer>
    );
}
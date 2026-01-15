"use client";

import Link from "next/link";
import styles from "./index.module.css"
import Image from "next/image";
import {useState} from "react";
import cx from "classnames";
export default function Menu() {
   const [isOpen, setIsOpen] = useState(false);
   
   const open = () => setIsOpen(true);
   return(
        <div>
        <nav className={cx(styles.nav, {[styles.open]: isOpen})}>
            <ul className={styles.items}>
                <li>
                    <Link href="/NewsList">ニュース</Link>
                </li>
                <li>
                    <Link href="/contact">お問い合わせ</Link>
                </li>
                <li>
                    <Link href="/menbers">メンバー</Link>
                    
                </li> 
            </ul>
        </nav>
        <button className={styles.button} onClick={open}>
            <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
        </button>
        </div>
    );
    }
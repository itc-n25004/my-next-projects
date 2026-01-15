import styles from "./index.module.css"


type props = {
    children: React.ReactNode;
}

export default function Sheet({children}:props) {
    return (
        <div className={styles.container}> {children} </div>
    );
}
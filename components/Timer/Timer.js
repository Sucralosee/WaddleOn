import styles from "./Timer.module.css"

export default function Timer(
    {
        timer = "00:00"
    }
) {
    return (
        <>
            <div className={styles.timer}>
                <div className={styles.highlightOne}></div>
                <div className={styles.highlightTwo}></div>
                <p className={styles.text}>{timer}</p>
                <div className={styles.shadow}></div>
            </div>
        </>
    )
}
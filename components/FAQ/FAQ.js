import styles from "./FAQ.module.css"
import Link from "next/link"

export default function FAQ({
    closeFAQ
}) {
    return (
        <>
            <div className={styles.faqContainer}>
                <div className={styles.faqContent}>
                    <h5>What Is WaddleOn?</h5>
                    <p>WaddleOn boosts productivity by breaking tasks into 25-minute intervals followed by short breaks, preventing burnout and maintaining focus.
                        We help optimize work or study sessions, helping you achieve more in less time.</p>
                    <p>
                        We help optimize work or study sessions, helping you achieve more in less time.
                    </p>
                    <h5>How To Use WaddleOn</h5>
                    <ol className={styles.faqTutorial}>
                        <li>Add a Task using the Input Bar or using the existing filter</li>
                        <li>Press + to add the task to the task list</li>
                        <li>Click on the play/pause button to start/stop the session</li>
                    </ol>
                    <Link className={styles.teamLinks} href="team">
                            Meet the Team
                    </Link>
                </div>
                <div className={styles.exit} onClick={closeFAQ}>
                    <h4>X</h4>
                </div>
            </div>
        </>
    )
}
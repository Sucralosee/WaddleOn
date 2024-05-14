import styles from "./CycleComplete.module.css"
import Image from "next/image"


export default function CycleComplete() {
    return (
        <>
            <div className={styles.cycleCompletePosition}>
                <div className={styles.cycleCompleteContainer}>
                    <h4 className={styles.cycleCompleteHeader}>
                        Waddle Cycle Complete!
                    </h4>
                    <p>Take a Break!</p>
                    <div className={styles.ducksAnim}>
                        <Image src="/images/render_card.png" width={268} height={90} className={styles.ducksRender}
                        />
                    </div>
                </div>
            </div>
        </>
    )
} 
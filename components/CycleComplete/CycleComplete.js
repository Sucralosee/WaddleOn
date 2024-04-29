import styles from "./CycleComplete.module.css"
import DucksAnim from "../DucksAnim/DucksAnim"
import Image from "next/image"


export default function CycleComplete() {
    return (
        <>
            <div className={styles.cycleCompleteContainer}>
                <h4 className={styles.cycleCompleteHeader}>
                    Waddle Cycle Complete!
                </h4>
                <div className={styles.ducksAnim}>
                    <Image src="/images/render_card.png" width={268} height={90} className={styles.ducksRender}
                    />
                </div>
            </div>
        </>
    )
} 
import styles from "./CycleComplete.module.css"
import DucksAnim from "../DucksAnim/DucksAnim"


export default function CycleComplete() {
    return (
        <>
            <div className={styles.cycleCompleteContainer}>
                <h3 className={styles.cycleCompleteHeader}>
                    Waddle Cycle Complete!
                </h3>
                {/* <p>Take a Break!</p> */}
                <div className={styles.ducksAnim}>
                    <DucksAnim 
                       inlineSizing={{
                        position: "relative",
                        width: "269px",
                        height: "257px",
                        borderRadius: "8px",
                    }}
                    />
                </div>
            </div>
        </>
    )
} 
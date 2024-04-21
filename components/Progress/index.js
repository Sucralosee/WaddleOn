import { useState } from 'react';
import styles from "./Progress.module.css";
import Image from "next/image";


export default function Progress() {
    const [stepNum, setstepNum] = useState(1);

    const nextStep = () => {
        if (stepNum < 8) {
            setstepNum(stepNum + 1);
        }
    };

    return (
        <div className={styles.progressContainer}>
            <Image 
                className={styles.pondImage}
                src={`/images/Steps/step${stepNum}.svg`}
                width={400}
                height={400}
                alt={`pond indicating step ${stepNum}`}                
            />
            <button onClick={nextStep} className={styles.nextButton}>
                Continue
            </button>
        </div>
    );
}
import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "./Profile.module.css"
import data from "../../data/inventory/index.js"

//Logic: pass profile visibility from navbar -> true and set visibility -> false from profileExit
export default function Profile({
    closeProfile
}) {
    const [name, setName] = useState(() => {
        const saved = localStorage.getItem("name");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
    const [cycleNumber, setCycleNumber] = useState(() => {
        const saved = localStorage.getItem("cycleNumber");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });

    return (
        <>
            <div className={styles.profileContainer}>
                <div className={styles.profileContent}>
                    <Image  />
                    <h5 className={styles.profileName}>{name}</h5>
                    <div className={styles.breakLine}></div>
                    <h5 className={styles.profileHeading}>Total Amount Of Pomodoro Cycles Completed:</h5>
                    <h1 className={styles.profileNumber}>{Math.ceil(cycleNumber/2)}</h1>
                    <div className={styles.exit} onClick={closeProfile}>
                       <h4>X</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
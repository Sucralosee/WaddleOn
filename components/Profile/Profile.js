import { useState } from "react"
import Image from "next/image"
import styles from "./Profile.module.css"
import data from "../../data/inventory/inventory.js"

//Logic: pass profile visibility from navbar -> true and set visibility -> false from profileExit
export default function Profile({
    name = "default",
    duckType = "Duck",
    duckNumber = 0,
    profileState = false
}) {
    const [profileVisibility, setProfileVisibility] = useState({ profileState });

    return (
        <>
            {profileVisibility ?
                <div className={styles.profileContainer}>
                    <Image />
                    <p className={styles.profileName}>{name}</p>
                    <p className={styles.profileDuck}>{duckType}</p>
                    <h2 className={styles.profileHeading}>Total Amount Of Ducks Collected</h2>
                    <p className={styles.profileNumber}>{duckNumber}</p>
                    <div className={styles.profileExit} onClick={() => setProfileVisibility(false)}>
                        <Image />
                    </div>
                </div> : null}
        </>
    )
}
import { useState } from "react"
import Image from "next/image"
import styles from "./Profile.module.css"
import data from "../../data/inventory/inventory.js"

//Logic: pass profile visibility from navbar -> true and set visibility -> false from profileExit
export default function Profile({
    name = "Default",
    duckType = "Duck",
    duckNumber = 0,
    profileState
}) {
    const [profileVisibility, setProfileVisibility] = useState(profileState);

    const toggleProfileVisibility = () => {
        profileState = false;
        console.log("close")
    }

    return (
        <>
            {profileState ?
                <div className={styles.profileContainer}>
                    <Image />
                    <p className={styles.profileName}>{name}</p>
                    <p className={styles.profileDuck}>{duckType}</p>
                    <h2 className={styles.profileHeading}>Total Amount Of Ducks Collected</h2>
                    <p className={styles.profileNumber}>{duckNumber}</p>
                    <div className={styles.profileExit} onClick={() => setProfileVisibility(false)}>
                        <Image />
                    </div>
                    <button onClick={() => toggleProfileVisibility}>Close</button>
                </div> : null}
        </>
    )
}
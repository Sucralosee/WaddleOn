import { useState } from "react"
import Image from "next/image"
import styles from "./Profile.module.css"

//Logic: pass profile visibility from navbar -> true and set visibility -> false from profileExit
export default function Profile({
    name = "default",
    duckType = "Duck",
    duckNumber = 0
}) {
    const [profileVisibility, setProfileVisibility] = useState(false);

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

// {!mobileHeader ?
//     <Image
//         src="/images/bars.png"
//         width={75}
//         height={25}
//         alt="image of bars"
//         style={styles.headerBars}
//         onClick={toggleMobile} /> : null}
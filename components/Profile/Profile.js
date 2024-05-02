import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "./Profile.module.css"
import data from "../../data/inventory/index.js"

//Logic: pass profile visibility from navbar -> true and set visibility -> false from profileExit
export default function Profile({
    name = "Allana",
    duckNumber = 0,
    closeProfile
}) {
    return (
        <>
            <div className={styles.profileContainer}>
                <div className={styles.profileContent}>
                    <Image  />
                    <h5 className={styles.profileName}>{name}</h5>
                    <div className={styles.breakLine}></div>
                    <h5 className={styles.profileHeading}>Total Amount Of Ducks Collected</h5>
                    <h1 className={styles.profileNumber}>{duckNumber}</h1>
                    <div className={styles.exit} onClick={closeProfile}>
                       <h4>X</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
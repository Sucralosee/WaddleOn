import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "./Profile.module.css"
import data from "../../data/inventory/inventory.js"

//Logic: pass profile visibility from navbar -> true and set visibility -> false from profileExit
export default function Profile({
    name = "Name",
    duckType = "Duck",
    duckNumber = 0,
    closeProfile
}) {
    return (
        <>
            <div className={styles.profileContainer}>
                <div className={styles.profileContent}>
                    <Image  />
                    <h1 className={styles.profileName}>{name}</h1>
                    <p>You are a...</p>
                    <h2 className={styles.profileDuck}>{duckType}</h2>
                    <h2 className={styles.profileHeading}>Total Amount Of Ducks Collected</h2>
                    <h1 className={styles.profileNumber}>{duckNumber}</h1>
                    <div className={styles.exit} onClick={closeProfile}>
                       <h4>X</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
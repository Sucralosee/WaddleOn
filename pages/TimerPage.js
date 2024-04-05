import { useState } from "react"
import styles from "../styles/TimerPage.module.css"
import Timer from "@/components/Timer/Timer"
import NavBar from "@/components/Navbar/NavBar"
import Image from "next/image"
import Tasks from "@/components/Tasks/Tasks"



export default function TimerPage() {
    const timerDuck = { backgroundColor: "red", margin: "0 auto" }
    return (
        <>
            <main className={`${styles.main}`}>
                <div className={styles.duckAnimationTimer}>
                    <Image width={430} height={238} style={timerDuck} />
                    <Timer />
                </div>
                <div>
                    <Tasks/>
                </div>
                <NavBar />
            </main>
        </>
    )
}
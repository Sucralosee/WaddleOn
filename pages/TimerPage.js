import { useState } from "react"
import styles from "../styles/TimerPage.module.css"
import Timer from "@/components/Timer/Timer"
import NavBar from "@/components/Navbar/NavBar"


export default function TimerPage() {
    return (
        <>
            <main className={`${styles.main}`}>
                <Timer/>
                <NavBar/>
            </main>
        </>
    )
}
import Image from "next/image"
import styles from "./NavBar.module.css"
import { useState } from "react"

// Onclick will toggle -> the component visibility for the settings overlay and profile

export default function NavBar() {
    const [settings, setSettings] = useState(false)
    const [profile, setProfile] = useState(false)

    const toggleSettings = () => {
        setSettings(!settings)
    }

    const toggleProfile = () => {
        setProfile(!profile)
    }

    // Conditionally render settings and profile overlay components like the header in assessment 4
    return(
        <>
        <div className={styles.navBarContainer}>
            <Image onClick={() => toggleSettings}/>
            <div>Pause/Play Component</div>
            <Image onClick={() => toggleProfile}/>
        </div>
        </>
    )
}
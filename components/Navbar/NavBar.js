import Image from "next/image"
import styles from "./NavBar.module.css"
import { useState } from "react"
import Profile from "../Profile/Profile"
// Onclick will toggle -> the component visibility for the settings overlay and profile

export default function NavBar() {
    const [settings, setSettings] = useState(false)
    const [profile, setProfile] = useState(false)

    const toggleProfile = () => {
        setProfile(!profile)
        console.log("profile")
    }
    const toggleSettings = () => {
        setSettings(!settings)
        console.log("settings")

    }

    // Conditionally render settings and profile overlay components like the header in assessment 4
    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous"></link>

            <Profile profileState={profile} />
            <div className={styles.navBarContainer}>
                <div className={styles.navBarItems}>
                    <div onClick={toggleProfile} className={styles.profile}>
                        <i class="fa fa-user fa-3x" aria-hidden="true" ></i>
                    </div>
                    <div>Pause/Play Component</div>
                    <div onClick={toggleSettings} className={styles.settings}>
                        <i class="fa fa-cog fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
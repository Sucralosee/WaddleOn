import Image from "next/image"
import styles from "./NavBar.module.css"
import { useState } from "react"
import Profile from "../Profile/Profile"
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
    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous"></link>

            {settings ? <Profile profileState={profile} /> : null}
            <div className={styles.navBarContainer}>
                <div className={styles.navBarItems}>
                    <i onClick={() => toggleProfile} class="fa fa-user fa-4x" aria-hidden="true"></i>
                    <div>Pause/Play Component</div>
                    <i onClick={() => toggleSettings} class="fa fa-cog fa-4x" aria-hidden="true"></i>
                </div>
            </div>
        </>
    )
}
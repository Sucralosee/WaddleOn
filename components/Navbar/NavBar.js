import Image from "next/image"
import styles from "./NavBar.module.css"
import { useState } from "react"
import Profile from "../Profile/Profile"
import SettingsMenu from "../SettingsMenu/SettingsMenu"
// Onclick will toggle -> the component visibility for the settings overlay and profile

export default function NavBar() {
    const [settingsState, setSettingsState] = useState(false)
    const [profileState, setProfileState] = useState(false)

    const toggleProfile = () => {
        setProfileState(!profileState)
        console.log("profile")
    }
    const toggleSettings = () => {
        setSettingsState(!settingsState)
        console.log("settings")

    }

    const closeProfile = () => {
        setProfileState(false);
    };

    const closeSettings = () => {
        setSettingsState(false);
    };

    // Conditionally render settings and profile overlay components like the header in assessment 4
    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous"></link>
                {profileState ? <Profile profileVisibility={profileState} closeProfile={closeProfile} /> : null}
                {settingsState ? <SettingsMenu settingsVisiblilty={profileState} closeSettings={closeSettings} /> : null}
            <div className={styles.navBarContainer}>
                <div className={styles.navBarItems}>
                    <div className={styles.navbarLogo}>WaddleOn</div>
                    <div onClick={toggleProfile} className={styles.profile} tabIndex={8}>
                        <i class="fa fa-question fa-2x" aria-hidden="true" ></i>
                    </div>
                    <div onClick={toggleProfile} className={styles.profile} tabIndex={9}>
                        <i class="fa fa-user fa-2x" aria-hidden="true" ></i>
                    </div>
                    <div onClick={toggleSettings} className={styles.settings} tabIndex={10}>
                        <i class="fa fa-cog fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
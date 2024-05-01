import styles from './SettingsMenu.module.css'
import { useEffect, useState } from 'react';

//Possible Reference for sliders https://codesandbox.io/p/sandbox/volume-slider-o44gf?file=%2Fsrc%2Findex.js%3A26%2C18-36%2C38
export default function SettingsMenu({
    language = "English",
    theme = "Light",
    sound = "On",
    textSize = "Normal",
    childParent
}) {
    const [isDark, setIsDark] = useState(false)
    const [audioCheck, setAudioCheck] = useState(true)
    const data = false

    useEffect(() => {
        const theme = document.getElementById("theme");

        if (theme) {
            theme.addEventListener("click", function handleTheme() {
                setIsDark(!isDark)
            })
        }
    }, []);

    const handleAudio = () => {
        setAudioCheck(!audioCheck)
        console.log("audio!!")
    }

    return (
        <>
            <div className={styles.settingsPosition}>
                <div className={styles.settingsContainer}>
                    <h2>Settings</h2>
                    <div className={styles.option}>
                        <p>Language: {language}</p>
                    </div>
                    <button className={styles.option} id="theme">
                        <p>Theme: {theme}</p>
                    </button>
                    <div className={styles.option} onClick={handleAudio}>
                        <p>Sound: {sound}</p>
                    </div>
                    <div className={styles.option}>
                        <p>Text Size: {textSize}</p>
                    </div>
                    <div className={styles.exit} onClick={() => childParent(data)}>
                        <h4>X</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
import styles from './SettingsMenu.module.css'
import { useEffect, useState } from 'react';
import Link from 'next/link';

//Possible Reference for sliders https://codesandbox.io/p/sandbox/volume-slider-o44gf?file=%2Fsrc%2Findex.js%3A26%2C18-36%2C38
export default function SettingsMenu({
    language = "English",
    theme = "Light",
    sound = "On",
    textSize = "Normal",
    childParent
}) {
    const [isDark, setIsDark] = useState(false);
    const [audioCheck, setAudioCheck] = useState(true);
    const [button, setButton] = useState(true);
    const [buttonStyle, setButtonStyle] = useState();
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

    if (button) {

    } else {

    }

    return (
        <>
            <div className={styles.settingsPosition}>
                <div className={styles.settingsContainer}>
                    <h2>Settings</h2>
                    <button className={styles.option}>
                        <p>Language: {language}</p>
                    </button>
                    <button className={styles.option} id="theme">
                        <p>Theme: {theme}</p>
                    </button>
                    <button className={styles.option} onClick={handleAudio}>
                        <p>Sound: {sound}</p>
                    </button>
                    <button className={styles.option}>
                        <p>Text Size: {textSize}</p>
                    </button>
                    <div className={styles.link}>
                        <Link className={styles.option} href="summary01">
                            Go To Quiz
                        </Link>
                    </div>
                    <div className={styles.exit} onClick={() => childParent(data)}>
                        <h4>X</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
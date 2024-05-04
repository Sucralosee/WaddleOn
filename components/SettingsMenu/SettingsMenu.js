import styles from './SettingsMenu.module.css'
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SettingsMenu({
    childParent
}) {
    const [isDark, setIsDark] = useState(false);

    const [langCheck, setLangCheck] = useState(false)
    var [lang, setLang] = useState("")

    const [themeCheck, setThemeCheck] = useState(false)
    var [theme, setTheme] = useState("")

    const [audioCheck, setAudioCheck] = useState(true);
    var [audio, setAudio] = useState("")

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

    //Lang
    const handleLang = () => {
        setLangCheck(!langCheck)
        console.log("lang!!")
    }

    if (langCheck) {
        var lang = "French"
    } else {
        var lang = "English"

    }

    useEffect(() => {
        localStorage.setItem("language", JSON.stringify(lang));
    }, [lang]);

    //Theme
    const handleTheme = () => {
        setThemeCheck(!themeCheck)
        console.log("Theme!!")
    }

    if (themeCheck) {
        var theme = "Dark"
    } else {
        var theme = "Light"
    }

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);

    //audio
    const handleAudio = () => {
        setAudioCheck(!audioCheck)
        console.log("audio!!")
    }

    if (!audioCheck) {
        var audio = "Off"
    } else {
        var audio = "On"
    }
    
    useEffect(() => {
        localStorage.setItem("audio", JSON.stringify(audio));
    }, [audio]);


    return (
        <>
            <div className={styles.settingsPosition}>
                <div className={styles.settingsContainer}>
                    <h2>Settings</h2>
                    <button className={styles.option} onClick={handleLang}>
                        <p>Language: {lang}</p>
                    </button>
                    <button className={styles.option} id="theme" onClick={handleTheme}>
                        <p>Theme: {theme}</p>
                    </button>
                    <button className={styles.option} onClick={handleAudio}>
                        <p>Sound: {audio}</p>
                    </button>
                    <div className={styles.link}>
                        <Link className={styles.option} href="summary01">
                            Go To Quiz
                        </Link>
                        <Link className={styles.option} href="http://localhost:3000">Main Menu</Link>
                    </div>
                    <div className={styles.exit} onClick={() => childParent(data)}>
                        <h4>X</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
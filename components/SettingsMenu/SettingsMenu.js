import styles from './SettingsMenu.module.css'
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SettingsMenu({
    childParent
}) {
    const [langCheck, setLangCheck] = useState(() => {
        const saved = localStorage.getItem("language");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    var [lang, setLang] = useState("");
    const [langBool, setLangBool] = useState(true)

    const [themeCheck, setThemeCheck] = useState(() => {
        const saved = localStorage.getItem("theme");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    var [theme, setTheme] = useState("");
    const [themeBool, setThemeBool] = useState(true)

    const [audioCheck, setAudioCheck] = useState(() => {
        const saved = localStorage.getItem("audio");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    var [audio, setAudio] = useState("");
    const [audioBool, setAudioBool] = useState(true)

    const [button, setButton] = useState(true);
    const [buttonStyle, setButtonStyle] = useState();
    const data = false;

    useEffect(() => {
        const theme = document.getElementById("theme");

        if (theme) {
            theme.addEventListener("click", function handleTheme() {
                setIsDark(!isDark)
            })
        }
    }, []);

    //local storage https://blog.logrocket.com/using-localstorage-react-hooks/
    //Lang
    const handleLang = () => {
        setLangBool(!langBool)
        console.log("lang!!")
    }

    if (langBool === true) {
        var lang = "French"
    } else {
        var lang = "English"
    }

    useEffect(() => {
        localStorage.setItem("language", JSON.stringify(lang));
    }, [lang]);

    //Theme
    const handleTheme = (e) => {
        setThemeBool(!themeBool)
        console.log("Theme!!", themeBool)
    }

    if (themeBool === true) {
        var theme = "Light"
    } else {
        var theme = "Dark"
    }

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);

    //audio
    const handleAudio = () => {
        setAudioBool(!audioBool)
        console.log("audio!!")
    }

    if (audioBool === true) {
        var audio = "Off"
    } else {
        var audio = "On"
    }

    useEffect(() => {
        localStorage.setItem("audio", JSON.stringify(audio));
    }, [audio]);

    //
    const reload = () => {
        window.location.reload();
    }
    
    return (
        <>
            <div className={styles.settingsPosition}>
                <div className={styles.settingsContainer}>
                    <h2>Settings</h2>
                    <button className={styles.option} onClick={handleLang}>
                        <p>Language: {langCheck}</p>
                    </button>
                    <button className={styles.option} onClick={handleTheme}>
                        <p>Theme: {themeCheck}</p>
                    </button>
                    <button className={styles.option} onClick={handleAudio}>
                        <p>Sound: {audioCheck}</p>
                    </button>
                    <button className={styles.option} onClick={reload}>
                        <p>Confirm Changes</p>
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
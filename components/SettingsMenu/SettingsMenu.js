import styles from './SettingsMenu.module.css'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { settingTextInv } from '../../data/inventory/index.js'


export default function SettingsMenu({
    childParent,
    changeLanguage
}) {
    const [langCheck, setLangCheck] = useState(() => {
        const saved = localStorage.getItem("language");
        const initialValue = JSON.parse(saved);
        return initialValue;
    });
    const [lang, setLang] = useState("English");
    const [langBool, setLangBool] = useState(true);

    const [themeCheck, setThemeCheck] = useState(() => {
        const saved = localStorage.getItem("theme");
        const initialValue = JSON.parse(saved);
        return initialValue;
    });
    var [theme, setTheme] = useState("");
    const [themeBool, setThemeBool] = useState(true)

    const [audioCheck, setAudioCheck] = useState(() => {
        const saved = localStorage.getItem("audio");
        const initialValue = JSON.parse(saved);
        return initialValue;
    });
    var [audio, setAudio] = useState("");
    const [audioBool, setAudioBool] = useState(true)

    const [button, setButton] = useState(true);
    const [buttonStyle, setButtonStyle] = useState();
    const data = false;

    //Theme
    const handleTheme = (e) => {
        setThemeBool(!themeBool)
        console.log("Theme!!", themeBool)
    }

    if (themeBool == true) {
        var theme = "Light"
    } else if (themeBool == false) {
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
        localStorage.setItem("audioBool", JSON.stringify(!audioBool));
    }, [audio, audioBool]);


    //local storage https://blog.logrocket.com/using-localstorage-react-hooks/
    
    //Lang
    // toggler
    const handleLang = () => {
        setLangBool(!langBool)
        console.log("lang", langBool)
        const newLang = langBool ? "French" : "English";
        setLang(newLang);
        changeLanguage(langBool ? "French" : "English");
    };

    // gets the key and the lang and returns it for when called upon
    const settingText = (key) => {
        const language = lang; // Use the lang state variable
        if (settingTextInv[language] && settingTextInv[language][0][key]) {
            // console.log("langie")
            return settingTextInv[language][0][key];
        } else {
            console.error(`Setting text not found for language "${language}" and key "${key}"`);
            return 'no translation found';
        }
    };

    useEffect(() => {
        localStorage.setItem("langBool", JSON.stringify(langBool));
    }, [lang, langBool]);

    //https://community.wappler.io/t/have-local-storage-updates-sync-across-tabs-without-refresh/41880
    const reload = () => {
        window.location.reload();
    }


    return (
        <>
            <div className={styles.settingsPosition}>
                <div className={styles.settingsContainer}>
                    <h2>{settingText(6)}</h2>
                    <button className={styles.option} onClick={handleLang}>
                        <p className={styles.textButton}>{settingText(1)}: {lang}</p>
                    </button>
                    <button className={styles.option} onClick={handleTheme}>
                        <p className={styles.textButton}>{settingText(2)}: {theme}</p>
                    </button>
                    <button className={styles.option} onClick={handleAudio}>
                        <p className={styles.textButton}>{settingText(7)}: {audio}</p>
                    </button>
                    <button className={styles.option} onClick={reload}>
                        <p>{settingText(3)}</p>
                    </button>
                    <div className={styles.link}>
                        <Link className={styles.option} href="summary01">
                            {settingText(4)}
                        </Link>
                        <Link className={styles.option} href="/">{settingText(5)}</Link>
                    </div>
                    <div className={styles.exit} onClick={() => childParent(false)}>
                        <h4>X</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

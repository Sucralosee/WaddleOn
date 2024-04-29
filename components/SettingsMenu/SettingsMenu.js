import styles from './SettingsMenu.module.css'

//Possible Reference for sliders https://codesandbox.io/p/sandbox/volume-slider-o44gf?file=%2Fsrc%2Findex.js%3A26%2C18-36%2C38
export default function SettingsMenu({
    closeSettings,
    language = "English",
    theme = "Light",
    sound = "On",
    textSize = "Normal"
}) {

    const handleLanguage = () => {
        let language
    }

    
    return (
        <>
            <div className={styles.settingsPosition}>
                <div className={styles.settingsContainer}>
                    <h2>Settings</h2>
                    <div className={styles.option}>
                        <p>Language: {language}</p>
                    </div>
                    <div className={styles.option}>
                        <p>Theme: {theme}</p>
                    </div>
                    <div className={styles.option}>
                        <p>Sound: {sound}</p>
                    </div>
                    <div className={styles.option}>
                        <p>Text Size: {textSize}</p>
                    </div>
                    <div className={styles.exit} onClick={closeSettings}>
                        <h4>X</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
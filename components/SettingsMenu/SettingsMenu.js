import styles from './SettingsMenu.module.css'

//Possible Reference for sliders https://codesandbox.io/p/sandbox/volume-slider-o44gf?file=%2Fsrc%2Findex.js%3A26%2C18-36%2C38
export default function SettingsMenu({
    closeSettings
}) {
    return (
        <>
            <div className={styles.settingsContainer}>
                <h1 className={styles.settingsHeader}>SETTINGS</h1>

                <div className={styles.buttonContainer}>
                    <h3>
                        Theme
                    </h3>
                    <div className={styles.buttons}>
                        <button className={styles.btn}>Default</button>
                        <button className={styles.btn}>Dark</button>
                    </div>
                </div>

                <div className={styles.buttonContainer}>
                    <h3>
                        Languages
                    </h3>
                    <div className={styles.buttons}>
                        <button className={styles.btn}>English</button>
                        <button className={styles.btn}>French</button>
                    </div>
                </div>

                <div className={styles.sliderContainer}>
                    <h3>
                        Sound
                    </h3>
                    <div className={styles.slider}>
                        <input type="range" />
                    </div>
                </div>
                <div className={styles.sliderContainer}>
                    <h3>
                        Text Size
                    </h3>
                    <div className={styles.slider}>
                        <input type="range" />
                    </div>
                </div>

                <div className={styles.exit} onClick={closeSettings}>
                    <h4>X</h4>
                </div>
            </div>
        </>
    )
}
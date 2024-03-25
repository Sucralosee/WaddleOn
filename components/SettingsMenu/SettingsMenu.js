import styles from './SettingsMenu.module.css'

//Possible Reference for sliders https://codesandbox.io/p/sandbox/volume-slider-o44gf?file=%2Fsrc%2Findex.js%3A26%2C18-36%2C38
export default function Settings() {
    return (
        <>
            <div className={styles.settingsContainer}>
                <h3>SETTINGS</h3>
                <div className={styles.sliderContainer}>
                    <h6>
                        Text Size
                    </h6>
                    <div className={styles.slider}>
                        <input type="range"/>
                    </div>
                </div>

                <div className={styles.buttonContainer}>
                    <h6>
                        Theme
                    </h6>
                    <div className={styles.buttons}>
                        <button>Default</button>
                        <button>Dark</button>
                    </div>
                </div>

                <div className={styles.buttonContainer}>
                    <h6>
                        Languages
                    </h6>
                    <div className={styles.buttons}>
                        <button>English</button>
                        <button>French</button>
                    </div>
                </div>

                <div className={styles.sliderContainer}>
                    <h6>
                        Sound
                    </h6>
                    <div className={styles.slider}></div>
                </div>
            </div>
        </>
    )
}
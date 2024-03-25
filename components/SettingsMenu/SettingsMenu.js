import styles from './SettingsMenu.module.css'

export default function Settings(){
    return(
        <>
        <div className={styles.settingsConatiner}>
            <h3>SETTINGS</h3>
            <div className={styles.textSize}>
                <h6>
                    Text Size
                </h6>
                <div className={styles.slider}></div>
            </div>
            <div className={styles.theme}>
                <h6>
                    Theme
                </h6>
                <div className={styles.buttons}></div>
            </div>
            <div className={styles.Languages}>
                <h6>
                    Languages
                </h6>
                <div className={styles.slider}></div>
            </div>
            <div className={styles.Sound}>
                <h6>
                    Sound
                </h6>
                <div className={styles.slider}></div>
            </div>
        </div>
        </>
    )
}
import styles from "./Team.module.css"

export default function Team (){

    return (
        <div className={styles.teamContainer}>
            <h1 className={styles.teamHeader}>Team</h1>
            <div className={styles.teamMember}>
                <Image
                    className={styles.duckImage}
                    src={`/images/Ducks/Duck1.svg`}
                    width={100}
                    height={100}
                />
                <div className={styles.teamMemInfo}>
                    <h3 className={styles.teamName}>Jackie Troung</h3>
                    <div> Description of person</div>
                </div>
            </div>

            <div className={styles.teamMember}>
                <Image
                    className={styles.duckImage}
                    src={`/images/Ducks/Duck2.svg`}
                    width={100}
                    height={100}
                />
                <div className={styles.teamMemInfo}>
                    <h3 className={styles.teamName}>Ben Louis</h3>
                    <div> Description of person</div>
                </div>
            </div>
            <div className={styles.teamMember}>
                <Image
                    className={styles.duckImage}
                    src={`/images/Ducks/Duck3.svg`}
                    width={100}
                    height={100}
                />
                <div className={styles.teamMemInfo}>
                    <h3 className={styles.teamName}>Henver Bio</h3>
                    <div> Description of person</div>
                </div>
            </div>
            <NavBar/>
        </div>
    );
}

import styles from "./Team.module.css";
import Image from "next/image";

export default function Team({ closeTeam }) {
  return (
    <div className={styles.teamContainer}>
      <div className={styles.teamContent}>
        <h1 className={styles.teamHeader}>Team</h1>
        <div className={styles.lineContainer}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.teamMember}>
          <Image
            className={styles.duckImage}
            src={`/images/Ducks/Duck1.svg`}
            width={100}
            height={100}
          />
          <div className={styles.teamMemInfo}>
            <h3 className={styles.teamName}>Jackie Troung</h3>
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
          </div>
        </div>
        <div className={styles.exit} onClick={closeTeam}>
          <h4>X</h4>
        </div>
      </div>
    </div>
  );
}

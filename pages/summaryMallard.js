import styles from "@/styles/Mallard.module.css";
import Next from "@/components/NextButton";
import House from "@/components/HomeButton";
import NavBar from "@/components/Navbar/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Mallard() {
    return (

        <main className={`${styles.summaryOne}`}>
            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>You are a...</h2>
                    <h2 className={styles.duckName}>Mallard!</h2>
                </div>
                <div className={styles.homeButton}>
                    <Link href="/TimerPage"><House /></Link>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.duck}><Image src="/images/Ducks/Duck1.svg" width={512.62} height={545.42} alt="Mallard duck" /></div>
                    <div className={styles.duckInfo}>
                        <h4 className={styles.features}>Defining<br></br>features</h4>
                        <ul className={styles.featuresList}>
                            <li>Hardworker</li>
                            <li>Steady Studier</li>
                            <li>Relaxed</li>
                        </ul>
                    </div></div>
                <div className={styles.buttonContainer}>
                    <Link href='/TimerPage'><Next /></Link>
                </div>
            </div>

        </main>

    );
}

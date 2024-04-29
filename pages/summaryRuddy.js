import styles from "@/styles/Ruddy.module.css";
import Next from "@/components/NextButton";
import House from "@/components/HomeButton";
import Image from "next/image"


export default function Mallard() {
  return (

<main className={`${styles.summaryOne}`}>
    <div className={styles.contentContainer}>
    <div className={styles.titleContainer}>
        <h2 className={styles.title}>You are a...</h2>
            <h2 className={styles.duckName}>Ruddy Shelduck!</h2>
    </div>
            <div className={styles.homeButton}>
                <House/>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.duck}><Image src="/images/Ducks/Duck3.svg" width={512.62} height={545.42} alt="ruddy-shellduck"/></div>
                    <div className={styles.duckInfo}>
                            <h4 className={styles.features}>Defining<br></br>features</h4>
                                <ul className={styles.featuresList}>
                                    <li>Energetic</li>
                                    <li>Studious</li>
                                    <li>Attentative</li>
                                </ul>
                    </div></div> 
                    <div className={styles.buttonContainer}>
                        <Next/>
                    </div> 
            </div>
                   
      </main>
    
  );
}

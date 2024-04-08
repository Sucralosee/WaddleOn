import styles from "@/styles/Mallard.module.css";
import Next from "@/components/NextButton";
import House from "@/components/HomeButton";
import Image from "next/image"

export default function Mallard() {
  return (

<main className={`${styles.summaryOne}`}>
    <div className={styles.contentContainer}>
    <div className={styles.titleContainer}>
        <h6 className={styles.title}>You are a...</h6>
            <h4 className={styles.duckName}>Mallard!</h4>
    </div>
            <div className={styles.homeButton}>
                <House/>
            </div>
            <div className={styles.duck}><Image src="/images/ruddy.png" width={200} height={200}/></div>
                <div className={styles.duckInfo}>
                    <h1 className={styles.mallardName}>Ruddy Shelduck</h1>
                        <h4 className={styles.features}>Defining features</h4>
                            <ul className={styles.featuresList}>
                                <li>Energetic</li>
                                <li>Sudious Studier</li>
                                <li>Attentive</li>
                            </ul>
                                <h3 className={styles.description}>Description</h3>
                                    <p className={styles.descriptionPar}>The Ruddy Shelduck is a species of waterfowl found in the wetlands and lakes of Europe, Asia, and North Africa.</p>
                </div>
                    <div className={styles.buttonContainer}>
                        <Next/>
                    </div> 
            </div>         
      </main>
    
  );
}

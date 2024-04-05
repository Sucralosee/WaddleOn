import styles from "@/styles/Ruddy.module.css";
import Next from "@/components/NextButton";
import Back from "@/components/BackButton";
import House from "@/components/HomeButton";

export default function Ruddy() {
  return (

<main className={`${styles.summaryOne}`}>
    <div className={styles.titleContainer}>
        <h6 className={styles.title}>You are a...</h6>
            <h4 className={styles.duckName}>Ruddy Shelduck!</h4>
    </div>
            <div className={styles.homeButton}>
                <House/>
            </div>
            <div className={styles.duck}></div>
                <div className={styles.duckInfo}>
                    <h1 className={styles.mallardName}>Ruddy Shelduck</h1>
                        <h4 className={styles.features}>Defining features</h4>
                            <ul className={styles.featuresList}>
                                <li>Energetic</li>
                                <li>Studious Studier</li>
                                <li>Attentive</li>
                            </ul>
                                <h3 className={styles.description}>Description</h3>
                                    <p className={styles.descriptionPar}>The Ruddy Shelduck is a species of waterfowl found in the wetlands and lakes of Europe, Asia, and North Africa.</p>
                </div>
                    <div className={styles.buttonContainer}>
                        <Back/>
                            <div className={styles.buttonSpacer}></div>
                        <Next/>
                    </div> 
            <div className={styles.navBarDummy}></div>          
      </main>
    
  );
}

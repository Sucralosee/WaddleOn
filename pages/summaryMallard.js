import styles from "@/styles/Mallard.module.css";
import Next from "@/components/NextButton";
import Back from "@/components/BackButton";
import House from "@/components/HomeButton";

export default function Mallard() {
  return (

<main className={`${styles.summaryOne}`}>
    <div className={styles.titleContainer}>
        <h6 className={styles.title}>You are a...</h6>
        <h4 className={styles.duckName}>Mallard!</h4>
    </div>
            <div className={styles.homeButton}>
                <House/>
            </div>
                <div className={styles.duckInfo}>
                    <h1 className={styles.mallardName}>Mallard</h1>
                    <h4 className={styles.features}>Defining features</h4>
                    <ul className={styles.featuresList}>
                        <li>Hardworker</li>
                        <li>Steady Studier</li>
                        <li>Relaxed</li>
                    </ul>
                    <h3 className={styles.description}>Description</h3>
                    <p className={styles.descriptionPar}>The mallard or wild duck is a dabbling duck that breeds throughout the temperate and subtropical Americas, Eurasia, and North Africa.</p>
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

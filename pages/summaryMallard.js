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
                <div className={styles.duckInfo}></div>
                    <div className={styles.buttonContainer}>
                        <Back/>
                            <div className={styles.buttonSpacer}></div>
                        <Next/>
                    </div> 
            <div className={styles.navBarDummy}></div>          
      </main>
    
  );
}

import styles from "@/styles/Summary.module.css";
import Next from "@/components/NextButton";
import Back from "@/components/BackButton";
import House from "@/components/HomeButton";

export default function Summary() {
  return (
    <>
    <div className={styles.backgroundGrad}>
      <main className={`${styles.summaryOne}`}>
        <div className={styles.homeButton}>
          <House/>
        </div>
          <div className={styles.duckImage}><h2>image placeholder</h2></div>
            <div className={styles.buttonContainer}>
              <Back/>
                <div className={styles.buttonSpacer}></div>
              <Next/>
            </div> 
            <div className={styles.navBarDummy}></div>          
      </main></div>
    </>
  );
}

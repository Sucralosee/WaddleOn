import styles from "@/styles/Bluebill.module.css";
import Next from "@/components/NextButton";
import House from "@/components/HomeButton";

export default function BlueBill() {
  return (

<main className={`${styles.summaryOne}`}>
    <div className={styles.titleContainer}>
        <h6 className={styles.title}>You are a...</h6>
            <h4 className={styles.duckName}>Blue-Billed Duck!</h4>
    </div>
            <div className={styles.homeButton}>
                <House/>
            </div>
                <div className={styles.duck}></div>
                <div className={styles.duckInfo}>
                    <h1 className={styles.mallardName}>Blue-billed Duck</h1>
                        <h4 className={styles.features}>Defining features</h4>
                            <ul className={styles.featuresList}>
                                <li>Friendly</li>
                                <li>Meticulous Studier</li>
                                <li>Careful</li>
                            </ul>
                                <h3 className={styles.description}>Description</h3>
                                    <p className={styles.descriptionPar}>The Blue-billed Duck is a small Australian waterfowl species found in freshwater lakes and swamps throughout Australia.</p>
                </div>
                    <div className={styles.buttonContainer}>
                        <Next/>
                    </div> 
            <div className={styles.navBarDummy}></div>          
      </main>
    
  );
}

import { useState } from 'react';
import styles from "./Progress.module.css";
import Image from "next/image";
import Link from 'next/link';

export default function Progress() {
    const [stepNum, setStepNum] = useState(1);
    const [stepDuck, setStepDuck] = useState(1);
    const [clickCount, setClickCount] = useState(0);
    const [duckInstructions, setDuckInstructions] = useState('Hey Waddler, What\'s your name?');
    const [userName, setUserName] = useState('');

    const handleNameChange = (e) => {
        setUserName(e.target.value);
    };

    const nextStep = () => {
        if (stepNum < 8) {
            setStepNum(stepNum + 1);
        }

        setClickCount(clickCount + 1);

        switch (clickCount) {
            case 0:
                setDuckInstructions(`Welcome, ${userName}`);
                break;
            case 1:
                setDuckInstructions('Let\'s begin this tutorial\n\n\n\n\n\nYou can enter a task in this box');
                break;
            case 2:
                setDuckInstructions('By pressing on the task you can begin waddling!');
                break;
            case 3:
                setDuckInstructions('Well done!\n This will begin the first 25 min timer');
                break;
            case 4:
                setDuckInstructions('Once the cycle is done, take a waddling break or continue working!');
                break;
            case 5:
                setDuckInstructions('This pattern will repeat 4 times, we believe in you! Then you’ll get a 25 min break.');
                break;
            default:
                setDuckInstructions('Click Continue to start your waddling journey!');
                break;
        }
    };

    const goBack = () => {
        if (stepNum > 1) {
            setStepNum(stepNum - 1);
            setClickCount(clickCount - 1);
            switch (clickCount - 1) {
                case 0:
                    setDuckInstructions(`Welcome, ${userName}`);
                    break;
                case 1:
                    setDuckInstructions('Let\'s begin this tutorial\n\n\n\n\n\nYou can enter a task in this box');
                    break;
                case 2:
                    setDuckInstructions('By pressing on the task you can begin waddling!');
                    break;
                case 3:
                    setDuckInstructions('Well done!\n This will begin the first 25 min timer');
                    break;
                case 4:
                    setDuckInstructions('Once the cycle is done, take a waddling break or continue working!');
                    break;
                case 5:
                    setDuckInstructions('This pattern will repeat 4 times, we believe in you! Then you’ll get a 25 min break.');
                    break;
                default:
                    setDuckInstructions('Click Continue to start your waddling journey!');
                    break;
            }
        }
    };
    
    return (
        <div className={styles.progressContainer}>
            <div>
                <Image 
                    className={styles.pondImage}
                    src={`/images/Steps/step${stepNum}.svg`}
                    width={430}
                    height={400}
                    alt={`pond indicating step ${stepNum}`}                
                />
            </div>

            <div className={styles.duckContainer}>
                <Image
                    className={styles.duckImage}
                    src={`/images/Ducks/Duck${stepDuck}.svg`}
                    width={175}
                    height={175}
                />
                <p className={styles.duckInstructions}>{duckInstructions}</p>
            </div>

            {clickCount === 0 && (
                <div className={styles.nameContainer}>
                    <input 
                    className={styles.nameInput}
                    type="text" 
                    placeholder="Enter your name"
                    value={userName}
                    onChange={handleNameChange}
                    />
                </div>
            )}
            
            <div className={styles.instructionContainer}>
                
                {clickCount == 1 ? (
                    <div className={styles.WaddleContainer}>
                        <h5>What is WaddleOn?</h5>
                        <p>WaddleOn boosts productivity by breaking tasks into 25-minute intervals followed by short breaks, <span className={styles.wadBold}>preventing burnout and maintaining focus.</span> </p>
                        <p>We help <span className={styles.wadBold}>optimize work or study sessions,</span> helping you achieve more in less time.</p>
                    </div>
                ):(
                    <div></div>
                )}
                {clickCount == 2 ? (
                    <div className={styles.WaddleContainer}>
                        <h5>What is Waddle Pog?</h5>
                        <p>WaddleOn boosts productivity by breaking tasks into 25-minute intervals followed by short breaks, <span className={styles.wadBold}>preventing burnout and maintaining focus.</span> </p>
                        <p>We help <span className={styles.wadBold}>optimize work or study sessions,</span> helping you achieve more in less time.</p>
                    </div>
                ):(
                    <div></div>
                )}
                {clickCount < 3 ? (
                    <div></div>
                ) : (
                    <Image
                    className={styles.placeholder}
                    src={`/images/placeholder.png`}
                    width={100}
                    height={100}
                    />
                )}
            </div>
            
            {clickCount < 7 ? (
                <button onClick={nextStep} className={styles.nextButton}>
                    Continue
                </button>
            ) : (
                <Link href="./TimerPage">
                    <button className={styles.nextButton}>
                         Continue
                    </button>
                </Link>
                
            )}

            {clickCount < 2 ? (
                <div className={styles.skipContainer}>
                    <button className={styles.skipButton}>
                        <Link href="/TimerPage" className={styles.link}>Skip Tutorial</Link>
                    </button>
                </div>
            ) : (
                <button onClick={goBack} className={styles.backButton}>
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </button>
            )
            }

        </div>
    );
}

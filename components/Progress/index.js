import { useEffect, useState } from 'react';
import styles from "./Progress.module.css";
import Image from "next/image";
import Link from 'next/link';
import useLocalStorage from 'use-local-storage';

import TasksOnBoard from '../TasksOnboard/TasksOnboard';
import DucksAnim from '../DucksAnim/DucksAnim';

export default function Progress() {
    const [stepNum, setStepNum] = useState(1);
    const [stepDuck, setStepDuck] = useState(1);
    const [clickCount, setClickCount] = useState(0);
    const [duckInstructions, setDuckInstructions] = useState('Hey Waddler,\nWhat\'s your name?');
    const [userName, setUserName] = useState('');
    const [name, setName] = useLocalStorage("name", userName)
    const [showArrow, setShowArrow] = useState(false);
    const cycleNumber = 0;

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setUserName(newName);
        setName(newName);
        setShowArrow(true)
    };


    const nextStep = () => {
        if (stepNum < 8) {
            setStepNum(stepNum + 1);
            console.log(stepNum)
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
                setDuckInstructions('Well done!\n This will begin the first 25 minute timer');
                break;
            case 4:
                setDuckInstructions('Once the cycle is done, take a waddling break or continue working!');
                break;
            case 5:
                setDuckInstructions('This pattern will repeat 4 times, we believe in you! Then you’ll get a 25 minute break.');
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
                    setDuckInstructions('Well done!\n This will begin the first 25 minute timer');
                    break;
                case 4:
                    setDuckInstructions('Once the cycle is done, take a waddling break or continue working!');
                    break;
                case 5:
                    setDuckInstructions('This pattern will repeat 4 times, we believe in you! Then you’ll get a 25 minute break.');
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
                    alt="a pond that will add more wheat to it the further down the onboarding you go"
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
                        onKeyDown={handleNameChange}
                        tabindex="1"
                    />
                    {showArrow && (
                        <div className={styles.proceed} onClick={nextStep}>

                            <i class="fa fa-arrow-right" aria-hidden="true" className={styles.arrow}></i>
                        </div>
                    )
                    }
                </div>
            )}

            <div className={styles.instructionContainer}>

                {clickCount == 1 ? (
                    <div className={styles.WaddleContainer}>
                        <h5>What is WaddleOn?</h5>
                        <p>WaddleOn boosts productivity by breaking tasks into 25-minute intervals followed by short breaks, <span className={styles.wadBold}>preventing burnout and maintaining focus.</span> </p>
                        <p>We help <span className={styles.wadBold}>optimize work or study sessions,</span> helping you achieve more in less time.</p>
                        <Link href="/pomStats" className={styles.statsLink}>Learn more</Link>
                    </div>
                ) : (
                    <div></div>
                )}

                {clickCount == 2 || clickCount == 3 ? (
                    <div className={styles.tasksPosition}>
                        <TasksOnBoard tabindex="2" number={cycleNumber} click={clickCount} />
                    </div>
                ) : (
                    <div></div>
                )}


                {clickCount == 4 ? (
                    <div className={styles.floatContainer}>
                        <div className={styles.pomodoro}>
                            <div className={styles.highlight}></div>
                            <div className={styles.highlightTwo}></div>
                            <div className={styles.shadow}></div>
                            <div>
                                <div className={styles.timer}>25:00</div>
                            </div>
                        </div>
                        <div className={styles.floatHole}>
                            <view className={`${styles.WaddleContainer} ${styles.ducksFloat}`}>
                                <DucksAnim tabindex="3" alt="animation of ducks in the water" />
                            </view>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}

                {clickCount == 5 ? (
                    <div className={styles.floatContainer}>
                        <div className={styles.cycleCompleteContainer}>
                            <h4 className={styles.cycleCompleteHeader}>
                                Waddle Cycle Complete!
                            </h4>
                            <p>Take a Break!</p>
                            <div className={styles.ducksAnim}>
                                <Image src="/images/render_card.png" width={268} height={90} className={styles.ducksRender} alt="completed cycle"
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}

                {clickCount == 6 ? (
                    <div className={styles.floatContainer}>
                        <div className={styles.pomodoro}>
                            <div className={styles.highlight}></div>
                            <div className={styles.highlightTwo}></div>
                            <div className={styles.shadow}></div>
                            <div>
                                <div className={styles.timer}>25:00</div>
                            </div>
                        </div>
                        <div className={styles.floatHole}>
                            <view className={`${styles.WaddleContainer} ${styles.ducksFloat}`}>
                                <DucksAnim tabindex="3" alt="animation of ducks in the water" />
                            </view>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>

            <div className={styles.continueButton}>
                {clickCount < 6 ? (
                    <button onClick={nextStep} className={styles.nextButton} tabindex="4">
                        Continue
                    </button>
                ) : (
                    <button className={styles.nextButton}>
                        <Link href="./doneOnboard" tabindex="4" className={styles.linkss}>Continue</Link>
                    </button>
                )}
            </div>

            <div className={styles.buttonsContainer}>
                {clickCount < 2 ? (
                    <div className={styles.skipContainer}>
                        <button className={styles.skipButton}>
                            <Link href="/TimerPage" className={styles.link} tabindex="5">Skip Tutorial</Link>
                        </button>
                    </div>
                ) : (
                    <button onClick={goBack} className={styles.backButton} tabindex="6">
                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                    </button>
                )
                }

            </div>
        </div>

    );
}

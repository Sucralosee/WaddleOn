import React from "react";
import styles from "./pomodoro.module.css"
import { useState, useEffect } from "react";


//Pomodoro timer base conceived from: https://www.youtube.com/watch?v=9z1qBcFwdXg
export default function Pomodoro() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false)
    const [startButton, setStartButton] = useState(true)
    const [cycleNumber, setCycleNumber] = useState(0)

    useEffect(() => {
        let interval;
        if (startButton) {
            interval = setInterval(() => {
                clearInterval(interval);

                if (seconds === 0) {
                    //Checking if seconds @ 0, if minutes are 0 (completed cycle)
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    } else {
                        let minutes = displayMessage ? 24 : 4; //24 = Start of Studying, dont show message //4 = Start of break, show message
                        let seconds = 59;

                        setSeconds(seconds);
                        setMinutes(minutes);
                        setDisplayMessage(!displayMessage)
                        setCycleNumber(cycleNumber + 1)
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000)
        } else {
            //https://stackoverflow.com/questions/61923862/how-to-pause-a-setinterval-countdown-timer-in-react
            clearInterval(interval)
            setSeconds(seconds)
            setMinutes(minutes)
        }

        return () => clearInterval(interval);
    }, [seconds, startButton, displayMessage, cycleNumber]);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    const toggleTimer = () => {
        setStartButton(!startButton)
    }

    return (
        <>
            <div className={styles.pomodoro}>

                    <div>
                        <div className={styles.message}>
                            {displayMessage && <div>Break time! New session starts in:</div>}
                        </div>
                        <div className={styles.timer}>{timerMinutes}:{timerSeconds}</div>
                        <div>{cycleNumber}</div>
                    </div>
                <button onClick={toggleTimer}>Toggle</button>
            </div>
        </>
    )
}
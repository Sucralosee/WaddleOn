import styles from "./Quiz.module.css";
import React, { useState } from 'react';


export default function Quiz({ questions, currentQuestion, answers, onAnswer }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleAnswer = (answer) => {
        setSelectedOption(answer);
        onAnswer(answer);
    };

    //creating a variable to track the length of the progress from the prop of the quiz then shoving it into the width stylization to show user progress
    var progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
        <>
            <div className={styles.quiz}>
                <div className={styles.line}style={{ width: `${progress}%` }}></div>
                <div className={styles.questionContainer}>
                    <h2 className={styles.question}>{questions[currentQuestion].question}</h2>
                    <div className={styles.options}>
                        {questions[currentQuestion].options.map((option, index) => (
                            <button className={`${styles.optionButt} ${selectedOption === option ? styles.clicked : ''}`} key={index} onClick={() => handleAnswer(option)}>{option}</button>))}
                    </div>
                </div>
                {currentQuestion > 0 && (
                    <div className={styles.buttonContainer}>
                    </div>
                )}
            </div>
        </>
    );
}
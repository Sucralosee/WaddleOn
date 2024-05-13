import styles from "./Quiz.module.css";
import React, { useState } from 'react';


export default function Quiz({ questions, currentQuestion, answers, onAnswer }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleAnswer = (answer) => {
        setSelectedOption(answer);
        onAnswer(answer);
    };

    return (
        <>
            <div className={styles.quiz}>
                <div className={styles.line}></div>
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
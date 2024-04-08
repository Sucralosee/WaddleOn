import styles from "@/styles/Summary.module.css";
import Back from "@/components/BackButton";
import House from "@/components/HomeButton";
import React, { useState } from 'react';
import Quiz from "@/components/QuizFold";
import { useRouter } from 'next/router';
//useRouter redirects to another file https://nextjs.org/docs/app/building-your-application/routing/redirecting#userouter-hook

export default function Summary() {
  const router = useRouter();

  const questions = [
    {
      question: "How are you feeling?",
      options: ["Adequate", "Moderate", "Great"]
    }, 
    {
      question: "How much did you enjoy the work in the cycle?",
      options: ["Adequate", "Moderate", "Great"]
    },
    {
      question: "Rate the quality of your break(s)",
      options: ["Adequate", "Moderate", "Great"]
    },
    {
      question: "How satisfied are you with your work pace? ",
      options: ["Adequate", "Moderate", "Great"]
    },   
  ];
  //setting up array to use for the quiz component nnshiiiii

  const [answers, setAnswers] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);


  const handleNextQuestion = (answer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
    setQuestionIndex(questionIndex + 1);
  }

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer) => {
      if (answer === "Adequate") {
        score += 1;
      } else if (answer === "Moderate") {
        score += 2;
      } else if (answer === "Great"){
        score += 3;
      }
    });
    return score;
  }

  const handlePreviousQuestion = () => {
    setQuestionIndex(questionIndex - 1);
  };

  const renderCurrentPage = () => {
    if (answers.length === 0 || questionIndex < questions.length) {
      return (
        <div>
          <Quiz 
          questions={questions}
          currentQuestion={questionIndex}
          answers={answers}
          onAnswer={handleNextQuestion}/>
          <div className={styles.buttonCont}>
            {questionIndex > 0 && (
              <Back className={styles.backButton} onClick={handlePreviousQuestion} />
            )}
          </div>
        </div>
      );
    } else {
      const score = calculateScore();
      if (score >= 9) {
        router.push('/summaryMallard');
      } else if (score >= 5) {
        router.push('/summaryBlueBill');
      } else {
        router.push('/summaryRuddy');
      }
    }
  };

  return (
    <div className={styles.backgroundGrad}>
      <main className={styles.summaryOne}>
        <div className={styles.homeButton}>
          <House/>
        </div>
          <div className={styles.duckImage}><h2>image placeholder</h2></div>
              {renderCurrentPage()}
            <div className={styles.buttonContainer}>
            </div> 
            <div className={styles.navBarDummy}>
              <div className={styles.playButt}></div>
            </div>          
      </main></div>

  );
}

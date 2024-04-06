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
      options: ["adequate", "moderate", "great"]
    }, 
    {
      question: "How much did you enjoy the work in the cycle?",
      options: ["adequate", "moderate", "great"]
    },
    {
      question: "Rate the quality of your break(s)",
      options: ["adequate", "moderate", "great"]
    },
    {
      question: "How satisfied are you with your work pace? ",
      options: ["adequate", "moderate", "great"]
    },   
  ];
  //array setting up data to use for the questions 

  const [answers, setAnswers] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);


  const handleNextQuestion = (answer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
    setQuestionIndex(questionIndex + 1);
  }
//

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
              <Back onClick={handlePreviousQuestion} />
            )}
          </div>
        </div>
      );
    } else {
      const score = answers.reduce((acc, answer) => acc + parseInt(answer), 0);
      if (score >= 6) {
        router.push('/summaryMallard');
      } else if (score >= 3) {
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

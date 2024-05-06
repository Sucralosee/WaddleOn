import styles from "@/styles/Summary.module.css";
import House from "@/components/HomeButton";
import React, { useState, useEffect } from 'react';
import Quiz from "@/components/QuizFold";
import Image from "next/image"
import NavBar from "@/components/Navbar/NavBar";
import DucksAnim from "@/components/DucksAnim/DucksAnim";
import { useRouter } from 'next/router';
import Link from "next/link";
//useRouter redirects to another file https://nextjs.org/docs/app/building-your-application/routing/redirecting#userouter-hook

export default function Summary() {
  const router = useRouter();

  const questions = [
    {
      question: "How are you feeling?",
      options: ["Fatigued", "Neutral", "Energized"]
    },
    {
      question: "How much did you enjoy the work in the cycle?",
      options: ["Barely", "Somewhat", "Fully"]
    },
    {
      question: "Rate the quality of your break(s)",
      options: ["Unsatisfactory", "Decent", "Refreshing"]
    },
    {
      question: "Describe your work pace? ",
      options: ["Slow and Frustrated", "Steady and Manageable", "Effecient and Productive"]
    },
  ];
  //setting up array to use for the quiz component

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
      if (answer === "Fatigued" || answer === "Barely" || answer === "Unsatisfactory" || answer === "Slow and Frustrated") {
        score                                                                                                              += 1;
      } else if (answer === "Neutral" || answer === "Somewhat" || answer === "Decent" || answer === "Steady and Manageable") {
        score += 2;
      } else if (answer === "Energized" || answer === "Fully" || answer === "Refreshing" || answer === "Effecient and Productive") {
        score += 3;
      }
    });
    return score;
  }
  //had to put return score so itll calculate the result; it didnt work when i didnt put it idk...

  const renderProgressIndicator = () => {
    return (
      <div className={styles.progressIndicator}>
        {questionIndex + 1} of {questions.length}</div>
    )
  }

  const renderCurrentPage = () => {
    if (answers.length === 0 || questionIndex < questions.length) {
      return (
        <>
          <Quiz
            questions={questions}
            currentQuestion={questionIndex}
            answers={answers}
            onAnswer={handleNextQuestion} />
        </>

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
    <main className={styles.summaryOne}>
      <div className={styles.summaryContainer}>
        <div className={styles.homeButton}>
          <Link href="/TimerPage"><House/></Link>
        </div>
        <DucksAnim inlineSizing={{
                            position: "relative",
                            top: "-200px",
                            marginBottom: "-200px",
                            width: "430px",
                            height: "470px",
                            borderRadius: "0 0 8px 8px"
                        }} />        
          <div className={styles.buttonCont}>
            <NavBar />
          </div>
          <div className={styles.progressContainer}>
              {renderProgressIndicator()}
            </div> 
        {renderCurrentPage()}
      </div>
    </main>
  );
}

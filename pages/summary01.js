import styles from "@/styles/Summary.module.css";
import Back from "@/components/BackButton";
import House from "@/components/HomeButton";
import React, { useState } from 'react';
import Quiz from "@/components/QuizFold";
import Image from "next/image"
import { useRouter } from 'next/router';
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
      if (answer === "Fatigued" || answer === "Barely" || answer === "Unsatisfactory" || answer === "Slow and Frustrated") {
        score += 1;
      } else if (answer === "Neutral" || answer === "Somewhat" || answer === "Decent" || answer === "Steady and Manageable") {
        score += 2;
      } else if (answer === "Energized" || answer === "Fully" || answer === "Refreshing" || answer === "Effecient and Productive") {
        score += 3;
      }
    });
    return score;
  }
  //had to put return score so itll calculate the result; it didnt work when i didnt put it idk...

  const handlePreviousQuestion = () => {
    setQuestionIndex(questionIndex - 1);
  };
  //back button still not functioning properly ** fix later

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
          <div className={styles.quizProgress}>
            <div className={styles.buttonCont}>
              {questionIndex > 0 && (
                <Back className={styles.backButton} onClick={handlePreviousQuestion} />
              )}
            </div>
            <div className={styles.progressContainer}>
              {renderProgressIndicator()}
            </div>
          </div>

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
          <House />
        </div>
        <Image src="/images/ducksswim.png" width={430} height={450} />
        {renderCurrentPage()}
        <div className={styles.buttonContainer}></div>
      </div>
    </main>
  );
}

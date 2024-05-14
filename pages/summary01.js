import styles from "@/styles/Summary.module.css";
import React, { useState, useEffect } from 'react';
import Quiz from "@/components/QuizFold";
import NavBar from "@/components/Navbar/NavBar";
import DucksAnim from "@/components/DucksAnim/DucksAnim";
import { useRouter } from 'next/router';
import Link from "next/link";
import SettingsMenu from "@/components/SettingsMenu/SettingsMenu";
//useRouter redirects to another file https://nextjs.org/docs/app/building-your-application/routing/redirecting#userouter-hook
import Head from "next/head"


export default function Summary() {
  const router = useRouter();

  const questions = [
    {
      question: "How are you feeling?",
      options: ["Fatigued", "Neutral", "Energized"]
    },
    {
      question: "Did you enjoy the work in your cycle?",
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
  const [settings, setSettings] = useState(false);

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
        router.push('/summaryRuddy');
      } else if (score >= 5) {
        router.push('/summaryBlueBill');
      } else {
        router.push('/summaryMallard');
      }
    }
  };

  //settings
  useEffect(() => {
    const settingsIcon = document.querySelector(".fa-cog");

    const handleSettings = () => {
      setSettings(!settings);
    };

    if (settingsIcon) {
      settingsIcon.addEventListener("click", handleSettings);
    }

    return () => {
      if (settingsIcon) {
        settingsIcon.removeEventListener("click", handleSettings);
      }
    };
  }, []);

  const childToParent = (childData) => {
    setSettings(false);
    console.log("test");
  };


  return (
    <>
      <Head>
        <title>Waddle On | Quiz</title>
        <meta name="description" content="Waddle On the Pomodoro Timer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoDuck.ico" />
      </Head>
      <main className={styles.summaryOne}>
        {settings && <SettingsMenu childParent={childToParent} />}
        <div className={styles.summaryContainer}>
          <DucksAnim inlineSizing={{
            position: "relative",
            top: "-180px",
            marginBottom: "-200px",
            width: "430px",
            height: "470px",
            borderRadius: "0 0 19px 19px"
          }} />
          <div className={styles.progressContainer}>
            {renderProgressIndicator()}
          </div>
          {renderCurrentPage()}
        </div>
        <div className={styles.navPosition}>
          <NavBar />
        </div>
    </main>
    </>
   
  );
}

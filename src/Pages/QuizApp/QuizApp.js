import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Qbox from "../../Components/Qbox/Qbox";
import "./QuizApp.css";
import Clock from "../../Assets/Clock.png";
import { useNavigate } from "react-router-dom";
import SubmissionGuard from "../../Components/SubmissionGuard/SubmissionGuard"; 
import QuestionTracker from "../../Components/QuestionTracker/QuestionTracker";

const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
  }
  return shuffledArray;
};

const QuizApp = () => {
  const [list, setList] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(30 * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [visitedQuestions, setVisitedQuestions] = useState(new Set());
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const questionRefs = useRef([]);

  // Add question ref dynamically based on the number of questions
  useEffect(() => {
    questionRefs.current = questionRefs.current.slice(0, list.length);
  }, [list]);

  const handleSubmit = () => {
    setIsSubmitted(true);
    console.log("Quiz submitted!");
    const score = list.reduce((acc, question, index) => {
      return acc + (userAnswers[index] === question.correct_answer ? 1 : 0);
    }, 0);

    // Navigate to the report page with the quiz data
    navigate("/report", {
      state: {
        questions: list,
        userAnswers,
        score,
      },
      replace:true,
    });
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerInterval);
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const apiurl = `https://opentdb.com/api.php?amount=15`;
  const fetchData = async () => {
    try {
      const res = await axios.get(apiurl);
      const processedData = res.data.results.map((q) => ({
        ...q,
        options: shuffleArray([...q.incorrect_answers, q.correct_answer]),
      }));
      setList(processedData);
    } catch (error) {
      console.error("An error occurred!", error);
    }
  };

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('quizState'));
    if (savedState) {
      setList(savedState.list);
      setTimeRemaining(savedState.timeRemaining);
      setUserAnswers(savedState.userAnswers);
      setVisitedQuestions(new Set(savedState.visitedQuestions));
      setCurrentQuestion(savedState.currentQuestion);
    } else {
      fetchData();
    }
  }, []);

  useEffect(() => {
    // Save state to localStorage whenever the state changes
    localStorage.setItem(
      'quizState',
      JSON.stringify({
        list,
        timeRemaining,
        userAnswers,
        visitedQuestions: Array.from(visitedQuestions),
        currentQuestion,
      })
    );
  }, [list, timeRemaining, userAnswers, visitedQuestions, currentQuestion]);

  const updateAnswer = (questionIdx, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIdx]: selectedOption,
    }));
    setVisitedQuestions((prevVisited) => new Set(prevVisited).add(questionIdx));
  };
 

  const handleQuestionSelect = (index) => {
    setCurrentQuestion(index);
    // Scroll to the selected question
    if (questionRefs.current[index]) {
      questionRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="quizcontainer">
      {!isSubmitted ? (
        <>
          <div className="time">
            <img src={Clock} alt="Clock" />
            <p>{formatTime(timeRemaining)}</p>
          </div>
          <QuestionTracker
            totalQuestions={list.length}
            visitedQuestions={visitedQuestions}
            currentQuestion={currentQuestion}
            onQuestionSelect={handleQuestionSelect}
          />
          {list.map((q, idx) => (
            <Qbox
              key={idx}
              index={idx}
              question={q.question}
              correct={q.correct_answer}
              options={q.options}
              onSelectAnswer={updateAnswer}
            />
          ))}
          <SubmissionGuard
            list={list}
            userAnswers={userAnswers}
            onSubmit={handleSubmit}
          />
        </>
      ) : (
        <h2>Quiz Submitted!</h2>
      )}
    </div>
  );
};

export default QuizApp;

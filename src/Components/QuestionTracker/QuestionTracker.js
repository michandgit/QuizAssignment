import React from "react";
import "./QuestionTracker.css";

const QuestionTracker = ({ totalQuestions, visitedQuestions, currentQuestion, onQuestionSelect }) => {
  return (
    <div className="question-tracker">
      {Array.from({ length: totalQuestions }).map((_, index) => {
        const isVisited = visitedQuestions.has(index);
        const isActive = currentQuestion === index;

        return (
          <button
            key={index}
            className={`tracker-btn ${isActive ? "active" : ""} ${isVisited ? "visited" : "unvisited"}`}
            onClick={() => onQuestionSelect(index)}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default QuestionTracker;

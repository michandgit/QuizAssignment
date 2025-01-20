import React, { useState } from "react";
import "./ReportPage.css";
import { useLocation } from "react-router-dom";

const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

const ReportPage = () => {
    const location = useLocation();
  const { questions: list, userAnswers, score } = location.state;

  
  const decodedQuestions = list.map((q) => ({
    ...q,
    question: decodeHtml(q.question), 
  }));


  return (
    <div className="report-container">
      <div className="uinfo">
      <h2>Quiz Report</h2>
      <h2>Score: {score} / {list.length}</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {decodedQuestions.map((q, idx) => (
            <tr key={idx}>
              <td>{idx+1}. {q.question}</td>
              <td>{userAnswers[idx] || "Not Answered"}</td>
              <td>{q.correct_answer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportPage;

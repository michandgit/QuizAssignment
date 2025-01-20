import React, { useState } from "react";
import "./ReportPage.css";
import { useLocation, useNavigate } from "react-router-dom";

const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

const ReportPage = () => {
    const location = useLocation();
    const navigate = useNavigate(); 
  const { questions: list, userAnswers, score } = location.state;

  
  const decodedQuestions = list.map((q) => ({
    ...q,
    question: decodeHtml(q.question), 
  }));

    // Function to navigate to the home page
  const goHome = () => {
    navigate("/");
  };


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
     <button className="home-button" onClick={goHome}>Go to Home</button>
    </div>
  );
};

export default ReportPage;

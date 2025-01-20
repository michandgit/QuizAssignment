import React from "react";

const SubmissionGuard = ({ list, userAnswers, onSubmit }) => {
  const handleCheckAndSubmit = () => {
    const unansweredQuestions = list.some((_, index) => !userAnswers[index]);

    if (unansweredQuestions) {
      alert("Please answer all the questions before submitting!");
    } else {
      onSubmit(); // Call the submit function if all questions are answered
    }
  };

  return (
    <button className="sbmt" onClick={handleCheckAndSubmit}>
      Submit
    </button>
  );
};

export default SubmissionGuard;

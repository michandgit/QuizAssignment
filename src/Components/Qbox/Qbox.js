import React from "react";
import "./Qbox.css";

const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const Qbox = (props) => {
  const { question, index, options, onSelectAnswer } = props;

  const handleOptionChange = (e) => {
    onSelectAnswer(index, e.target.value); // Pass the selected option to the parent
  };

  const decodedQuestion = decodeHtml(question);

  return (
    <div className="box">
      <h2 id="ques">{index + 1}. {decodedQuestion}</h2>
      <ul id="ullist">
        {options.map((op, idx) => {
          return (
            <li key={idx}>
              <input
                type="radio" // Changed from checkbox to radio
                id={`option-${index}-${idx}`}
                name={`question-${index}`} // Same name for all options in the question
                value={op}
                onChange={handleOptionChange}
              />
              <label htmlFor={`option-${index}-${idx}`}>{op}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Qbox;

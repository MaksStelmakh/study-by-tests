import { useState } from "react";
import "./QuestionsContainer.css";
import Questions from "../Questions.jsx/Questions";

export default function QuestionsContainer({ data }) {
  const [indexOfPage, setIndexOfPage] = useState(0);
  return (
    <div className="quiz-container">
      <div className="question-number">
        <h3>
          Question
          <span>{indexOfPage + 1}</span>
          from
          <span>{data.length}</span>
        </h3>
      </div>
      <Questions
        question={data}
        indexOfPage={indexOfPage}
        setIndexOfPage={setIndexOfPage}
      />
    </div>
  );
}

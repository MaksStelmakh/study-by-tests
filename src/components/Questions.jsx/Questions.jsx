import { useState, useEffect } from "react";
import shortid from "shortid";
import "./Questions.css";

export default function Questions({ question, indexOfPage, setIndexOfPage }) {
  const [indexOfQuestion, setIndexOfQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completedAnswers, setCompletedAnswers] = useState([]);
  const [hitDublicate, setHitDublicate] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [indexOfClick, setIndexOfClick] = useState(null);
  const [clickOnAnswer, setClickOnAnswer] = useState(false);
  const [active, setActive] = useState(null);
  const answers = question.map((answers) => answers);
  const nextQuestion = () => {
    setClickOnAnswer(false);
    setIndexOfPage((state) => state + 1);
    setIndexOfQuestion((state) => state + 1);
  };

  const randomQuestion = () => {
    const randomNumber = Math.floor(Math.random() * question.length);
    if (indexOfPage === question.length) {
      quizOver();
    } else {
      if (completedAnswers.length > 0) {
        completedAnswers.forEach((item) => {
          console.log(item);
          if (item === randomNumber) {
            setHitDublicate(true);
          }
        });
        if (hitDublicate) {
          randomQuestion();
        } else {
          setIndexOfQuestion(randomNumber);
        }
      }
      if (completedAnswers === 0) {
        setIndexOfQuestion(randomNumber);
      }
    }
    // setCompletedAnswers((prevState) => [...prevState, indexOfQuestion]);
    setCompletedAnswers(indexOfQuestion);
  };

  const checkAnswer = (el) => {
    setActive(el.target.id);
    setIndexOfClick(
      question[indexOfQuestion].options.indexOf(el.target.textContent)
    );
  };
  console.log(active);
  const showAnswer = () => {
    const rightAnswer = question[indexOfQuestion].rightAnswer;
    setClickOnAnswer(true);
    if (indexOfClick === rightAnswer) {
      setScore((state) => state + 1);
      console.log("correct");
      setCorrect(true);
    } else {
      console.log("wrong");
      setCorrect(false);
    }
  };

  useEffect(() => {
    randomQuestion();
  }, [nextQuestion]);

  const quizOver = () => {
    console.log("Игра окончена");
  };
  return (
    <>
      <div>{question[indexOfQuestion].question}</div>
      <div className="options" onClick={checkAnswer}>
        {answers[indexOfQuestion].options.map((answer, index) => {
          return (
            <label
              key={shortid.generate()}
              style={{
                backgroundColor:
                  (clickOnAnswer && correct && active && "green") ||
                  (!correct && clickOnAnswer && active && "red"),
              }}
              id={index}
              htmlFor="accept"
            >
              <input type="checkbox" id="accept" required />

              {answer}
            </label>
          );
        })}
      </div>
      <div className="button">
        <button onClick={nextQuestion}>Next</button>
        <hr />
        <button onClick={showAnswer}>Answer</button>
      </div>
      <div id="answers-tracker"></div>
    </>
  );
}

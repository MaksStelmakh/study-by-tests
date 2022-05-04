import { useState } from "react";
import shortid from "shortid";
import "./Questions.css";

export default function Questions({ questions, indexOfPage, setIndexOfPage }) {
  const [indexOfQuestion, setIndexOfQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completedAnswers, setCompletedAnswers] = useState([]);
  const [hitDublicate, setHitDublicate] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [indexOfClick, setIndexOfClick] = useState(null);
  const [clickOnAnswer, setClickOnAnswer] = useState(false);
  const [active, setActive] = useState(null);
  const [selectAnswer, setSelectAnswer] = useState(false);

  const nextQuestion = () => {
    randomQuestion();
    // console.log(completedAnswers, "completedAnswers");
    setClickOnAnswer(false);
    setSelectAnswer(false);
    if (indexOfQuestion === questions.length + 1) {
      console.log("last");
    }
    setIndexOfPage((state) => state + 1);
    setIndexOfQuestion((state) => state + 1);
  };

  const randomQuestion = () => {
    const randomNumber = Math.floor(Math.random() * (questions.length - 1));
    if (completedAnswers.length === 0) {
      setIndexOfQuestion(randomNumber);
    }
    if (indexOfPage === questions.length) {
      console.log(2);
      quizOver();
    } else {
      if (completedAnswers.length > 0) {
        if (completedAnswers.includes(randomNumber)) {
          randomQuestion();
        } else {
          setIndexOfQuestion(randomNumber);
        }
        // if (item === randomNumber) {
        //   setHitDublicate(true);
        //   console.log(4);
        // };
        // if (hitDublicate) {
        //   console.log(5);
        //   randomQuestion();
      }
    }
    setCompletedAnswers((state) => [...state, indexOfQuestion]);
  };

  const checkAnswer = (el) => {
    setSelectAnswer(true);
    setActive(el.target.id);
    setIndexOfClick(
      questions[indexOfQuestion].options.indexOf(el.target.textContent)
    );
  };

  const showAnswer = () => {
    setSelectAnswer(false);
    const rightAnswer = questions[indexOfQuestion].rightAnswer;
    setClickOnAnswer(true);
    if (indexOfClick === rightAnswer) {
      setScore((state) => state + 1);
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };

  // useEffect(() => {
  //   randomQuestion();
  // }, [nextQuestion]);

  const quizOver = () => {
    console.log("Игра окончена");
  };

  window.addEventListener("load", () => randomQuestion());

  const answers = questions.map((answers) => answers);
  console.log(indexOfQuestion);
  console.log(questions[indexOfQuestion]);
  return (
    <>
      <div>{questions[indexOfQuestion].question}</div>
      <div className="options" onClick={checkAnswer}>
        {answers[indexOfQuestion].options.map((answer, index) => {
          return (
            <div
              key={shortid.generate()}
              style={{
                backgroundColor:
                  (Number(active) === indexOfClick &&
                    selectAnswer &&
                    "yellow") ||
                  (clickOnAnswer &&
                    correct &&
                    Number(active) === indexOfClick &&
                    "green") ||
                  (!correct &&
                    clickOnAnswer &&
                    Number(active) === indexOfClick &&
                    "red"),
              }}
              id={index}
              className="answers"
              htmlFor="accept"
            >
              {answer}
            </div>
          );
        })}
      </div>
      <div className="button">
        {indexOfPage === questions.length ? (
          <button
            type="button"
            onClick={() =>
              alert(
                `Поздравляю, вы пройшли тест с ${score} правильными ответами`
              )
            }
          >
            Finish
          </button>
        ) : (
          <button type="button" onClick={nextQuestion}>
            Next
          </button>
        )}

        <hr />
        <button type="button" onClick={showAnswer}>
          Answer
        </button>
      </div>
      <div id="answers-tracker"></div>
    </>
  );
}

//  <div
//    key={shortid.generate()}
//    style={{
//      backgroundColor:
//        (active && active === indexOfClick && selectAnswer && "yellow") ||
//        (clickOnAnswer &&
//          correct &&
//          active &&
//          active === indexOfClick &&
//          "green") ||
//        (!correct &&
//          clickOnAnswer &&
//          active &&
//          active === indexOfClick &&
//          "red"),
//    }}
//    id={index}
//    onClick={() => setSelectAnswer(true)}
//  >
//    {answer}
//  </div>;

import { useState } from "react";
import shortid from "shortid";
import {
  Answers,
  Correct,
  Wrong,
  Progress,
  NameQuestion,
  Button,
  ButtonContainer,
} from "./Questions.styled";
import Modal from "../Modal/Modal";
import VictoryPage from "../VictoryPage/VictoryPage";

export default function Questions({
  questions,
  indexOfPage,
  setIndexOfPage,
  restart,
  setOver,
  over,
}) {
  const [indexOfQuestion, setIndexOfQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completedAnswers, setCompletedAnswers] = useState([]);
  const [hitDublicate, setHitDublicate] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [indexOfClick, setIndexOfClick] = useState(null);
  const [clickOnAnswer, setClickOnAnswer] = useState(false);
  const [active, setActive] = useState(null);
  const [selectedEl, setSelectedEl] = useState(null);

  const nextQuestion = () => {
    randomQuestion();
    setClickOnAnswer(false);
    if (indexOfQuestion === questions.length) {
      console.log("last");
    }
    setIndexOfPage((state) => state + 1);
    setIndexOfQuestion((state) => state + 1);
  };

  const randomQuestion = () => {
    const randomNumber = Math.floor(Math.random() * questions.length);
    if (completedAnswers.length === 0) {
      setIndexOfQuestion(randomNumber);
    }
    if (indexOfPage === questions.length) {
      quizOver();
    }
    if (completedAnswers.length > 0) {
      if (completedAnswers.includes(randomNumber)) {
        setHitDublicate(true);
        randomQuestion();
        return;
      } else if (hitDublicate) {
        setHitDublicate(false);
        setIndexOfQuestion(randomNumber);
      }
    }
    setCompletedAnswers((state) => [...state, indexOfQuestion]);
  };

  const checkAnswer = (el) => {
    if (clickOnAnswer) {
      return;
    }
    setActive(el.target.id);
    setSelectedEl(el.target.textContent);
    setIndexOfClick(
      questions[indexOfQuestion].options.indexOf(el.target.textContent)
    );
  };
  console.log(active);
  const showAnswer = () => {
    const rightAnswer = questions[indexOfQuestion].rightAnswer;
    setClickOnAnswer(true);
    if (indexOfClick === rightAnswer) {
      setScore((state) => state + 1);
      setCorrect(true);
    } else {
      console.log("wrong");
      setCorrect(false);
    }
  };

  const overVictorine = () => {
    setOver(true);
  };

  const quizOver = () => {
    console.log("Игра окончена");
  };

  window.addEventListener("load", () => randomQuestion());

  const answers = questions.map((answers) => answers);
  // console.log(
  //   clickOnAnswer,
  //   correct,
  //   indexOfClick,
  //   indexOfClick === Number(active)
  // );
  // console.log(Number(active));
  // console.log(
  //   clickOnAnswer && correct && indexOfClick && indexOfClick === Number(active)
  //     ? "CORRECT"
  //     : ""
  // );
  return (
    <div>
      <NameQuestion>{questions[indexOfQuestion].question}</NameQuestion>
      <div className="options" onClick={checkAnswer}>
        {answers[indexOfQuestion].options.map((answer, index) => {
          return (
            <Answers
              key={shortid.generate()}
              id={index}
              isSelected={answer === selectedEl}
              isDisabled={clickOnAnswer}
            >
              {answer}
            </Answers>
          );
        })}
      </div>
      <ButtonContainer>
        {indexOfPage === questions.length - 1 ? (
          <Button type="button" onClick={overVictorine}>
            Finish
          </Button>
        ) : (
          <Button type="button" onClick={nextQuestion}>
            Next
          </Button>
        )}
        {clickOnAnswer &&
          correct &&
          indexOfClick &&
          indexOfClick === Number(active) && <Correct>CORRECT</Correct>}
        {clickOnAnswer && !correct && <Wrong>INCORRECT</Wrong>}
        <Button type="button" onClick={showAnswer}>
          Answer
        </Button>
      </ButtonContainer>
      <Progress
        style={{ width: `${(750 / questions.length) * indexOfPage}px` }}
        id="answers-tracker"
      ></Progress>
      {over && (
        <Modal>
          <VictoryPage
            score={score}
            restart={restart}
            setOver={setOver}
            setComplete={setCompletedAnswers}
            page={setIndexOfPage}
          />
        </Modal>
      )}
    </div>
  );
}

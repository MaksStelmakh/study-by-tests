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
  DivAnswer,
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
  level,
  completedAnswers,
  setCompletedAnswers,
  indexOfQuestion,
  setIndexOfQuestion,
  setLevel,
}) {
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [indexOfClick, setIndexOfClick] = useState(null);
  const [clickOnAnswer, setClickOnAnswer] = useState(false);
  const [active, setActive] = useState(null);
  const [selectedEl, setSelectedEl] = useState(null);
  const [rank, setRank] = useState(level - 1);

  const nextQuestion = () => {
    randomQuestion();
    setClickOnAnswer(false);
    setIndexOfPage((state) => state + 1);
    setIndexOfQuestion((state) => state + 1);
  };

  const randomQuestion = () => {
    const randomNumber = Math.floor(Math.random() * level);
    setCompletedAnswers((state) => [...state, randomNumber]);
    if (completedAnswers.length > 0) {
      if (completedAnswers.includes(randomNumber)) {
        randomQuestion();
        return;
      }
      setIndexOfQuestion(randomNumber);
    }
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

  window.addEventListener("load", () => randomQuestion());

  const answers = questions.map((answers) => answers);
  if (!questions[indexOfQuestion]) {
    randomQuestion();
    return;
  }

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
        {indexOfPage === level - 1 ? (
          <Button type="button" onClick={overVictorine}>
            Finish
          </Button>
        ) : (
          <Button type="button" onClick={nextQuestion}>
            Next
          </Button>
        )}
        <DivAnswer>
          {clickOnAnswer && correct && indexOfClick === Number(active) && (
            <Correct>CORRECT</Correct>
          )}
          {clickOnAnswer && !correct && <Wrong>INCORRECT</Wrong>}
        </DivAnswer>
        <Button type="button" onClick={showAnswer}>
          Answer
        </Button>
      </ButtonContainer>
      <Progress
        style={{ width: `${(700 / rank) * indexOfPage}px` }}
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
            level={level}
            setLevel={setLevel}
          />
        </Modal>
      )}
    </div>
  );
}

// const randomQuestion = () => {
//   const randomNumber = Math.floor(Math.random() * level);
//   setCompletedAnswers((state) => [...state, randomNumber]);
//   if (completedAnswers.length === 0) {
//     console.log("туть");
//     setIndexOfQuestion(randomNumber);
//   }
//   console.log(completedAnswers, 1);
//   if (completedAnswers.length > 0) {
//     console.log("tyt1");
//     if (completedAnswers.includes(randomNumber)) {
//       console.log("tyt2");
//       console.log(completedAnswers, 2);
//       randomQuestion();
//     } else {
//       setIndexOfQuestion(randomNumber);
//       setCompletedAnswers((state) => [...state, indexOfQuestion]);
//     }
//   }
// };

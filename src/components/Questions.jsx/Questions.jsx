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
  HomeProgress,
} from "./Questions.styled";
import Modal from "../Modal/Modal";
import VictoryPage from "../VictoryPage/VictoryPage";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

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
  setPaused,
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
    setPaused(true);
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
            Закiнчити
          </Button>
        ) : (
          <Button type="button" onClick={nextQuestion}>
            Наступне
          </Button>
        )}
        <DivAnswer>
          <CSSTransition
            in={clickOnAnswer && correct && indexOfClick === Number(active)}
            classNames="alert"
            timeout={500}
            unmountOnExit
          >
            <Correct>CORRECT</Correct>
          </CSSTransition>
          <CSSTransition
            in={clickOnAnswer && !correct}
            classNames="alert"
            timeout={500}
            unmountOnExit
          >
            <Wrong>INCORRECT</Wrong>
          </CSSTransition>
        </DivAnswer>
        <Button type="button" onClick={showAnswer}>
          Затвердити
        </Button>
      </ButtonContainer>
      <HomeProgress>
        <Progress
          style={{ width: `${(685 / rank) * indexOfPage}px` }}
          id="answers-tracker"
        ></Progress>
      </HomeProgress>
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

Questions.protoTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      options: PropTypes.array.isRequired,
      rightAnswer: PropTypes.number.isRequired,
    })
  ),
  indexOfPage: PropTypes.number.isRequired,
  setIndexOfPage: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,
  setOver: PropTypes.func.isRequired,
  over: PropTypes.bool.isRequired,
  level: PropTypes.number.isRequired,
  completedAnswers: PropTypes.array.isRequired,
  setCompletedAnswers: PropTypes.func.isRequired,
  indexOfQuestion: PropTypes.number.isRequired,
  setIndexOfQuestion: PropTypes.func.isRequired,
  setLevel: PropTypes.func.isRequired,
  setPaused: PropTypes.func.isRequired,
};

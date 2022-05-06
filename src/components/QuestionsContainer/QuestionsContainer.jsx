import { useState } from "react";
import { AnswersContainer, Form } from "./QuestionsContainer.styled";
import Questions from "../Questions.jsx/Questions";
import Timer from "../Timer/Timer";
import Modal from "../Modal/Modal";
import TimeOver from "../TimeOver/TimeOver";

export default function QuestionsContainer({ data }) {
  const [indexOfPage, setIndexOfPage] = useState(0);
  const [startQuest, setStartQuest] = useState(false);
  const [second, setSecond] = useState("");
  const [minute, setMinute] = useState("");
  const [level, setLevel] = useState(5);
  const [over, setOver] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [completedAnswers, setCompletedAnswers] = useState([]);
  const [indexOfQuestion, setIndexOfQuestion] = useState(0);

  const startingQuest = (el) => {
    el.preventDefault();
    const randomNumber = Math.floor(Math.random() * level);
    setIndexOfQuestion(randomNumber);
    setCompletedAnswers((state) => [...state, randomNumber]);
    setStartQuest(true);
  };
  const saveTime = (event) => {
    const { name, value } = event.target;
    if (name === "second") {
      setSecond(value);
    } else if (name === "minutes") {
      setMinute(value);
    } else if (name === "level") {
      setLevel(value);
    } else {
      alert("Something wrong!");
    }
  };
  return (
    <>
      {!startQuest && (
        <Form onSubmit={startingQuest}>
          Виберіть час та складність тесту!
          <hr />
          <p>Хвилини</p>
          <input
            type="number"
            onChange={saveTime}
            name="minutes"
            value={minute}
            max="59"
            min="0"
            title="Не более двух цифр"
            required
          />
          <p>Секунди</p>
          <input
            type="number"
            onChange={saveTime}
            name="second"
            max="59"
            min="0"
            value={second}
            title="Не более двух цифр"
            required
          />
          <p>Кількість питаннь</p>
          <select name="level" onChange={saveTime}>
            <option value="5" defaultValue>
              5 питаннь
            </option>
            <option value="10">10 питаннь</option>
            <option value="15">15 питаннь</option>
            <option value="25">25 питаннь</option>
          </select>
          <button type="submit">Start</button>
        </Form>
      )}
      {startQuest && (
        <div>
          <Timer
            minutes={Number(minute)}
            seconds={Number(second)}
            over={over}
            setOver={setOver}
          />
          <AnswersContainer>
            <div>
              <h3>
                Питання&nbsp;<span>{indexOfPage + 1}&nbsp;</span>з&nbsp;
                <span>{level}</span>
              </h3>
            </div>
            <hr />
            <Questions
              questions={data}
              indexOfPage={indexOfPage}
              setIndexOfPage={setIndexOfPage}
              restart={setStartQuest}
              setOver={setEndGame}
              over={endGame}
              level={level}
              completedAnswers={completedAnswers}
              setCompletedAnswers={setCompletedAnswers}
              indexOfQuestion={indexOfQuestion}
              setIndexOfQuestion={setIndexOfQuestion}
              setLevel={setLevel}
            />
          </AnswersContainer>
        </div>
      )}
      {over && (
        <Modal>
          <TimeOver
            restart={setStartQuest}
            setActive={setOver}
            page={setIndexOfPage}
            setCompletedAnswers={setCompletedAnswers}
            setLevel={setLevel}
          />
        </Modal>
      )}
    </>
  );
}

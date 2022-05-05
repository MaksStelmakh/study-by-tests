import { useState } from "react";
import { AnswersContainer } from "./QuestionsContainer.styled";
import Questions from "../Questions.jsx/Questions";
import Timer from "../Timer/Timer";
import Modal from "../Modal/Modal";
import TimeOver from "../TimeOver/TimeOver";

export default function QuestionsContainer({ data }) {
  const [indexOfPage, setIndexOfPage] = useState(0);
  const [startQuest, setStartQuest] = useState(false);
  const [second, setSecond] = useState("");
  const [minute, setMinute] = useState("");
  const [over, setOver] = useState(false);
  const [endGame, setEndGame] = useState(false);

  const startingQuest = (el) => {
    el.preventDefault();
    setStartQuest(true);
  };
  const saveTime = (event) => {
    const { name, value } = event.target;
    if (name === "second") {
      setSecond(value);
    } else if (name === "minutes") {
      setMinute(value);
    } else {
      alert("Something wrong!");
    }
  };

  return (
    <>
      {!startQuest && (
        <form onSubmit={startingQuest}>
          <p>Minutes</p>
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
          <p>Seconds</p>
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
          <button type="submit">Start</button>
        </form>
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
                <span>{data.length}</span>
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
            />
          </AnswersContainer>
        </div>
      )}
      {over && (
        <Modal>
          <TimeOver restart={setStartQuest} setActive={setOver} />
        </Modal>
      )}
    </>
  );
}

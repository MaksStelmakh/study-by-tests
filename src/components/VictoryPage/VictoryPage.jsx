import { ModalWindow } from "./VictoryPage.styled";
import { useState } from "react";

export default function VictoryPage({
  score,
  setOver,
  restart,
  setComplete,
  page,
  level,
  setLevel,
}) {
  const [result, setResult] = useState((score / level) * 100);
  const handleBackdropClick = (event) => {
    setOver(false);
    restart(false);
    setComplete([]);
    page(0);
    setLevel(5);
  };
  return (
    <ModalWindow>
      <h2>
        {result > 50
          ? `Вітаємо з вдалим завершенням тесту, ви відповіли правильно на
        ${(score / level) * 100}% запитаннь`
          : `Нажаль ви успішно відповіли лише на ${
              (score / level) * 100
            }% запитаннь`}
      </h2>
      <p>
        Якщо ви хочете покращити свій результат, натисніть кнопку 'Спробувати
        ще' та спробуйте пройти тест знову
      </p>
      <p>Успіхів!</p>
      <hr />
      <button onClick={handleBackdropClick}>Спробувати ще</button>
    </ModalWindow>
  );
}

import { ModalWindow } from "./VictoryPage.styled";
import { useState } from "react";
import PropTypes from "prop-types";

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
          ? `Вiтаємо з вдалим завершенням тесту, ви вiдповiли правильно на
        ${Math.round((score / level) * 100)}% запитаннь`
          : `Нажаль ви успiшно вiдповiли лише на ${Math.round(
              (score / level) * 100
            )}% запитаннь`}
      </h2>
      <p>
        Якщо ви хочете покращити свiй результат, натиснiть кнопку 'Спробувати
        ще' та спробуйте пройти тест знову
      </p>
      <p>Успiхiв!</p>
      <hr />
      <button onClick={handleBackdropClick}>Спробувати ще</button>
    </ModalWindow>
  );
}

VictoryPage.protoTypes = {
  score: PropTypes.number.isRequired,
  setOver: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,
  setComplete: PropTypes.func.isRequired,
  page: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  setLevel: PropTypes.func.isRequired,
};

import { ModalWindow } from "./TimeOver.styled";
import PropTypes from "prop-types";

export default function TimeOver({
  restart,
  setActive,
  page,
  setCompletedAnswers,
  setLevel,
}) {
  const handleBackdropClick = () => {
    setActive(false);
    restart(false);
    page(0);
    setCompletedAnswers([]);
    setLevel(5);
  };

  return (
    <ModalWindow>
      <h2>
        Нажаль ви вичерпали свiй час, натиснiть кнопку 'Спробувати знову' щоб
        пройти тест ще раз!
      </h2>
      <hr />
      <button onClick={handleBackdropClick}>Спробувати знову</button>
    </ModalWindow>
  );
}

TimeOver.protoTypes = {
  restart: PropTypes.func.isRequired,
  setActive: PropTypes.func.isRequired,
  page: PropTypes.func.isRequired,
  setCompletedAnswers: PropTypes.func.isRequired,
  setLevel: PropTypes.func.isRequired,
};

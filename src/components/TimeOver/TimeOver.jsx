import { ModalWindow } from "./TimeOver.styled";

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
        Нажаль ви вичерпали свій час, натисніть кнопку 'Спробувати знову' щоб
        пройти тест ще раз!
      </h2>
      <hr />
      <button onClick={handleBackdropClick}>Спробувати знову</button>
    </ModalWindow>
  );
}

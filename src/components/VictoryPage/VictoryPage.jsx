import { ModalWindow } from "./VictoryPage.styled";

export default function VictoryPage({
  score,
  setOver,
  restart,
  setComplete,
  page,
}) {
  const handleBackdropClick = (event) => {
    setOver(false);
    restart(false);
    setComplete([]);
    page(0);
  };

  return (
    <ModalWindow>
      <h2>
        Поздравляем, с успешным завершением, у вас {score} правильных ответов
      </h2>
      <button onClick={handleBackdropClick}>Начать сначала</button>
    </ModalWindow>
  );
}

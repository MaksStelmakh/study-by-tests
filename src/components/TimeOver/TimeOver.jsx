import { ModalWindow } from "./TimeOver.styled";

export default function TimeOver({ restart, setActive }) {
  const handleBackdropClick = (event) => {
    setActive(false);
    restart(false);
  };

  return (
    <ModalWindow>
      <button onClick={handleBackdropClick}>Restart</button>;
    </ModalWindow>
  );
}

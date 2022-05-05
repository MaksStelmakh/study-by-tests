import { Background } from "./Modal.styled";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector(`#modal-root`);

export default function Modal({ children }) {
  return createPortal(<Background>{children}</Background>, modalRoot);
}

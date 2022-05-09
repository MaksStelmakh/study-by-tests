import { Background } from "./Modal.styled";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const modalRoot = document.querySelector(`#modal-root`);

export default function Modal({ children }) {
  console.log(children);
  return createPortal(<Background>{children}</Background>, modalRoot);
}

Modal.protoTypes = {
  children: PropTypes.object.isRequired,
};

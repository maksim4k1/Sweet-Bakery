import React from "react";
import styled from "styled-components";
import style from "./Modal.module.scss";

const ModalBg = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--main-dark-bg);
  z-index: 100;
  overflow-y: auto;
  transition: visibility 0.3s, opacity 0.3s;
`;
const ModalContainer = styled.div`
  max-width: 468px;
  width: 100%;
  height: min-content;
  padding: 55px 62px 60px;
  background: var(--main-bg-grey);
`;

function Modal (props) {
  return(
    <ModalBg onClick={event => event.target === event.currentTarget ? props.closeModal() : ""} className={props.isOpenModal ? style.openModal : style.closeModal}>
      <ModalContainer>
        {props.children}
      </ModalContainer>
    </ModalBg>
  );
}

export default Modal;
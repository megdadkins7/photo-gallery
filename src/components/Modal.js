import React from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  .InnerPopup {
    position: absolute;
    left: 35%;
    right: 25%;
    top: 5%;
    bottom: 25%;
    margin: auto;
  }
  img {
    max-height: 800px;
    padding-top: 15px;
    padding-bottom: 15px;
    box-shadow: inset 0 0 3px 1px #fe4555;
    background: linear-gradient(
      135deg,
      rgba(15, 25, 25, 1) 0%,
      rgba(10, 10, 10, 1) 100%
    );
  }
`;

function Modal({ img, name, handleClick }) {
  return (
    <StyledModal>
      <div className="InnerPopup">
        <img src={img} alt={name} onClick={handleClick} />
      </div>
    </StyledModal>
  );
}
export default Modal;

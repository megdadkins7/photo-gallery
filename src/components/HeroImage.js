import React, { useState } from "react";
import styled from "styled-components";

//components
import Modal from "./Modal";

const StyledHeroImage = styled.div`
  .ProfileImage {
    height: 330px;
    margin: 15px;
    cursor: pointer;
  }
`;

function HeroImage({ name, img }) {
  const [state, setState] = useState({
    showModal: false,
  });
  const handleClick = () => {
    setState({
      showModal: !state.showModal,
    });
  };
  return (
    <div>
      <StyledHeroImage>
        <img
          className="ProfileImage"
          src={img}
          alt={name}
          onClick={handleClick}
        />
      </StyledHeroImage>
      {state.showModal ? (
        <Modal img={img} name={name} handleClick={handleClick} />
      ) : null}
    </div>
  );
}
export default HeroImage;

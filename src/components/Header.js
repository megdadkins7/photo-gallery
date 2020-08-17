import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  h1 {
    margin-top: 10px;
    text-align: center;
    text-transform: uppercase;
    font-size: 70px;
    background: -webkit-linear-gradient(#fe4555, #0f1923);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Valorant</h1>
    </StyledHeader>
  );
}

export default Header;

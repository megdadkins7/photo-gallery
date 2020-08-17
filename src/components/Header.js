import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  h1 {
    color: #fe4555;
    text-transform: uppercase;
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

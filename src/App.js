import React from "react";
import styled from "styled-components";

//components
import Header from "./components/Header";
import Main from "./components/Main";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <StyledApp>
      <Header />
      <Main />
    </StyledApp>
  );
}

export default App;

import React from "react";

//components
import Header from "./components/Header";
import Gallery from "./components/Gallery";

//styles
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Gallery />
    </div>
  );
}

export default App;

import React from "react";
import NavBar from "./components/navbar/Nav";
import Main from "./components/Cards/Main";
import Cards from "./components/Cards/Cards";
import Card from "./components/Cards/Cards2";

import ComponenetA from "./Testing/ComponentA";

const App = () => {
  return (
    <>
<ComponenetA/>
    <NavBar />
      <Main />
      <Cards />
      <Card />  
    </>
  );
};

export default App;

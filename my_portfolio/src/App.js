import React from 'react';
import { Grommet } from "grommet"
import AppBar from "./components/AppBar"

const theme = {
  global: {
    colors:{
      brand: "#2637FF"
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px"
    }
  }
}


function App() {
  return (
   <Grommet theme = {theme}> 
    <AppBar> Hello World from Grommet</AppBar>
    </Grommet>
  );
}

export default App;

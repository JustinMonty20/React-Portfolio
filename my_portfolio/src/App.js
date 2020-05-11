import React, {useState} from 'react';
import { Grommet, Button, Heading, Box} from "grommet"
import {Notification} from "grommet-icons"
import AppBar from "./components/AppBar"
import GromBody from "./components/Body"



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
  const [showSideBar, setShowSideBar] = useState(false)
  return (
   <Grommet theme = {theme}> 
   <Box fill>
    <AppBar>
      <Heading level="3" margin="none">My App</Heading>
      <Button icon={<Notification/>} onClick={()=> {setShowSideBar(!showSideBar)}}></Button>
    </AppBar>
    <GromBody side = {showSideBar}/>
    </Box>
    </Grommet>
  );
}

export default App;

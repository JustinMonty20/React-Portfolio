import React from 'react';
import AboutMe from "./pages/About_Me"
import Contact from './pages/Contact';
import {Grommet} from "grommet"
import Projects from "./pages/Projects"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

const theme = {
    global: {
      colors:{
        brand: "#2637FF",
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
   <Grommet theme ={theme}>
    <Router>
      <Switch>
      <Route exact path = "/" component={AboutMe}/>
      <Route exact path = "/contact" component ={Contact}/>
      <Route exact path ="/projects" component ={Projects}/>
      </Switch>
    </Router>
  </Grommet>
  )
}

export default App;

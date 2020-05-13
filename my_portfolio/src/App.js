import React from 'react';
import AboutMe from "./pages/About_Me"
import Contact from './pages/Contact';
import {Grommet} from "grommet"
import Projects from "./pages/Projects"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"









function App() {
 return (
   <Grommet>
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

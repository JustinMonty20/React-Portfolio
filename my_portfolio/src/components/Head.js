import React from "react"
import {Nav, Anchor} from "grommet"
import {LinkedinOption, Github, Home} from "grommet-icons"
import {NavLink} from "react-router-dom"

const Head = () => {
    return (
     <Nav background="dark-1" justify ="around" align= "center" pad="small" direction="row" id ="nav">
            <NavLink className = "navlink hvr-grow" exact to ="/"><span><Home/></span></NavLink>
            <NavLink className = "navlink hvr-grow" exact to = "/about">About Me</NavLink>
            <NavLink className = "navlink hvr-grow" exact to = "/contact">Contact</NavLink>
            <NavLink className = "navlink hvr-grow" exact to = "/projects">Projects</NavLink>

            <Anchor href="https://github.com/JustinMonty20" className ="hvr-grow" target="_blank">
            <span><Github size ="large"/></span>
            </Anchor>

            <Anchor href= "https://linkedin.com/in/justin-montgomery-62a46a16a" className = "hvr-grow" target="_blank">
            <span><LinkedinOption size ="large"/></span>
            </Anchor>

     </Nav>
    )
}

export default Head
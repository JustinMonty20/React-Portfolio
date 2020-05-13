import React from "react"
import {Nav, Heading, Anchor} from "grommet"
import {LinkedinOption, Github} from "grommet-icons"
import {NavLink} from "react-router-dom"

const Head = () => {
    return (
     <Nav background="accent-4" justify ="around" align= "center" pad="small" direction="row">
     <Heading level="2">Justin Montgomery</Heading>
            <NavLink exact to = "/">About Me</NavLink>
            <NavLink exact to = "/contact">Contact</NavLink>
            <NavLink exact to = "/projects">Projects</NavLink>

            <Anchor href="https://github.com/JustinMonty20" target="_blank">
            <span><Github size ="large"/></span>
            </Anchor>

            <Anchor href= "https://linkedin.com/in/justin-montgomery-62a46a16a" target="_blank">
            <span><LinkedinOption size ="large"/></span>
            </Anchor>

     </Nav>
    )
}

export default Head
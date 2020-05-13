import React from "react"
import {Header, Heading} from "grommet"
import {LinkedinOption, Github} from "grommet-icons"
import {NavLink} from "react-router-dom"

const Head = () => {
    return (
     <Header background="accent-4" justify ="around" alignContent = "between" pad="small">
     <Heading level="2">Justin Montgomery</Heading>
            <NavLink exact to = "/">About Me</NavLink>
            <NavLink exact to = "/contact">Contact</NavLink>
            <NavLink exact to = "/projects">Projects</NavLink>

            <a href="https://github.com/JustinMonty20" target="_blank">
            <span><Github size ="large"/></span>
            </a>

            <a href= "https://linkedin.com/in/justin-montgomery-62a46a16a" target="_blank">
            <span><LinkedinOption size ="large"/></span>
            </a>

     </Header>
    )
}

export default Head
import React from "react"
import Education from "../components/Education"
import Foot from "../components/Foot"
import Head from "../components/Head"
import Container from "../components/Container"
import Interests from "../components/Interests"
import {Box} from "grommet"


const AboutMe = () => {
   return  (
       <Container>
            <Head/>
                <Box direction="column" align="center">
                    <Education/>
                    <Interests/>
                </Box>
            <Foot/>
       </Container>
   )
}

export default AboutMe
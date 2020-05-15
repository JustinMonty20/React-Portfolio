import React from "react"
import Education from "../components/Education"
import Foot from "../components/Foot"
import Head from "../components/Head"
import Container from "../components/Container"
import {Box} from "grommet"


const AboutMe = () => {
   return  (
       <Container>
            <Head/>
                <Box direction="row" justify="center">
                    <Education/>
                    <Box className="text-container" justify="center" margin="medium">
                    <p>hi</p>
                    </Box>
                </Box>
            <Foot/>
       </Container>
   )
}

export default AboutMe
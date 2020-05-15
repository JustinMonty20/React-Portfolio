import React from "react"
import Foot from "../components/Foot"
import Head from "../components/Head"
import Container from "../components/Container"
import Picture from "../components/Picture"
import {Box} from "grommet"


const Home = () => {
    return (       
            <div>   
                <Container>
                    <Head/>  
                    <Box direction= "row" justify="around">   
                        <Box alignSelf="center">
                            <div className="text-container">
                            <h3 id ="name">Hi I'm Justin</h3>
                                <p>Full Stack Web Developer</p> 
                                <p>Providing the core functionality that your site needs.</p>
                            </div>
                        </Box>
                        <Box>
                            <Picture/>
                        </Box>
                            <Foot/>
                    </Box>    
                </Container>
            </div>
        
    )
}

export default Home
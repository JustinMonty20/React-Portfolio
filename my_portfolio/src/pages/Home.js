import React from "react"
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
                            <h3 id ="name">Hi I'm Justin Montgomery -</h3>
                            <div >
                                <p>Web Developer</p> 
                                <p>dedicated to making beautiful sites that work</p>
                            </div>
                        </Box>
                        <Box >
                            <Picture/>
                        </Box>
                    </Box>    
                </Container>
            </div>
        
    )
}

export default Home
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
                            <h3>hey</h3>
                            <div >
                                <p>my name is justin montgomery</p>
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
import React from "react"
import Head from "../components/Head"
import Container from "../components/Container"
import Picture from "../components/Picture"
import {Box, Footer, Anchor} from "grommet"
import {Twitter, MailOption} from "grommet-icons"

const Home = () => {
    return (       
            <div>   
                <Container>
                    <Head/>  
                    <Box direction= "row" justify="around">   
                        <Box alignSelf="center">
                            <div id="text-container">
                            <h3 id ="name">Hi I'm Justin Montgomery</h3>
                                <p>Full Stack Web Developer</p> 
                                <p>Dedicated to making beautiful sites that work.</p>
                            </div>
                        </Box>
                        <Box >
                            <Picture/>
                        </Box>
                    </Box>    
                    <Footer background="dark-1" pad="medium" id="footer" justify="center">
                        <Anchor className="hvr-grow" href = "https://twitter.com/JustinMunty222" target="_blank"><span><Twitter size="medium"/></span></Anchor>
                        <Anchor className="hvr-grow" href="mailto:montgomerycodepro@gmail.com"><span><MailOption/></span></Anchor>
                    </Footer>
                </Container>
            </div>
        
    )
}

export default Home
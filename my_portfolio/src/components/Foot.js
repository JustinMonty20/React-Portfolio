import React from "react"
import {Footer,Anchor} from "grommet"
import {Twitter, MailOption} from "grommet-icons"


const Foot = () => {
    return(
            <Footer background="dark-1" pad="medium" id="footer" justify="center">
                <Anchor className="hvr-grow" href = "https://twitter.com/JustinMunty222" target="_blank"><span><Twitter size="medium"/></span></Anchor>
                <Anchor className="hvr-grow" href="mailto:montgomerycodepro@gmail.com"><span><MailOption/></span></Anchor>
            </Footer>
    )
}

export default Foot
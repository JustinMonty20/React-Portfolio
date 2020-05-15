import React from "react"
import {Box} from "grommet"

const styles = {
    liStyle: {
        margin:"5px"
    },
    title: {
        
    }
}

const whatILike = ["Python Programming","Chess","Building Computers","Soccer","Gardening","Cooking","Video Games","Reading","Finance"]

const Interests = () => {
    return (
        <Box className="text-container" margin="medium">
            <Box direction="column" align="center">
                <h4>Personal Interests</h4>
                <ul> 
                    {whatILike.map(item => <li style={styles.liStyle}>{item}</li>)}
                </ul>
            </Box>
        </Box>
    )
}

export default Interests
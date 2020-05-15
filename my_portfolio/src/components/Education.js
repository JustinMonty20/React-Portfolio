import React from "react"
import {Box} from "grommet"

const styles = {
    pStyle: {
        margin: "5px"
    }
}

const skills = ["HTML","CSS (FlexBox and Grid)","JavaScript","SQL and MongoDB","React","Node.js and Express"]
const Education = () => {
    return (
        <Box className ="text-container" margin="medium" justify="center">
                        <Box direction="column" align="center">
                            <h4>Education</h4>
                            <p style={styles.pStyle}>UNCC Full Stack Bootcamp. 12 week program.</p>
                            <p style ={styles.pStyle}>MERN stack.</p>

                            <p>Bachelor's in Business Adminstration from UNCC</p>
                        </Box>
                        
                        <Box margin="small">
                            <h4>Skills aquired:</h4>
                                <ul>
                                 {skills.map(skill=> <li>{skill}</li>)}
                                </ul>
                        </Box>
                    </Box>
    )
}

export default Education
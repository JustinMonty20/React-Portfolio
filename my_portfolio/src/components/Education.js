import React from "react"
import {Box} from "grommet"

const styles = {
    pStyle: {
        margin: "5px"
    }
}

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
                                    <li>HTML</li>
                                    <li>CSS (FlexBox and Grid)</li>
                                    <li>JavaScript</li>
                                    <li>SQL and MongoDB</li>
                                    <li>React</li>
                                    <li>Node.js and Express</li>
                                </ul>
                        </Box>
                    </Box>
    )
}

export default Education
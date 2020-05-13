import React from "react"
import {Image, Box} from "grommet"
import me from "../images/profile.png"

const Picture = () => {
    return (
        <Box height="large" width="large">
            <Image fit="contain" margin= "small" src={me}/>
        </Box>
    )
}

export default Picture
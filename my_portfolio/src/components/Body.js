import React from "react"
import { Box, Collapsible, Layer, Button} from "grommet"
import {FormClose} from "grommet-icons"



const Body = props => {
    return(
        <Box direction = "row" flex overflow={{horizontal:'hidden'}} >
            <Box flex align="center" justify='center'>
                app body
            </Box>
            
            { !props.side || props.sz !== 'small' ? (
                <Collapsible direction="vertical" open = {props.side}>
                    <Box 
                    flex
                    width='medium'
                    background='light-2'
                    elevation='small'
                    align='center'
                    justify='center'>
                    sidebar
                    </Box>
                </Collapsible>
            ) : 
            (<Layer>
                <Box background='light-2'
                tag='header'
                justify='end'
                align='center'
                direction='row'>
                    <Button icon ={<FormClose/>} 
                    onClick= {()=> props.setShow(false)}/>
                </Box>
                <Box fill
                background="light-2"
                align='center'
                justify='center'>
                sidebar
                </Box>    
            </Layer>
            )}
           
        </Box>
    )
}

export default Body
// const Body = props => {
//     return(
//         <Box direction = "row" flex overflow={{horizontal:'hidden'}} >
//             <Box flex align="center" justify='center'>
//                 app body
//             </Box>
            
//             { !props.side || props.sz !== 'small' ? (
//                 <Collapsible direction="vertical" open = {props.side}>
//                     <Box 
//                     flex
//                     width='medium'
//                     background='light-2'
//                     elevation='small'
//                     align='center'
//                     justify='center'>
//                     sidebar
//                     </Box>
//                 </Collapsible>
//             ) : 
//             (<Layer>
//                 <Box background='light-2'
//                 tag='header'
//                 justify='end'
//                 align='center'
//                 direction='row'>
//                     <Button icon ={<FormClose/>} 
//                     onClick= {()=> props.setShow(false)}/>
//                 </Box>
//                 <Box fill
//                 background="light-2"
//                 align='center'
//                 justify='center'>
//                 sidebar
//                 </Box>    
//             </Layer>
//             )}
           
//         </Box>
//     )
// }


// const AppBar = props => {
//     return (
//         <Box
//         tag = "header"
//         direction = "row"
//         align = "center"
//         justify = "between"
//         background = "brand"
//         pad = {{left: "medium",right: "small", vertical:"small"}}
//         elevation = "medium"
//         style = {{zIndex:"1"}}
//         {...props}
//         />
//     )
  

// <ResponsiveContext.Consumer>
// { size => (
//   <Box fill>
//     <AppBar>
//       <Heading level="3" margin="none">My App</Heading>
//       <Button icon={<Notification/>} onClick={()=> {setShowSideBar(!showSideBar)}}></Button>
//     </AppBar>
//     <GromBody 
//     side = {showSideBar} 
//     sz = {size} 
//     setShow = {setShowSideBar}/>
//   </Box>
// )}
//   </ResponsiveContext.Consumer>


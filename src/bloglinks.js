// Misconceptions of LBP

import React from "react";
//various components
import {Paper,Button,Typography,ButtonGroup,Box,AppBar,useMediaQuery,ButtonBase,BottomNavigation,Container,
} from "@mui/material";

//to use divider
import Divider from '@mui/material/Divider';
import Bloglinkspage from "./Bloglist.js";

function blogLinks() {

  return (
    //outer container
       <Box sx={{        display: 'flex', //creates flexbox to arrange content
        flexDirection: 'column', //each new content is added in a row
        justifyContent: 'space-evenly', //content starts at the end of the line (right)
        flexGrow:1,
        fontSize:1,
        width: ['100%','100%','80%']}}>
            <Typography sx={{fontSize:20, textAlign:'center'}}>Previous Blog Posts</Typography>
            <Button  sx={{display:'flex', flexDirection:['column','column','row',]}} href="/blog/2">
                <Box sx={{
                backgroundImage: 'url("pt1.jpg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: [50, 50, 60],
                height: [20, 20, 30],
                }}></Box>
                Post Name
            </Button>
            <Container><Divider orientation="horizontal" variant="middle" flexItem sx={{width: ['100%']}}/></Container>
            <Button  sx={{display:'flex', flexDirection:['column','column','row',]}} href="/blog/2">
                <Box sx={{
                backgroundImage: 'url("pt1.jpg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: [50, 50, 60],
                height: [20, 20, 30],
                }}></Box>
                Post Name
            </Button>
            <Container><Divider orientation="horizontal" variant="middle" flexItem sx={{width: ['100%']}}/></Container>
            <Button  sx={{display:'flex', flexDirection:['column','column','row',]}} href="/blog/2">
                <Box sx={{
                backgroundImage: 'url("pt1.jpg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: [50, 50, 60],
                height: [20, 20, 30],
                }}></Box>
                Post Name
            </Button>
            <Container><Divider orientation="horizontal" variant="middle" flexItem sx={{width: ['100%']}}/></Container>
            <ButtonGroup>
                <ButtonBase>nov2024</ButtonBase>
                <ButtonBase>oct2024</ButtonBase>
                <ButtonBase>sep2024</ButtonBase>
                <ButtonBase href="/bloglinkspage">...</ButtonBase>
            </ButtonGroup>



            
        </Box> /* links container */
        );
      }
      
      export default blogLinks;
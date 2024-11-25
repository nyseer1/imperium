import React from "react";
//various components
import {Paper,Button,Typography,ButtonGroup,Box,AppBar,useMediaQuery,ButtonBase,BottomNavigation,Container,
} from "@mui/material";
//for menu button
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu"; //for menu icon

//to use divider
import Divider from '@mui/material/Divider';

//blog pages

function Bloglist() {

  return (
    // basic div tag that uses css
    <Box>

      {/* content */}
       <Box sx={{        display: 'flex', //creates flexbox to arrange content
        flexDirection: 'column', //each new content is added in a row
        justifyContent: 'space-evenly', //content starts at the end of the line (right)
        flexGrow:1,
        fontSize:1,
        width: ['100%'],}}>
            <Typography sx={{fontSize:40, textAlign:'center'}}>Recent Blog Posts</Typography>
            
            <Box
        sx={{p: 2,
          display: "flex", //creates flexbox to arrange content
          flexDirection: ["column", "column", "row", "row", "row"], //each new content is added in a row if screen > md, columb if <= md
          justifyContent: "space-evenly", //content starts at the end of the line (right)
          flexGrow: 1, //stretch size of elements to fill unused space on line
          alignItems: "center", //centers items inside box horizontally (for when column)
        }}
      >
        <Box sx={{width:900}}>
          <Button  sx={{fontSize: 30, display:'flex', flexDirection:['column','column','row',]}} href="/blog/2">
                <Box sx={{
                backgroundImage: 'url("pt1.jpg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: [200, 200, 240],
                height: [80, 80, 120],
                }}></Box>
                Post Name
          </Button>
          <Container><Divider orientation="horizontal" variant="middle" flexItem sx={{width: ['100%']}}/></Container>
              <Button  sx={{fontSize: 30, display:'flex', flexDirection:['column','column','row',]}} href="/blog/2">
                  <Box sx={{
                  backgroundImage: 'url("pt1.jpg")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: [200, 200, 240],
                  height: [80, 80, 120],
                  }}></Box>
                  Post Name
              </Button>
              <Container><Divider orientation="horizontal" variant="middle" flexItem sx={{width: ['100%']}}/></Container>
              <Button  sx={{fontSize: 30, display:'flex', flexDirection:['column','column','row',]}} href="/blog/2">
                  <Box sx={{
                  backgroundImage: 'url("pt1.jpg")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: [200, 200, 240],
                  height: [80, 80, 120],
                  }}></Box>
                  Post Name
              </Button>
              <Container><Divider orientation="horizontal" variant="middle" flexItem sx={{width: ['100%']}}/></Container>
              <Button  sx={{fontSize: 30, display:'flex', flexDirection:['column','column','row',]}} href="/blog/2">
                  <Box sx={{
                  backgroundImage: 'url("pt1.jpg")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: [200, 200, 240],
                  height: [80, 80, 120],
                  }}></Box>
                  Post Name
              </Button>
              <Container><Divider orientation="horizontal" variant="middle" flexItem sx={{width: ['100%']}}/></Container>
              <Button  sx={{fontSize: 30, display:'flex', flexDirection:['column','column','row',]}} href="/blog/2">
                  <Box sx={{
                  backgroundImage: 'url("pt1.jpg")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: [200, 200, 240],
                  height: [80, 80, 120],
                  }}></Box>
                  Post Name
              </Button>
              <Container><Divider orientation="horizontal" variant="middle" flexItem sx={{width: ['100%']}}/></Container>
              <Button  sx={{fontSize: 30, display:'flex', flexDirection:['column','column','row',]}} href="/blog/2">
                  <Box sx={{
                  backgroundImage: 'url("pt1.jpg")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: [200, 200, 240],
                  height: [80, 80, 120],
                  }}></Box>
                  Post Name
              </Button>
              <Container><Divider orientation="horizontal" variant="middle" flexItem sx={{width: ['100%']}}/></Container>
          </Box>
          <ButtonGroup sx={{width: '1%'}}>
                <ButtonBase href="/bloglinkspage">...</ButtonBase>
            </ButtonGroup>


        
      </Box>
            
            



            
        </Box> 
      
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Box>
  );
}

export default Bloglist;

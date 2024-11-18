import React from "react";
//various components
import {
  Paper,
  Button,
  Typography,
  ButtonGroup,
  Box,
  AppBar,
  useMediaQuery,
  ButtonBase,
  BottomNavigation,
  Container,
} from "@mui/material";
//for menu button
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu"; //for menu icon

// to use themes
import { createTheme } from "@mui/material/styles";

//to use divider
import Divider from '@mui/material/Divider';

function Blog() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // default theme to get breakpoint values
  const theme = createTheme();
  // bool to check if the screen is breakpoint (size, ex: small sm medium md) or lower
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));

  return (
    // basic div tag that uses css
    <Box>
      {/* static means the appbar will hide itself when scrolling down */}
      <AppBar position="static">
        {/* black box with the logo and it works as a button to goto the homepage */}
        <Box
          sx={{
            background: "#000000",
            color: "#ffffff",
            border: 1,
            borderColor: "#000000",
            borderRadius: 2,
          }}
        >
          <ButtonBase sx={{ width: 140 }} href="/">
            <img
              src="logo.png"
              alt="logo"
              justifyContent="center"
              width="100"
              height="90"
            />
          </ButtonBase>
        </Box>

        {/*conditional rendering, if screen > md render , if <= md render this*/}
        {isMatch ? (
          <ButtonGroup>
            <ButtonBase href="/about">About</ButtonBase>
            <ButtonBase>What We Treat</ButtonBase>
            <ButtonBase href="/ourteam">Our Team</ButtonBase>
            <ButtonBase>Performance Training</ButtonBase>
            <ButtonBase>Blog</ButtonBase>
            <ButtonBase>
              <Box
                sx={{
                  background: "#",
                  color: "#000000",
                  border: 2,
                  borderColor: "#000000",
                  borderRadius: 1,
                  p: 1,
                  display: "inline",
                }}
              >
                Contact Us
              </Box>
            </ButtonBase>
          </ButtonGroup>
        ) : (
          <ButtonGroup>
            <ButtonBase
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon fontSize="large" />
            </ButtonBase>
          </ButtonGroup>
        )}

        {/* TODO: 
      outline contact button
      add links to rest of buttons
      add more content below, maybe in page components  
      */}
      </AppBar>

      {/* content */}
      <Typography sx={{
        fontSize: 30,
        fontWeight: 900,
        textAlign: 'center',
        p:2,
      }} >imperium blog</Typography>
      {/* blog heading box (description and image) */}
      <Box
        sx={{
          p: 2,
          display: "flex", //creates flexbox to arrange content
          flexDirection: ["column", "column", "row", "row", "row"], //each new content is added in a row if screen > md, columb if <= md
          justifyContent: "space-evenly", //content starts at the end of the line (right)
          flexGrow: 1, //stretch size of elements to fill unused space on line
          alignItems: "center", //centers items inside box horizontally (for when column)
        }}
      >
        {/* blog post descriprion */}
        <Typography sx={{ fontSize: 30, textAlign: "center", p:2 }}>
          <Paper
            sx={{
              fontSize: 15,
              width: [300,300,450],
              height: ['100%'],
              p: 2,
              bgcolor: '#eeeeee',
            }}
          >
            <Typography sx={{fontSize:30, fontWeight: '900', color:'#000000'}}>New blog post</Typography>
            This is the first blog post ever made! wow!
            Here is a sentence to make sure that paragraphs are working
          </Paper>
        </Typography>
        {/* blog post image */}
        <Box
          sx={{
            backgroundImage: 'url("pt1.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: [320, 320, 400],
            height: [210, 210, 240],
          }}
        ></Box>
      </Box>
      {/* container to center divider */}
      <Container>
        <Divider orientation="horizontal" variant="middle" flexItem sx={{width: [300,300,1000]}}/>
      </Container>

      {/* blog content box (blog content and other blog links) */}
      <Box
        sx={{
          p: 2,
          display: "flex", //creates flexbox to arrange content
          flexDirection: ["column", "column", "row", "row", "row"], //each new content is added in a row if screen > md, columb if <= md
          justifyContent: "space-evenly", //content starts at the end of the line (right)
          flexGrow: 1, //stretch size of elements to fill unused space on line
          alignItems: "center", //centers items inside box horizontally (for when column)
        }}
      >
        {/* blog post*/}
        <Typography sx={{ fontSize: 30, textAlign: "center", p:2 }}>
          <Paper
            sx={{
              fontSize: 15,
              width: ['90%','80%','80%'],
              p: 2,
            }}
          >
            {/* section 1 */}
            <Typography sx={{fontSize:20, fontWeight: '900', color:'#000000'}}>Subtitle</Typography>
            This is the first blog post ever made! wow!
            Here is a sentence to make sure that paragraphs are working
            Physical therapy, also known as physiotherapy, may include exercises,
             massages and various treatments based on physical stimuli (e.g. heat, 
             cold, electrical currents or ultrasound). The aim of physical therapy 
             is to relieve pain, help you move better or strengthen weakened muscles.
            <Divider orientation="horizontal" variant="middle" flexItem sx={{p:1,width: ['90%']}}/>
            {/* section 2 */}
            <Typography sx={{fontSize:20, fontWeight: '900', color:'#000000'}}>Subtitle</Typography>
            This is the first blog post ever made! wow!
            Here is a sentence to make sure that paragraphs are working
            Physical therapy, also known as physiotherapy, may include exercises,
             massages and various treatments based on physical stimuli (e.g. heat, 
             cold, electrical currents or ultrasound). The aim of physical therapy 
             is to relieve pain, help you move better or strengthen weakened muscles.
            <Divider orientation="horizontal" variant="middle" flexItem sx={{p:1,width: ['90%']}}/>
          </Paper>

       {/* blog links */}
       </Typography>
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
                <ButtonBase>...</ButtonBase>
            </ButtonGroup>



            
        </Box>
      </Box>
      
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>

      {/* test tertiary function, if small or lower, render this, else render this */}
      {/* {isMatch ? <h1>true</h1> : <h1>false</h1>} */}

      {/* menu popup window, only rendered on menu button click, any click away removes it*/}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Button sx={{ fontSize: [5, 10] }} href="/about" onClick={handleClose}>
          About
        </Button>
        <Button sx={{ fontSize: [5, 10] }} href="/about" onClick={handleClose}>
          What We Treat
        </Button>
        <Button sx={{ fontSize: [5, 10] }} href="/about" onClick={handleClose}>
          Our Team
        </Button>
        <Button sx={{ fontSize: [5, 10] }} href="/about" onClick={handleClose}>
          Performance Training
        </Button>
        <Button sx={{ fontSize: [5, 10] }} href="/about" onClick={handleClose}>
          Blog
        </Button>
        <Button sx={{ fontSize: [5, 10] }} href="/about" onClick={handleClose}>
          Contact Us
        </Button>
      </Menu>

      {/* footer */}
      <BottomNavigation
        sx={{
          bgcolor: "#50ac54",
          position: "static",
          width: "100%",
          bottom: "0%",
          height: "1%",
        }}
      >
        <Typography sx={{ fontSize: 20 }}>Imperium</Typography>
      </BottomNavigation> 
    </Box>
  );
}

export default Blog;

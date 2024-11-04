import React from 'react';
import ReactDOM from 'react-dom/client';
//various components
import { Breadcrumbs,Grid2, Paper, Toolbar, Container, Button, Link, Typography, ButtonGroup, Box, ListItem, AppBar, ImageListItemBar, useMediaQuery, ButtonBase, BottomNavigation } from '@mui/material';

import ImageList from '@mui/material/node/ImageList';
import ImageListItem from '@mui/material/node/ImageListItem';

//for menu button
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu'; //for menu icon

// to use themes
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Main(){

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
  const isMatch = useMediaQuery(theme.breakpoints.up('md'));                

  return (
  // basic div tag that uses css
  <Box>
    {/* static means the appbar will hide itself when scrolling down */}
    <AppBar position="static"> 
      {/* black box with the logo and it works as a button to goto the homepage */}
      <Box sx={{background: '#000000', color:'#ffffff'}}><ButtonBase sx={{width:140}}href="/"><img src="logo.png" alt="logo" justifyContent='center' width='100' height='90'/></ButtonBase></Box>

      {/*conditional rendering, if screen > md render , if <= md render this*/}
      {isMatch ? 
                <ButtonGroup>
                  <ButtonBase href='/about' >About</ButtonBase>
                  <ButtonBase >What We Treat</ButtonBase>
                  <ButtonBase >Our Team</ButtonBase>
                  <ButtonBase >Performance Training</ButtonBase>
                  <ButtonBase >Blog</ButtonBase>
                  <ButtonBase >Contact Us</ButtonBase>
                </ButtonGroup>
               : 
                <ButtonGroup>
                  <ButtonBase id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}>
                    <MenuIcon fontSize='large'/>
                  </ButtonBase>
                </ButtonGroup>
        }
      
      {/* TODO: 
      outline contact button
      add links to rest of buttons
      add more content below, maybe in page components  
      */}
    </AppBar>

    {/* content */}
    <Box sx={{p:2,
          display: 'flex', //creates flexbox to arrange content
          flexDirection: ['column','column', 'row', 'row', 'row' ], //each new content is added in a row if screen > md, columb if <= md
          justifyContent: 'space-evenly', //content starts at the end of the line (right)
          flexGrow:1, //stretch size of elements to fill unused space on line
          alignItems:'center', //centers items inside box horizontally (for when column)
          }}>
        <Typography sx={{fontSize:20}}>words</Typography><Box>words</Box>
    </Box>
    
    <Container><Paper>test paragraph</Paper> <Paper>test</Paper></Container>
      
    {/* test tertiary function, if small or lower, render this, else render this */}
    {/* {isMatch ? <h1>true</h1> : <h1>false</h1>} */}
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    {/* menu popup window, only rendered on menu button click, any click away removes it*/}
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Button href='/about'onClick={handleClose}>About</Button>
        <Button href='/about'onClick={handleClose}>What We Treat</Button>
        <Button href='/about'onClick={handleClose}>Our Team</Button>
        <Button href='/about'onClick={handleClose}>Performance Training</Button>
        <Button href='/about'onClick={handleClose}>Blog</Button>
        <Button href='/about'onClick={handleClose}>Contact Us</Button>
      </Menu>

      <BottomNavigation sx={{bgcolor:'#50ac54', position:'static', width:'100%', bottom: '0%', height: '1%'}}><Typography sx={{fontSize:20,}}>Imperium</Typography></BottomNavigation>
  </Box>
  );
}

export default Main;

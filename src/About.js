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

function About(){

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
  //(test) tertiary function, if small or lower, render this, else render this
  function TestScreenSmallOrLower(){
    const config = isMatch ? <h1>true</h1> : <h1>false</h1>
    return config;
  }
  function ListOrMenu(){
    const config = isMatch ?
                            <ButtonGroup>
                              <ButtonBase href='/' >Home</ButtonBase>
                              <ButtonBase >What We Treat</ButtonBase>
                              <ButtonBase >Our Team</ButtonBase>
                              <ButtonBase >Performance Training</ButtonBase>
                              <ButtonBase >Blog</ButtonBase>
                              <ButtonBase >
                    <Box sx={{background: '#', color:'#ffffff',
                    border:2,borderColor:'#000000', borderRadius:1,p:1, color:'#000000'}}>
                      Contact Us
                    </Box>
                  </ButtonBase>
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
                            
    return config;
  }

  return (
  // basic div tag that uses css
  <Box>
    {/* static means the appbar will hide itself when scrolling down */}
    <AppBar position="static"> 
      {/* black box with the logo and it works as a button to goto the homepage */}
      <Box sx={{background: '#000000', color:'#ffffff'}}><ButtonBase sx={{width:140}}href="/"><img src="logo.png" alt="logo" justifyContent='center' width='100' height='90'/></ButtonBase></Box>

      {/* set of buttons to goto different pages*/}
      <ListOrMenu />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Button sx={{fontSize:[5]}} href='/about'onClick={handleClose}>About</Button>
        <Button sx={{fontSize:[5]}}href='/about'onClick={handleClose}>What We Treat</Button>
        <Button sx={{fontSize:[5]}}href='/about'onClick={handleClose}>Our Team</Button>
        <Button sx={{fontSize:[5]}}href='/about'onClick={handleClose}>Performance Training</Button>
        <Button sx={{fontSize:[5]}}href='/about'onClick={handleClose}>Blog</Button>
        <Button sx={{fontSize:[5]}}href='/about'onClick={handleClose}>Contact Us</Button>
      </Menu> 
      {/* TODO: 
      try using divs or boxes to create a margin after the logo, or just make the buttons shift to the right
      add menu button
      use conditional function to render menu if screen small, list all buttons if screen large
      outline contact button
      add links to rest of buttons
      add more content below, maybe in page components  
      */}
      
    </AppBar>
    <Container><Paper>test paragraph</Paper> <Paper>test</Paper></Container>

    {/* <TestScreenSmallOrLower /> */}
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
     {/* footer */}
     <BottomNavigation sx={{bgcolor:'#50ac54', position:'static', width:'100%', bottom: '0%', height: '1%'}}><Typography sx={{fontSize:20,}}>Imperium</Typography></BottomNavigation>
  </Box>
  );
}

export default About;

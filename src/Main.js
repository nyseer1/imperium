import logo from './logo.svg';
import { Breadcrumbs,Grid2, Paper, Toolbar, Container, Button, Link, Typography, ButtonGroup, Box, ListItem, AppBar, ImageListItemBar, useMediaQuery, ButtonBase } from '@mui/material';
import { green } from '@mui/material/node/colors';
import ImageList from '@mui/material/node/ImageList';
import ImageListItem from '@mui/material/node/ImageListItem';

import { red } from '@mui/material/node/colors';
import { blue } from '@mui/material/node/colors';
// to use themes
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Main(){
  // default theme to get breakpoint values
  const theme = createTheme();
  // bool to check if the screen is breakpoint (size, ex: small sm medium md) or lower
  const isMatch = useMediaQuery(theme.breakpoints.up('md'));
  // tertiary function, if small or lower, render this, else render this
  function ScreenSmallOrLower(){
    const config = isMatch ? <h1>true</h1> : <h1>false</h1>
    return config;
  }

  return (
  // basic div tag that uses css
  <Box>
    {/* static means the appbar will hide itself when scrolling down */}
    <AppBar position="static"> 
      {/* black box with the logo and it works as a button to goto the homepage */}
      <Box sx={{background: '#000000', color:'#ffffff'}}><ButtonBase href="/"><img src="logo.png" alt="logo" justifyContent='center'/></ButtonBase></Box>

      {/* set of buttons to goto different pages*/}
      <ButtonBase >About</ButtonBase>
      <ButtonBase >What We Treat</ButtonBase>
      <ButtonBase >Our Team</ButtonBase>
      <ButtonBase >Performance Training</ButtonBase>
      <ButtonBase >Blog</ButtonBase>
      <ButtonBase >Contact Us</ButtonBase>
      {/* TODO: 
      try using divs or boxes to create a margin after the logo, or just make the buttons shift to the right
      add menu button
      use conditional function to render menu if screen small, list all buttons if screen large
      outline contact button
      add links to rest of buttons
      add more content below, maybe in page components  
      */}
    </AppBar>

    <ScreenSmallOrLower />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <Typography>bruh</Typography>
  </Box>
  );
}

export default Main;

import logo from './logo.svg';
import { Breadcrumbs,Grid2, Paper, Toolbar, Container, Button, Link, Typography, ButtonGroup, Box, ListItem, AppBar, ImageListItemBar, useMediaQuery } from '@mui/material';
import { green } from '@mui/material/node/colors';
import ImageList from '@mui/material/node/ImageList';
import ImageListItem from '@mui/material/node/ImageListItem';

import { red } from '@mui/material/node/colors';
import { blue } from '@mui/material/node/colors';
// to use themes
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme2 = createTheme({
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The default props to change
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});

function Main(){
  // default theme to get breakpoint values, bool check if at size small or below
  const theme = createTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up('sm'));

  function ScreenSmallOrLower(){
    const config = isMatch ? <h1>true</h1> : <h1>false</h1>
    return config;
  }

  

  return (
  <div>
    <AppBar position="static">bruh</AppBar>
    <ThemeProvider theme={theme2}>
      <Button>This button has disabled ripples.</Button>
   </ThemeProvider>
    <ScreenSmallOrLower />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <Typography>bruh</Typography>
  </div>
  );
}

export default Main;

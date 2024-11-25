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
import UndoIcon from '@mui/icons-material/Undo';

function Error(){

  return (
  // basic div tag that uses css
  <Box>

    {/* content */}
    <Box sx={{p:2,
          display: 'flex', //creates flexbox to arrange content
          flexDirection: ['column','column', 'row', 'row', 'row' ], //each new content is added in a row if screen > md, columb if <= md
          justifyContent: 'space-evenly', //content starts at the end of the line (right)
          flexGrow:1, //stretch size of elements to fill unused space on line
          alignItems:'center', //centers items inside box horizontally (for when column)
          }}>
        <Typography sx={{fontSize:50, textAlign:'center'}}>PAGE NOT FOUND<br/>
          <Button href="/" sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}><Typography sx={{p:1, fontSize:25}}>Back To Home</Typography><UndoIcon/></Button>
        </Typography>
          
    </Box>
    
      
    {/* test tertiary function, if small or lower, render this, else render this */}
    {/* {isMatch ? <h1>true</h1> : <h1>false</h1>} */}
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

  </Box>
  );
}

export default Error;

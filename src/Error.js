import React from 'react';
//various components
import { Box, Button, Typography } from '@mui/material';


//for menu button

// to use themes
import UndoIcon from '@mui/icons-material/Undo';

function Error(){

  return (
  // basic div tag that uses css
  <Box>

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
  </Box>
  );
}

export default Error;

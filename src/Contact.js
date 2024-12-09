import React from 'react';
//various components
import { Box, Button, Typography } from '@mui/material';


//for menu button

//to use divider slashbar

// to use themes
import UndoIcon from '@mui/icons-material/Undo';

// meta tags
import { Helmet } from 'react-helmet-async';

function Contact(){

  return (
  // basic div tag that uses css
  <Box>
    <Helmet>
      <title>Contact Us | Imperium Physical Therapy and Performance</title>
      <meta name="description" content="Get Orthopedic physical therapy for sports injuries, and injuries
       relating to muscles, bones, joints, ligaments, and tendons" />
      <meta name="keywords" content="ptp, pt, physical therapy, Orthopedic physical therapy" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    </Helmet>

    {/* content */}
    <Box sx={{p:2,
          display: 'flex', //creates flexbox to arrange content
          flexDirection: ['column','column', 'row', 'row', 'row' ], //each new content is added in a row if screen > md, columb if <= md
          justifyContent: 'space-evenly', //content starts at the end of the line (right)
          flexGrow:1, //stretch size of elements to fill unused space on line
          alignItems:'center', //centers items inside box horizontally (for when column)
          }}>
        <Typography sx={{fontSize:50, textAlign:'center'}}>Contact Us<br/>
          <Button href="tel:+5164901480" sx={{display:'flex', flexDirection:'row'}}><b>Phone</b> (516) 490-1480<UndoIcon/></Button>
          <Button href="tel:+5164904009" sx={{display:'flex', flexDirection:'row'}}><b>Fax</b> (516) 490-4009<UndoIcon/></Button>
          <Typography sx={{fontSize:30, textAlign:'center'}}>Our Address</Typography>
          <Button href='https://g.co/kgs/oaHpMAF' sx={{display:'flex', flexDirection:'row'}}><b></b>1897 Wantagh Ave<br/>Wantagh, NY 11793<UndoIcon/></Button>
          <br/>
          <Button href="/" sx={{display:'flex', flexDirection:'row'}}>Back To Home<UndoIcon/></Button>
        </Typography>
          
    </Box>

  </Box>
  );
}

export default Contact;

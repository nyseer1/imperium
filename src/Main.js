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
  Divider,
} from "@mui/material";

// for arrow icon
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// to use themes
import { createTheme } from "@mui/material/styles";
import { Helmet } from "react-helmet-async";

{/* <Helmet>
        <title>Imperium Physical Therapy and Performance</title>
        <meta name="description" content="Professional Physical Therapy" />
        <meta name="keywords" content="ptp, pt, physical therapy, professional" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
</Helmet> */}


function Main() {
  return (
    // basic div tag that uses css
    <Box>
      <Helmet>
        <title>Imperium Physical Therapy and Performance</title>
        <meta name="description" content="Professional Physical Therapy" />
        <meta name="keywords" content="ptp, pt, physical therapy, professional" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      </Helmet>
      
      
      

      {/* content */}
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
        
        <Box component="img" sx={{width: '25%' , height: '25%', borderRadius:'2%'}}
                  alt={"Physical Therapy Example"}
                  src={"Imperium_Physical_Therapy_and_Performance_Building.jpg"}/>
                  {/* default size if small or xsmall(so small phones will always see it at their full width), force 800 at medium or higher */}
        <Typography sx={{ fontSize: 20, textAlign: "center", p:1 , color:'#000000',width: ['100%','100%',800],}}> 
          Welcome to
          <Typography sx={{ fontSize: [20,20,50], textAlign: "center", p:1 }}>
            
            Imperium Physical Therapy<br/>& Performance
          </Typography>

          {/* paper elements are always spaced out so it dosent sit directly on the box*/}
          <Paper
            sx={{
              fontSize: [16,16,30],
              
              p: 3,
            }}
          >
            We are a team of licensed and experienced physical therapists
            dedicated to providing quality healthcare and individualized
            treatment plans to reduce pain, restore mobility and range of motion
            and to optimize functional potential.
          </Paper>
          <Button href="/contact" sx={{display:'flex', flexDirection:'row',justifyContent:'center', p:3}}><Typography >Contact Us</Typography> <ArrowForwardIosIcon/> </Button>
        </Typography>
      </Box>

      {/* content */}
      
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
        <Typography sx={{ fontSize: [20,18,20], textAlign: "center", p:1, color:'#000000' }}>
          Expert Physical Therapy 
          <Typography sx={{ fontSize: [25,32,50], textAlign: "center", p:1 }}>   
            Giving You the Power to<br/>Improve Your Life
          </Typography>
          
          <Paper
            sx={{
              fontSize: [16,16,30],
              
              p: 3,
            }}
          >
            All of the specialized clinicians at Imperium Physical Therapy and Performance are dedicated to provide you with the highest quality of care. 
          </Paper>
          <Button href="/ourteam" sx={{display:'flex', flexDirection:'row',justifyContent:'center', p:3}}><Typography sx={{fontSize:[20,30,50]}}>learn more</Typography> <ArrowForwardIosIcon/> </Button>
          <Divider sx={{p:1}}/>
          <br/>
         <Paper sx={{p:2}}>
          <Typography sx={{fontSize:20,color:'#000000'}}>
            -See us without a prescription
            <br/>
            -Individualized Physical Therapy experience
            <br/>
            -Accepts most Insurances
            <br/>
            -Appointment Available within 24 hours 
          </Typography>
          
         </Paper>
        </Typography>
        
        <Box component="img" sx={{width: '25%' , height: '25%', borderRadius:'2%'}}
                  alt={"Physical Therapy Example"}
                  src={"Physical_Therapy_Example1.JPG"}/>
        
      </Box>


      
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Box>
  );
}

export default Main;

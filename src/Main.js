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
} from "@mui/material";

// for arrow icon
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// to use themes
import { createTheme } from "@mui/material/styles";

function Main() {
  return (
    // basic div tag that uses css
    <Box>

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
        
        <Box component="img" sx={{width: '25%' , height: '25%'}}
                  alt={"Physical Therapy Example"}
                  src={"Imperium_Physical_Therapy_and_Performance_Building.jpg"}/>
        <Box
          sx={{
            backgroundImage: 'url("pt1.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            
            
          }}
        ></Box>
        
        <Typography sx={{ fontSize: 20, textAlign: "center", p:1 , color:'#000000',width: [400,400,800],}}>
          Welcome to
          <Typography sx={{ fontSize: 50, textAlign: "center", p:1 }}>
            
            Imperium Physical Therapy<br/>& Performance
          </Typography>
          <Paper
            sx={{
              fontSize: 30,
              
              p: 3,
            }}
          >
            We are a team of licensed and experienced physical therapists
            dedicated to providing quality healthcare and individualized
            treatment plans to reduce pain, restore mobility and range of motion
            and to optimize functional potential.
          </Paper>
          <Button href="/contact" sx={{display:'flex', flexDirection:'row',justifyContent:'center',fontSizze:20, p:3}}>Contact Us <ArrowForwardIosIcon/> </Button>
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
        <Typography sx={{ fontSize: 20, textAlign: "center", p:1, color:'#000000' }}>
          Expert Physical Therapy 
          <Typography sx={{ fontSize: 50, textAlign: "center", p:1 }}>
            Giving You the Power to
            <br/>
            Improve Your Life
          </Typography>
          
          <Paper
            sx={{
              fontSize: 30,
              width: 800,
              p: 3,
            }}
          >
            All of the specialized clinicians at Imperium Physical Therapy and Performance are dedicated to provide you with the highest quality of care. 
          </Paper>
          <Button href="/ourteam" sx={{display:'flex', flexDirection:'row',justifyContent:'center',fontSizze:20, p:3}}>Learn More <ArrowForwardIosIcon/> </Button>
        </Typography>
        
        <Box component="img" sx={{width: '25%' , height: '25%'}}
                  alt={"Physical Therapy Example"}
                  src={"Physical_Therapy_Example1.JPG"}/>
        <Box
          sx={{
            backgroundImage: 'url("pt1.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            
            
          }}
        ></Box>
        
      </Box>


      
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Box>
  );
}

export default Main;

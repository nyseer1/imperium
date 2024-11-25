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
        <Box
          sx={{
            backgroundImage: 'url("pt1.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: [250, 250, 500],
            height: [170, 170, 350],
          }}
        ></Box>
        <Typography sx={{ fontSize: 30, textAlign: "center" }}>
          Giving You the Power to
          <br />
          Improve Your Life
          <Paper
            sx={{
              fontSize: 15,
              width: 300,
              p: 2,
            }}
          >
            We are a team of licensed and experienced physical therapists
            dedicated to providing quality healthcare and individualized
            treatment plans to reduce pain, restore mobility and range of motion
            and to optimize functional potential.
          </Paper>
          <Button href="/ourteam" sx={{display:'flex', flexDirection:'row',fontSizze:20}}>Learn More <ArrowForwardIosIcon/> </Button>
        </Typography>
      </Box>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Box>
  );
}

export default Main;

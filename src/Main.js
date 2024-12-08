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
  Grid2, List, ListItem, ListItemIcon,ListItemText
} from "@mui/material";

import { green } from "@mui/material/node/colors";

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
      <Grid2 size={6}>
        <Grid2 item>
          <Typography color="primary" variant="subtitle1" textAlign='center'>
            Welcome to
          </Typography>
          <Typography variant="h4" textAlign='center'>
              Imperium Physical Therapy<br/>& Performance
          </Typography>
        </Grid2>
      </Grid2>


        <Grid2 container spacing={3} columns={{xs:2,sm:4,md:12}}>
          <Grid2 size={6}>
            <Grid2 item>{/* image */}
              <Box component="img" sx={{width: '20rem' , height: '20rem', borderRadius:'2%',border:1}}
                        alt={"Imperium_PTP_Building"}
                        src={"Imperium_Physical_Therapy_and_Performance_Building.jpg"}/>
            </Grid2>
          </Grid2>
          <Grid2 size={6}>
            <Grid2 item sx={{display:'flex',flexDirection:'column', justifyItems:'center',}}>
            <Paper>
              We are a team of licensed and experienced physical therapists
              dedicated to providing quality healthcare and individualized
              treatment plans to reduce pain, restore mobility and range of motion
              and to optimize functional potential.
            </Paper>

              <ButtonBase variant='greentext' href="/contact">
                Contact Us
              </ButtonBase>
            </Grid2>
          </Grid2>
          <Grid2 size={6}>
            <Grid2 item sx={{display:'flex',flexDirection:'column', justifyItems:'center',}}>
              <Typography color="primary" variant="subtitle1" textAlign='center'>
                Expert Physical Therapy
              </Typography>
              <Typography variant="h4" textAlign='center'>
                Giving You the Power to Improve Your Life<br/><br/>
              </Typography>

              <Paper >
                All of the specialized clinicians at Imperium Physical Therapy and Performance
                are dedicated to provide you with the highest quality of care.
              </Paper>
              <ButtonBase variant='greentext' href="/our-team">
                Learn More
              </ButtonBase>

            </Grid2>
          </Grid2>
          <Grid2 size={6}>
            <Grid2 item>{/* image */}
              <Box component="img" sx={{width: '20rem' , height: '30rem', borderRadius:'2%',border:1}}
                        alt={"Physical Therapy Service"}
                        src={"imperium_physical_therapy_services1.JPG"}/>
            </Grid2>
          </Grid2>

          <Grid2 size={6}>
            <Grid2 item>
            <Paper >
              <Typography >
                <List
                sx={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                }}
              >
                <ListItem divider>
                  <ListItemIcon>
                    <ArrowForwardIosIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="See us without a prescription"
                  />
                </ListItem>
                <ListItem divider>
                  <ListItemIcon>
                    <ArrowForwardIosIcon />
                  </ListItemIcon>
                  <ListItemText

                    primary="Individualized Physical Therapy experience"
                  />
                </ListItem>

                <ListItem >
                  <ListItemIcon>
                    <ArrowForwardIosIcon />
                  </ListItemIcon>
                  <ListItemText

                    primary="Accepts most Insurances"
                  />
                </ListItem>

              </List>
              </Typography>

            </Paper>

            </Grid2>
          </Grid2>


        </Grid2>


      <br/><br/><br/>
    </Box>
  );
}

export default Main;

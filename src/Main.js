import React from "react";
import "./index.css";
//various components
import {
  Box,
  ButtonBase,
  Grid2,
  Paper,
  Typography
} from "@mui/material";

import { green } from "@mui/material/node/colors";

//icons
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';

// to use themes
import { Alarm } from "@mui/icons-material";
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
        <title>Home | Imperium Physical Therapy and Performance</title>
        <meta name="description" content="Professional Physical Therapy" />
        <meta name="keywords" content="ptp, pt, physical therapy, Orthopedic physical therapy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      </Helmet>

      {/* content */}
      
      <Grid2 container sx={{pt:1, justifyContent:'center'}} columns={{xs:2,sm:4,md:12}}>
        <Grid2 size={6}>
          <Grid2 item >
            <Paper sx={{bgcolor:green[500], p:3, borderRadius:3, boxShadow:8, border:1}}>
              <Typography variant="subtitle1" textAlign='center' sx={{fontWeight:'200',fontSize:['0.8rem','1.5rem'], color:'#fafafa',letterSpacing: '2px',fontWeight:'900',textShadow:'#171 2px 2px 2px',fontFamily:'Arial, sans-serif' }}>
                Welcome to
              </Typography>
              <Typography variant="h6" textAlign='center' sx={{fontSize:['1.5rem','2rem'], fontWeight:300, letterSpacing: '1px',fontWeight:'900',textShadow:'#171 2px 2px 2px',fontFamily:'Arial, sans-serif' }}>
                Imperium Physical Therapy<br/>& Performance
              </Typography>
            </Paper>
          </Grid2>
        </Grid2>
      </Grid2>

      <Grid2 container spacing={0.5} sx={{pl:2,pr:2, justifyContent:'center'}} columns={{xs:2,sm:4,md:12}}>
        <Grid2 size={4}>
          <Grid2 item >
            <Paper sx={{ p:3, borderRadius:3, boxShadow:5, border:0}}>
              

              
              <Typography variant="h6" textAlign='center' sx={{fontSize:['1.2rem','1.7rem'], letterSpacing: '1.85px', minHeight:['7rem','11rem'],alignContent:'center',textShadow:'#686 1px 1px 2px', fontWeight:'900',fontFamily:'Arial, sans-serif'}}>
              <Alarm sx={{pt:1,fontSize:33}}/>See Us Without Prescription For 30 Days
              </Typography>


            </Paper>
          </Grid2>
        </Grid2>

        <Grid2 size={4}>
          <Grid2 item >
            <Paper sx={{ p:3, borderRadius:3, boxShadow:5, border:0}}>

              
              <Typography variant="h6" textAlign='center' sx={{fontSize:['1.2rem','1.7rem'], letterSpacing: '1.85px', minHeight:['7rem','11rem'],alignContent:'center',textShadow:'#686 1px 1px 2px', fontWeight:'900',fontFamily:'Arial, sans-serif'}}>
                <MedicalInformationIcon sx={{pt:1,fontSize:33}}/>
                Most Insurances Accepted
              </Typography>

            </Paper>
          </Grid2>
        </Grid2>

        <Grid2 size={4}>
          <Grid2 item >
            <Paper sx={{ p:3, borderRadius:3, boxShadow:5, border:0,textAlign:'center'}}>
              <Typography variant="h6" sx={{fontSize:['1.2rem','1.7rem'], letterSpacing: '1.85px', minHeight:['7rem','11rem'],alignContent:'center',textShadow:'#686 1px 1px 2px', fontWeight:'900',fontFamily:'Arial, sans-serif'}}>
                <EmojiPeopleIcon sx={{pt:1,fontSize:33}}/>
                Individualized Physical Therapy
              </Typography>
            </Paper>
          </Grid2>
        </Grid2>
        
      </Grid2>


      <Grid2 container spacing={3} columns={{xs:2,sm:4,md:12}}>
        <Grid2 size={6}>
          <Grid2 item>{/* image */}
            <Box component="img" sx={{width: '21rem' , height: '20rem',maxWidth:'100%', borderRadius:'2%',border:1}}
                      alt={"Imperium_PTP_Building"}
                      src={"Imperium_Physical_Therapy_and_Performance_Building.jpg"}/>
          </Grid2>
        </Grid2>
        <Grid2 size={5}>
          <Grid2 item sx={{display:'flex',flexDirection:'column', justifyItems:'center'}}>
            <Paper sx={{fontSize:['1rem','1.5rem'],fontWeight:'900', p:3}}>
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
      </Grid2>

    </Box>
  );
}

export default Main;

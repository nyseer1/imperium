import "@fontsource/roboto/300.css";
import React from "react";
//various components
import {
  Box,
  Grid2,
  ListItem,
  Paper,
  Typography
} from "@mui/material";

import { green } from "@mui/material/node/colors";

// to use themes
import { Helmet } from "react-helmet-async";


function WhatWeTreat() {
  return (
    <Box>
      <Helmet>
        <title>What We Treat | Imperium Physical Therapy and Performance</title>
        <meta name="description" content=" We treat over 30 different injures with orthopedic physical therapy. We Treat injuries relating to muscles, bones, joints, ligaments, and tendons. " />
        <meta name="keywords" content="imperium ptp, physical therapy,
          Disc herniation,
          Spinal stenosis,
          ACDF,
          Hip replacement,
          Knee replacement,
          Rotator cuff tear,
          Labral Tear,
          Meniscus Tear,
          ACL Tear,
          Arthritis,
          Low back pain,
          Knee pain,
          Hip pain,
          Shoulder pain,
          Neck pain,
          Ankle pain,
          Blood Flow Restriction therapy,
          BFR,
          Doctor of physical therapy,
          Frozen shoulder,
          Plantar fasciitis,
          Spinal Fusion treatment,
          injury treatment,
          Sports physical therapy,
          Orthopedic physical therapy" />
      </Helmet>
              <Typography variant="h6" textAlign='center' sx={{fontSize:['1.8rem','2.3rem'],p:3, fontWeight:300, letterSpacing: '1px',fontWeight:'400',fontFamily:'Arial, sans-serif' }}>
                What We Treat
              </Typography>

      <Grid2 container spacing={0.5} sx={{pl:2,pr:2, justifyContent:'center'}} columns={{xs:2,sm:4,md:12}}>
        <Grid2 size={5}>
          <Grid2 item >
            <Paper sx={{ p:3, borderRadius:3, boxShadow:5, border:0,minHeight:530,border:2,borderColor:green[500]}}>

            <Typography sx={{fontSize:['1.5rem','2rem'], fontFamily:'Arial', fontWeight:'600'}}>Neck:</Typography>
              <br/>
              <Grid2 container justifyContent="flex-start" sx={{paddingLeft:3, fontSize:['1rem','1.5rem']}}>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Cervical radiculopathy
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                <abbr title="Anterior cervical discectomy and fusion" >ACDF</abbr>
                </ListItem><ListItem sx={{ display: 'list-item', p:1}}>
                Herniated Discs
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Stenosis
                </ListItem>
              </Grid2>


            </Paper>
          </Grid2>
        </Grid2>

        <Grid2 size={5}>
          <Grid2 item >
            <Paper sx={{ p:3, borderRadius:3, boxShadow:5, border:0,minHeight:530,border:2,borderColor:green[500]}}>

            <Typography sx={{fontSize:['1.5rem','2rem'], fontFamily:'Arial', fontWeight:'600'}}>Shoulder:</Typography>
              <br/>
              <Grid2 container justifyContent="flex-start" sx={{paddingLeft:3, fontSize:['1rem','1.5rem']}}>
                <ListItem sx={{ display: 'list-item', p:1}}>
                  Shoulder replacement
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                  Shoulder pain
                </ListItem><ListItem sx={{ display: 'list-item', p:1}}>
                Rotator cuff repair
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Frozen shoulder
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Frozen shoulder
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Labral tear
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Dislocation
                </ListItem>
              </Grid2>

            </Paper>
          </Grid2>
        </Grid2>

        <Grid2 size={5}>
          <Grid2 item >
            <Paper sx={{ p:3, borderRadius:3, boxShadow:5, border:0,minHeight:530,border:2,borderColor:green[500]}}>

            <Typography sx={{fontSize:['1.5rem','2rem'], fontFamily:'Arial', fontWeight:'600'}}>Hip:</Typography>
              <br/>
              <Grid2 container justifyContent="flex-start" sx={{paddingLeft:3, fontSize:['1rem','1.5rem']}}>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Hip replacement
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Arthritis
                </ListItem><ListItem sx={{ display: 'list-item', p:1}}>
                Labral tears
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                <abbr title="Femoroacetabular impingement" >  FAI</abbr>
                </ListItem>
              </Grid2>

            </Paper>
          </Grid2>
        </Grid2>

        <Grid2 size={5}>
          <Grid2 item >
            <Paper sx={{ p:3, borderRadius:3, boxShadow:5, border:0,minHeight:530,border:2,borderColor:green[500]}}>

            <Typography sx={{fontSize:['1.5rem','2rem'], fontFamily:'Arial', fontWeight:'600'}}>Knee:</Typography>
              <br/>
              <Grid2 container justifyContent="flex-start" sx={{paddingLeft:3, fontSize:['1rem','1.5rem']}}>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Knee replacement
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                <abbr title="Anterior cruciate ligament">ACL</abbr> reconstruction
                </ListItem><ListItem sx={{ display: 'list-item', p:1}}>
                Arthritis
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Meniscus tear
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
              <abbr title="Patellofemoral pain syndrome">PFPS</abbr>
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Tendonitis
                </ListItem>
              </Grid2>

            </Paper>
          </Grid2>
        </Grid2>

        <Grid2 size={5}>
          <Grid2 item >
            <Paper sx={{ p:3, borderRadius:3, boxShadow:5, border:0,minHeight:530,border:2,borderColor:green[500]}}>

            <Typography sx={{fontSize:['1.5rem','2rem'], fontFamily:'Arial', fontWeight:'600'}}>Ankle/Foot</Typography>
              <br/>
              <Grid2 container justifyContent="flex-start" sx={{paddingLeft:3, fontSize:['1rem','1.5rem']}}>
                <ListItem sx={{ display: 'list-item', p:1}}>
               <abbr title="Open reduction and internal fixation"> ORIF</abbr>
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Ligament sprains
                </ListItem><ListItem sx={{ display: 'list-item', p:1}}>
                Arthritis
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Meniscus tear
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Achilles repair
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Plantar fasciitis
                </ListItem>
              </Grid2>

            </Paper>
          </Grid2>
        </Grid2>

        <Grid2 size={5}>
          <Grid2 item >
            <Paper sx={{ p:3, borderRadius:3, boxShadow:5, border:0,minHeight:530,border:2,borderColor:green[500]}}>

            <Typography sx={{fontSize:['1.5rem','2rem'], fontFamily:'Arial', fontWeight:'600'}}>Spine</Typography>
              <br/>
              <Grid2 container justifyContent="flex-start" sx={{paddingLeft:3, fontSize:['1rem','1.5rem']}}>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Lumbar radiculopathy
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Low back pain
                </ListItem><ListItem sx={{ display: 'list-item', p:1}}>
                Arthritis
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Spinal fusion
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Laminectomy
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                Spinal Stenosis
                </ListItem>
              </Grid2>

            </Paper>
          </Grid2>
        </Grid2>


      </Grid2>


    </Box>
  );
}

export default WhatWeTreat;
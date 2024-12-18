import "@fontsource/roboto/300.css";
import { Masonry } from "@mui/lab";
import React from "react";
//various components
import {
  Box,
  Grid2,
  Paper,
  styled,
  Typography,
} from "@mui/material";


//for menu button

// to use themes
import { Helmet } from "react-helmet-async";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
function About() {
  const itemData = [
    {
      img: "Imperium_Physical_Therapy_and_Performance_Building.jpg",
      title: "Pic 1",
    },
    {
      img: "Imperium_Physical_Therapy_and_Performance_Building_3.jpg",
      title: "Pic 2",
    },
  ];


  return (
    // basic div tag that uses css
    <Box>
      <Helmet>
        <title>About | Imperium Physical Therapy and Performance</title>
        <meta name="description" content=" Our Mission is to diagnose and rehabilitate your injuries with orthopedic physical therapy<br/>
              We treat injuries relating to muscles, bones, joints, ligaments, and tendons. " />
        <meta name="keywords" content="ptp, physical therapy, Sports physical therapy, Orthopedic physical therapy" />
      </Helmet>
        {" "}
        <Typography variant="h6" textAlign='center' sx={{fontSize:['1.8rem','2.3rem'],p:3, fontWeight:300, letterSpacing: '1px',fontWeight:'400',fontFamily:'Arial, sans-serif' }}>
                About Us
              </Typography> 

        <Grid2 container sx={{pt:1, justifyContent:'center'}} columns={{xs:2,sm:4,md:12}}>
          <Grid2 size={6}>
            <Grid2 item >
              <Paper sx={{fontSize:['1rem','1.5rem'], p: 2,}}>
              <Typography variant="h1" sx={{fontSize:['1.5rem','2rem'], textAlign:'center', p:1, fontFamily:'Arial'}} >
                Mission:
              </Typography>
              Our Mission is to diagnose and rehabilitate your injuries with orthopedic physical therapy<br/>
              We treat injuries relating to muscles, bones, joints, ligaments, and tendons<br/>
                  <Typography sx={{fontSize:['1.5rem','2rem'], fontFamily:'Arial'}}>We specialize in:</Typography>
                  <Grid2 container justifyContent="flex-start" sx={{paddingLeft:3, fontSize:['1rem','1.5rem']}}>
                      <Grid2 item sx={{ display: 'list-item', p:1, textAlign:'left'}}>Diagnosis and rehabilitation of orthopedic related conditions such as sports related injuries
                      </Grid2>
                      <Grid2 item sx={{ display: 'list-item', p:1,textAlign:'left'}}>Rehabilitation after surgery
                      </Grid2>
                      <Grid2 item sx={{ display: 'list-item', p:1,textAlign:'left'}}>Optimizing functional ability including range of motion strength and mobility
                      </Grid2>
                  </Grid2>
              </Paper>

            </Grid2>

          </Grid2>
          <Grid2 size={6}>
            <Grid2 item >
                <Masonry
                  justifyContent="center"
                  sx={{
                  bgcolor: "background.paper",m: 1,border: 5,
                  borderColor: "green",borderRadius: "6px",width:['100%','100%']}}
                  columns={2} spacing={2}>
                  {itemData.map((item, index) => (
                    <Box key={index}>

                      <Box component="img" sx={{borderBottomLeftRadius: 4, borderBottomRightRadius: 4,
                        display: "block",borderColor: "green",
                        width:'100%', height:'100%', borderRadius:'2%'}}
                        alt={item.title}
                        src={`${item.img}?w=162&auto=format`}
                        loading="lazy"/>
                    </Box>
                  ))}
                </Masonry>
              </Grid2>
            </Grid2>
        </Grid2>

    </Box>
  );
}
export default About;
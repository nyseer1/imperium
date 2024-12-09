import React from "react";
//various components
import {Paper,Button,Typography,ButtonGroup,Box,AppBar,useMediaQuery,ButtonBase,BottomNavigation,Container, ListItem, List, Grid2,
} from "@mui/material";
//for menu button
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu"; //for menu icon

// to use themes
import { createTheme } from "@mui/material/styles";

//to use divider
import Divider from '@mui/material/Divider';

//blog pages
import Bloglist from "./Bloglist";

// for arrow icon
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { postData } from "./Bloglist";
import { Helmet } from "react-helmet-async";

function Blog3() {



  return (
    // basic div tag that uses css
    <Box>
      <Helmet>
        <title>Stretching Services | Imperium Physical Therapy</title>
        <meta name="description" content="Unlock Your Body’s Full Potential with Our Expert Stretching Services; Your Path to Mobility, Flexibility, and Pain Relief Starts Here" />
        <meta name="keywords" content="ptp, pt, orthapedic physical therapy, sports physical therapy, professional, stretch, stretching. stretching services" />
      </Helmet>

      {/* content */}
      <Typography sx={{
        fontSize: ['1.5rem','2.2rem'],
        fontWeight: 600,
        textAlign: 'center',
        p:2, fontFamily:'Arial'
      }} >Unlock Your Body’s Full Potential with Our Expert Stretching Services<br/>of Low Back Pain</Typography>



      {/* blog content (description and image) */}

      <Grid2 container spacing={0.5} sx={{pl:2,pr:2, justifyContent:'center'}} columns={{xs:2,sm:4,md:12}}>
        <Grid2 size={8}>
          <Grid2 item >
            <Paper sx={{ p:3, borderRadius:3, boxShadow:5, border:0, bgcolor:'#dddddd'}}>
              

              
              <Typography variant="h6" textAlign='center' sx={{fontSize:['1.2rem','1.7rem'], minHeight:['7rem','11rem'],alignContent:'center',textShadow:'#686 1px 1px 1px', fontWeight:'200',fontFamily:'Arial, sans-serif'}}>
                Your Path to Mobility, Flexibility, and Pain Relief Starts Here
              </Typography>


            </Paper>
          </Grid2>
        </Grid2>
        
        <Grid2 size={6}>
          <Grid2 item >
              

              
              {/* blog post image */}
              <Box component="img" sx={{width: '100%' , height: '100%', p:2,borderRadius:'2%'}}
                  alt={"Lower Back Pain(LBP)"}
                  src={"Stretching_service_example1.JPG"}/>



          </Grid2>
        </Grid2>

        <Grid2 size={10}>
          <Grid2 item >
            <Divider orientation="horizontal" variant="middle"/>
          </Grid2>
        </Grid2>

        <Grid2 size={10}>
          <Grid2 item >
            <Paper sx={{p:2, fontSize:['1rem','1.5rem']}}>
              <Typography sx={{fontSize:['1.5rem','2rem'], fontFamily:'Arial', fontWeight:'600'}}>Why Stretching Matters:</Typography>
              Stretching is more than just a warm-up; it’s a vital component of maintaining overall health and wellness. Here’s why incorporating regular stretching into your routine is essential:
              <br/>
              <Grid2 container justifyContent="flex-start" sx={{paddingLeft:3, fontSize:['1rem','1.5rem']}}>
                <ListItem sx={{ display: 'list-item', p:1}}><b>Improves Flexibility:</b> Helps increase your range of motion, making daily activities easier.
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}><b>Reduces Pain & Tension:</b> Targeted stretching relieves tight muscles, improving posture and reducing discomfort.
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}><b>Boosts Circulation:</b> Promotes better blood flow to muscles, aiding recovery and reducing soreness.
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}><b>Injury Prevention:</b> Regular stretching reduces the risk of injury by keeping muscles supple and prepared for physical activity.
                </ListItem>
              </Grid2>
            </Paper>
            <br/>
            <Divider/>
            <br/>

            <Paper sx={{p:2, fontSize:['1rem','1.5rem']}}>
              <Typography sx={{fontSize:['1.5rem','2rem'], fontFamily:'Arial', fontWeight:'600'}}>Our Stretching Services: Tailored for You!</Typography>
              At Imperium Physical Therapy and Performance, we offer <b>professional, hands-on</b> stretching sessions designed to address your unique needs. Whether you're an athlete, recovering from an injury, or just want to maintain flexibility, we have a solution for you!
              <br/><br/>
              <b>Types of Stretching We Offer:</b>
              <br/><br/>


              <List container justifyContent="flex-start" sx={{listStyle: "decimal", pl: 4,    fontSize:['1rem','1.5rem']}}>
                <ListItem sx={{ display: 'list-item', p:1}}>
                  <b>Assisted Stretching: </b>Our trained therapists will guide you through stretches, allowing for a deeper, more effective session that goes beyond what you can do on your own.
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                  <b>Dynamic Stretching: </b>
                  Ideal for athletes, this involves moving parts of your body through a full range of motion to prepare muscles for physical activity.
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                  <b>Static Stretching: </b>
                  A focus on holding stretches for extended periods to lengthen and loosen muscles, ideal for improving flexibility over time.
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>
                  <b>PNF Stretching: </b>
                  Proprioceptive Neuromuscular Facilitation (PNF) combines stretching and contracting the muscles to maximize flexibility and range of motion.
                </ListItem>
              </List>
            </Paper>
            <br/>
            <Divider/>
            <br/>
            <Paper sx={{p:2, fontSize:['1rem','1.5rem']}}>
              <Typography sx={{fontSize:['1.5rem','2rem'], fontFamily:'Arial', fontWeight:'600'}}>Benefits of Professional Stretching Services:</Typography>
                <Grid2 container justifyContent="flex-start" sx={{paddingLeft:3, fontSize:['1rem','1.5rem']}}>
                  <ListItem sx={{ display: 'list-item', p:1}}>Enhanced flexibility and mobility

                  </ListItem>
                  <ListItem sx={{ display: 'list-item', p:1}}>Alleviated chronic pain and tension

                  </ListItem>
                  <ListItem sx={{ display: 'list-item', p:1}}>Faster recovery from workouts and injuries

                  </ListItem>
                  <ListItem sx={{ display: 'list-item', p:1}}>Improved athletic performance
                  </ListItem>
                </Grid2>
            </Paper>
            <br/>
            <Divider/>
            <br/>
            <Paper sx={{p:2, fontSize:['1rem','1.5rem']}}>
              <Typography sx={{fontSize:['1.5rem','2rem'], fontFamily:'Arial', fontWeight:'600'}}>Who Can Benefit from Our Services?</Typography>
              <b>Our stretching services are perfect for:</b>
              <Grid2 container justifyContent="flex-start" sx={{paddingLeft:3, fontSize:['1rem','1.5rem']}}>
                <ListItem sx={{ display: 'list-item', p:1}}>Athletes: Improve performance and reduce injury risk.

                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>Office Workers: Combat stiffness and tension caused by long periods of sitting.

                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>Seniors: Maintain mobility and prevent falls.

                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>Post-Surgery/Recovery Patients: Safely improve range of motion and accelerate recovery.
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>Anyone: Seeking to improve their general well-being, flexibility, and posture.
                </ListItem>
              </Grid2>
            </Paper>
            <br/>
            <Divider/>
            <br/>
            <Box sx={{p:2, fontSize:['1.5rem','2rem']}}>
              <Typography sx={{fontSize:['1.7rem','2.2rem'], fontFamily:'Arial', fontWeight:'600', fontWeight:600,fontFamily:'Arial'}}>Ready to Experience the Benefits of Stretching?</Typography>
              <b>Book Your Stretching Session Today!</b><br/>
              Contact us for a free consultation and find out how our customized stretching services can help you move better, feel better, and live pain-free.
              <Grid2 container justifyContent="flex-start" sx={{paddingLeft:3, fontSize:['1rem','1.5rem']}}>
                <ListItem sx={{ display: 'list-item', p:1}}>📞 Call Us: (516) 490-1480

                </ListItem>

                <ListItem sx={{ display: 'list-item', p:1}}>📧 Email: Admin@imperiumptp.com

                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>🌐 Visit Us Online: <Button href="/">www.imperiumptp.com</Button>

                </ListItem>
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
        
      </Grid2>
    </Box>
  );
}

export default Blog3;
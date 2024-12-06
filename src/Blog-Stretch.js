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
        <title>Imperium PTP Blog | Stretch</title>
        <meta name="description" content="Unlock Your Body’s Full Potential with Our Expert Stretching Services; Your Path to Mobility, Flexibility, and Pain Relief Starts Here" />
        <meta name="keywords" content="ptp, pt, physical therapy, professional, stretch, stretching. stretching services" />
      </Helmet>

      {/* content */}
      <Typography sx={{
        fontSize: [20,25,30],
        fontWeight: 900,
        textAlign: 'center',
        p:2,
      }} >Unlock Your Body’s Full Potential with Our Expert Stretching Services<br/>of Low Back Pain</Typography>

      {/* blog content (description and image) */}
      <Box
        sx={{p: 2,
          display: "flex", //creates flexbox to arrange content
          flexDirection: ["column", "column", "row", "row", "row"], //each new content is added in a row if screen > md, columb if <= md
          justifyContent: "center", //content starts at the end of the line (right)
          flexGrow: 1, //stretch size of elements to fill unused space on line
          alignItems: "center", //centers items inside box horizontally (for when column)
        }}
      >
        {/* blog post descriprion */}
        <Paper sx={{fontSize: [15,20,25],width: ['90%', '90%', 500, 700],height: ['100%'],p: 2,bgcolor: '#eeeeee',}}>
            <Typography sx={{fontSize:[20,25,30], fontWeight: '900', color:'#000000'}}>
                Your Path to Mobility, Flexibility, and Pain Relief Starts Here
            </Typography>
           </Paper>
        <Typography sx={{ fontSize: 30, textAlign: "center", p:2 }}>

        </Typography>

        {/* blog post image */}
        <Box component="img" sx={{width: '25%' , height: '25%', p:2,borderRadius:'2%'}}
                  alt={"Lower Back Pain(LBP)"}
                  src={"Stretching_service_example1.JPG"}/>
      </Box>

      {/* container to center divider */}
      <Container><Divider orientation="horizontal" variant="middle" flexItem sx={{width: [300,300,1000]}}/></Container>

      {/* blog content box (blog content and other blog links) */}
      <Box
        sx={{
          p: 2,
          display: "flex", //creates flexbox to arrange content
          flexDirection: ["column", "column", "row", "row", "row"], //each new content is added in a row if screen > md, columb if <= md
          justifyContent: "center", //content starts at the end of the line (right)
          flexGrow: 1, //stretch size of elements to fill unused space on line
          alignItems: ['center', 'center', "flex-start"], //centers items inside box horizontally (for when column)
        }}
      >
      {/* blog post*/}
      <Box>
        <Paper sx={{p:2, fontSize:[10,15,25]}}>
            <Typography sx={{fontSize:[20,25,30]}}>Why Stretching Matters:</Typography>
            Stretching is more than just a warm-up; it’s a vital component of maintaining overall health and wellness. Here’s why incorporating regular stretching into your routine is essential:
            <br/>
            <Grid2 container justifyContent="flex-start" sx={{paddingLeft:3, fontSize:[8,12,18]}}>
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

        <Paper sx={{p:2, fontSize:[10,15,25]}}>
            <Typography sx={{fontSize:[20,25,30]}}>Our Stretching Services: Tailored for You!</Typography>
            At Imperium Physical Therapy and Performance, we offer <b>professional, hands-on</b> stretching sessions designed to address your unique needs. Whether you're an athlete, recovering from an injury, or just want to maintain flexibility, we have a solution for you!
            <br/><br/>
            <b>Types of Stretching We Offer:</b>
            <br/><br/>


            <List container justifyContent="flex-start" sx={{listStyle: "decimal", pl: 4,    fontSize:[8,12,18]}}>
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
        <Paper sx={{p:2, fontSize:[10,15,25]}}>
            <Typography sx={{fontSize:[20,25,30]}}>Benefits of Professional Stretching Services:</Typography>
            <Grid2 container justifyContent="flex-start" sx={{paddingLeft:3, fontSize:[8,12,18]}}>
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
        <Paper sx={{p:2, fontSize:[10,15,25]}}>
            <Typography sx={{fontSize:[20,25,30]}}>Who Can Benefit from Our Services?</Typography>
            <b>Our stretching services are perfect for:</b>
            <Grid2 container justifyContent="flex-start" sx={{paddingLeft:3, fontSize:[8,12,18]}}>
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
        <Box sx={{p:2, fontSize:[10,15,25]}}>
            <Typography sx={{fontSize:[20,25,30]}}>Ready to Experience the Benefits of Stretching?</Typography>
            <b>Book Your Stretching Session Today!</b><br/>
            Contact us for a free consultation and find out how our customized stretching services can help you move better, feel better, and live pain-free.
            <Grid2 container justifyContent="flex-start" sx={{paddingLeft:3, fontSize:[8,12,18]}}>
                <ListItem sx={{ display: 'list-item', p:1}}>📞 Call Us: (516) 490-1480

                </ListItem>

                <ListItem sx={{ display: 'list-item', p:1}}>📧 Email: Admin@imperiumptp.com

                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}>🌐 Visit Us Online: <Button href="/">www.imperiumptp.com</Button>

                </ListItem>
            </Grid2>
        </Box>

      </Box>



       {/* blog links */}
       <Box sx={{        display: 'flex', //creates flexbox to arrange content
        flexDirection: 'column', //each new content is added in a row
        justifyContent: 'flex-end', //content starts at the end of the line (right)
        flexGrow:1,fontSize:1, width: ['100%','80%','50%']}}>

            <Typography sx={{fontSize:25, textAlign:'center'}}>Recent Blog Posts</Typography>

            {postData.map((post, index) => (
            <div key={index}>
              <Button  sx={{display:'flex', flexDirection:'row', fontsize:[20,25,30]}} href={post.href}>
                <Box component="img" sx={{ width: [50, 50, 60], height: [20, 20, 30],}}
                  alt={post.alt}
                  src={post.img}/>
                  <Typography sx={{textAlign:'center', p:1,borderRadius:'2%'}}>{post.title}</Typography>
              </Button>

            </div>
          ))}
            <Container><Divider orientation="horizontal" variant="middle" flexItem sx={{width: ['100%']}}/></Container>

            <Button href="bloglist" sx={{display:'flex', flexDirection:'row',justifyContent:'center',fontSize:23}}><Typography sx={{fontsize:25, p:1}}>More Posts</Typography><ArrowForwardIosIcon/> </Button>




        </Box>
      </Box>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>


    </Box>
  );
}

export default Blog3;
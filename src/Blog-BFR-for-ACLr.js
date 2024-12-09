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
  Container,ListItem,Grid2,List,
} from "@mui/material";
//for menu button
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu"; //for menu icon

// to use themes
import { createTheme } from "@mui/material/styles";

//to use divider
import Divider from "@mui/material/Divider";

//blog pages
import Bloglist from "./Bloglist";

// for arrow icon
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { postData } from "./Bloglist";
import { Helmet } from "react-helmet-async";

function Blog2() {
  return (
    // basic div tag that uses css
    <Box>
      <Helmet>
        <title>
          Imperium PTP Blog | Blood Flow Restriction Training in Post-Operative
          ACL Tear Reconstruction Surgery BFR
        </title>
        <meta
          name="description"
          content="Accelerating Recovery: Blood Flow Restriction Therapy in Post-Operative ACL Reconstruction Surgery - ACL Tear Treatment - A Physical Therapy Breakthrough"
        />
        <meta
          name="keywords"
          content="ptp, pt, physical therapy, professional, ACL, reconstruction surgery, Blood Flow Restriction therapy, post-op, misconceptions"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>

      <Grid2 container spacing={0.5} sx={{pl:2,pr:2, justifyContent:'center'}} columns={{xs:2,sm:4,md:12}}>
        <Grid2 size={8}>
          <Grid2 item >
            <Paper sx={{ p:3, borderRadius:3, boxShadow:5, border:0, bgcolor:'#dddddd'}}>
              

              
              <Typography variant="h6" textAlign='center' sx={{fontSize:['1.2rem','1.7rem'], minHeight:['7rem','11rem'],alignContent:'center',textShadow:'#686 1px 1px 1px', fontWeight:'200',fontFamily:'Arial, sans-serif'}}>
                Blood Flow Restriction Training
                <br /> in Post-Operative ACL Reconstruction Surgery
              </Typography>


            </Paper>
          </Grid2>
        </Grid2>
        
        <Grid2 size={6}>
          <Grid2 item >
              

              
              {/* blog post image */}
              <Box
                component="img"
                sx={{ width: "100%", height: "100%", p: 2, borderRadius: "2%" }}
                alt={"ACL_Anatomy"}
                src={"ACL_UPCLOSE.jpg"}
              />



          </Grid2>
        </Grid2>

        <Grid2 size={10}>
          <Grid2 item >
            <Divider orientation="horizontal" variant="middle"/>
          </Grid2>
        </Grid2>

        <Grid2 size={9}>
          <Grid2 item >
            <Paper sx={{p:3, fontSize:['1rem','1.5rem']}}>
                <Typography sx={{fontSize:['1.5rem','2rem'], fontWeight:'400', fontFamily:'Arial'}}>Accelerating Recovery: Blood Flow Restriction Training in Post-Operative ACL Reconstruction Surgery - A Physical Therapy Breakthrough</Typography>
                Anterior Cruciate Ligament (ACL) injuries are not uncommon, and for those who undergo surgical reconstruction, 
                the journey to recovery can be challenging. In recent years, blood flow restriction (BFR) training has 
                emerged as a revolutionary approach in the field of physical therapy, particularly in post-operative 
                ACL reconstruction cases. In this blog post, we'll explore the concept of blood flow restriction training 
                and delve into current research that supports its effectiveness in expediting recovery and enhancing outcomes
                after ACL surgery. Understanding Blood Flow Restriction Training: Blood flow restriction training 
                involves the use of a specialized tourniquet system to partially restrict blood flow to the exercising 
                muscles during resistance training. This unique approach allows individuals to achieve significant muscular 
                gains with lower resistance loads, making it particularly beneficial in post-operative scenarios where traditional 
                high-load exercises may not be immediately feasible.
                <br/><br/>
              <Divider/>
              <br/>



              


                <List container justifyContent="flex-start" sx={{listStyle: "decimal", pl: 4,    fontSize:['1rem','1.5rem']}}>
                  <ListItem sx={{ display: 'list-item', p:1}}>
                    <b>Early Initiation of Rehabilitation: </b>
                    One of the key advantages of blood flow restriction training is its applicability in the early stages of rehabilitation. Research, such as that conducted by Loenneke et al. (2011) [1], indicates that BFR training can be initiated soon after surgery, even during the initial phases of ACL reconstruction recovery. This early intervention helps prevent muscle atrophy and accelerates the rehabilitation process.                </ListItem>
                  <ListItem sx={{ display: 'list-item', p:1}}>
                    <b>Muscle Hypertrophy with Lower Loads: </b>
                    Studies, including a meta-analysis by Hughes et al. (2017) [2], have consistently demonstrated that blood flow restriction training induces muscle hypertrophy even with low-resistance exercises. In the context of ACL surgery recovery, this is particularly beneficial as it allows individuals to build muscle strength without placing excessive strain on the healing ligament.                 </ListItem>
                  <ListItem sx={{ display: 'list-item', p:1}}>
                    <b>Improved Muscle Activation and Endurance: </b>
                    BFR training has been shown to enhance muscle activation and endurance. According to a study by Brandner et al. (2019) [3], BFR can lead to increased muscle activation during low-load resistance exercises. This is crucial in the post-ACL surgery phase, as it helps individuals regain muscle function and stability around the knee joint.                 </ListItem>
                  <ListItem sx={{ display: 'list-item', p:1}}>
                    <b>Reduced Joint Strain and Pain Perception: </b>
                    Another notable advantage of BFR training is its potential to minimize joint strain and reduce pain perception during rehabilitation. A study by Madarame et al. (2010) [4] found that BFR training allowed participants to achieve comparable strength gains with lower loads, reducing stress on the joints and minimizing discomfort.                 </ListItem>
                    <ListItem sx={{ display: 'list-item', p:1}}>
                    <b>Functional Improvements and Faster Return to Activity: </b>
                    Current research, including a systematic review by Centner et al. (2019) [5], suggests that BFR training contributes to functional improvements and may facilitate a faster return to pre-injury activity levels. This is particularly significant for individuals recovering from ACL surgery who aspire to resume sports or physical activities.                  </ListItem>
                </List>
                <br/>
              <Divider/>
              <br/>
                Blood flow restriction training represents a groundbreaking approach in the realm of post-operative ACL reconstruction rehabilitation. The combination of early initiation, muscle hypertrophy with lower loads, improved muscle activation, reduced joint strain, and faster return to activity positions BFR as a game-changer in physical therapy.
                <br/>
                As with any rehabilitation strategy, it's essential for individuals to consult with their healthcare professionals, including physical therapists, before incorporating blood flow restriction training into their recovery plan. The evidence from current research, however, strongly supports the integration of BFR into post-ACL surgery rehabilitation protocols, offering new hope for a swifter and more effective recovery journey.
              </Paper>
            <br/>
            <Divider/>
            <br/>
          </Grid2>
        </Grid2>
        {/* links */}
        <Grid2 size={3}>
          <Typography sx={{fontSize:25, textAlign:'center'}}>Recent Blog Posts</Typography>

          {postData.map((post, index) => (
            <div key={index}>
              <Button  sx={{display:'flex', flexDirection:'row'}} href={post.href}>
                <Box component="img" sx={{ width: [50, 50, 60], height: [20, 20, 30],}}
                  alt={post.alt}
                  src={post.img}/>
                  <Typography sx={{textAlign:'center', p:1,borderRadius:'2%', fontSize:['0.8rem','1.2rem']}}>{post.title}</Typography>
              </Button>

            </div>
          ))}
          <Container><Divider orientation="horizontal" variant="middle" flexItem sx={{width: ['100%']}}/></Container>

          <Button href="bloglist" sx={{display:'flex', flexDirection:'row',justifyContent:'center',fontSize:23}}>
          <Typography sx={{fontsize:25, p:1}}>More Posts</Typography><ArrowForwardIosIcon/> </Button>
        </Grid2>
      </Grid2>

    </Box>
  );
}

export default Blog2;
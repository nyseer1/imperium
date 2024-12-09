import React from "react";
//various components
import {
  Box,
  Button,
  Container,
  Grid2,
  List,
  ListItem,
  Paper,
  Typography
} from "@mui/material";
//for menu button

// to use themes

//to use divider
import Divider from '@mui/material/Divider';

//blog pages

// for arrow icon
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Helmet } from "react-helmet-async";
import { postData } from "./Bloglist";

function Blog4() {

  

  return (
    // basic div tag that uses css
    <Box>
      <Helmet>
        <title>Imperium PTP Blog | Understanding the Crucial Role of the Rotator Cuff</title>
        <meta name="description" content="Understanding the Crucial Role of the Rotator Cuff function, the anatomy, function, and importance of the rotator cuff to unravel the mystery behind this critical component of our musculoskeletal system."/>
        <meta name="keywords" content="ptp, pt, physical therapy, professional, rotatator cuff, anatomy, function,educational" />
      </Helmet>

      <Grid2 container spacing={0.5} sx={{pl:2,pr:2, justifyContent:'center'}} columns={{xs:2,sm:4,md:12}}>
        <Grid2 size={8}>
          <Grid2 item >
            <Paper sx={{ p:3, borderRadius:3, boxShadow:5, border:0, bgcolor:'#dddddd'}}>
              

              
              <Typography variant="h6" textAlign='center' sx={{fontSize:['1.2rem','1.7rem'], minHeight:['7rem','11rem'],alignContent:'center',textShadow:'#686 1px 1px 1px', fontWeight:'200',fontFamily:'Arial, sans-serif'}}>
              Unraveling the Mystery: Understanding the Crucial Role of the Rotator Cuff
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

        <Grid2 size={9}>
          <Grid2 item >
            <Paper sx={{p:3, fontSize:['1rem','1.5rem']}}>
                Introduction: The shoulder is a marvel of intricate design, allowing for a wide range of movements 
                essential in our daily lives. At the heart of this complex joint lies a group of muscles known 
                as the rotator cuff. Despite being relatively small, the rotator cuff plays a pivotal role in
                 shoulder function. In this blog post, we will delve into the anatomy, function, and importance 
                 of the rotator cuff to unravel the mystery behind this critical component of
                  our musculoskeletal system. 
                <br/><br/>
              <Divider/>
              <br/>



              

                <Typography sx={{fontSize:['1.5rem','2rem'], fontFamily:'Arial', fontWeight:'600'}}>Anatomy of the Rotator Cuff:</Typography>
                The rotator cuff is comprised of four muscles:
                <br/>
                <Grid2 container justifyContent="flex-start" sx={{paddingLeft:3, fontSize:['1rem','1.5rem']}}>
                  <ListItem sx={{ display: 'list-item', p:1}}><b>Supraspinatus: </b>This muscle runs along the upper part of the shoulder blade and attaches to the top of the arm bone (humerus). Its primary role is initiating abduction (lifting the arm sideways).
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', p:1}}><b>Infraspinatus: </b>Positioned below the supraspinatus, the infraspinatus aids in external rotation of the arm, helping to turn the arm outward.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', p:1}}><b>Teres Minor:</b> This muscle assists the infraspinatus in external rotation and contributes to the stability of the shoulder joint.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', p:1}}><b>Subscapularis: </b> The subscapularis is situated on the front side of the shoulder blade and is responsible for internal rotation of the arm.
                  </ListItem>
                </Grid2>
                <br/>
                <Divider/>
                <br/> 

                <Typography sx={{fontSize:['1.5rem','2rem'],fontFamily:'Arial', fontWeight:600}}>Functions of the Rotator Cuff:</Typography>
                <br/>  
                <List container justifyContent="flex-start" sx={{listStyle: "decimal", pl: 4,    fontSize:['1rem','1.5rem']}}>
                  <ListItem sx={{ display: 'list-item', p:1}}>
                      <b>Stability of the Shoulder Joint: </b>The supraspinatus, in particular, is integral in initiating the lifting of the arm. This muscle plays a key role in the first 15 degrees of arm elevation and is actively engaged in activities like reaching overhead.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', p:1}}>
                      <b>Initiation of Arm Movements: </b>
                      Ideal for athletes, this involves moving parts of your body through a full range of motion to prepare muscles for physical activity.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', p:1}}>
                      <b>Control of Rotation: </b>
                      The infraspinatus and teres minor work in tandem to control external rotation, preventing excessive movement and contributing to the overall coordination of shoulder rotation.
                      </ListItem>
                  <ListItem sx={{ display: 'list-item', p:1}}>
                  <b>Balance Between Internal and External Rotation: </b>
                  The subscapularis maintains balance by facilitating internal rotation. This balance is crucial for various functional activities, from reaching for objects to engaging in sports.
                  </ListItem>
                </List>

                <br/>
                <Divider/>
                <br/> 

                <Typography sx={{fontSize:['1.5rem','2rem'],fontFamily:'Arial', fontWeight:600}}>Importance of a Healthy Rotator Cuff:</Typography>
                <br/>  
                <List container justifyContent="flex-start" sx={{listStyle: "decimal", pl: 4,    fontSize:['1rem','1.5rem']}}>
                  <ListItem sx={{ display: 'list-item', p:1}}>
                      <b>Prevention of Injuries: </b>
                      A well-conditioned rotator cuff is vital in preventing injuries, especially in individuals engaged in overhead activities or sports. Strengthening these muscles helps create a protective shield around the shoulder joint.                  
                      </ListItem>
                  <ListItem sx={{ display: 'list-item', p:1}}>
                      <b>Rehabilitation After Injuries: </b>
                      In cases of shoulder injuries, rehabilitation often involves specific exercises to strengthen the rotator cuff. This targeted approach aids in recovery and reduces the risk of re-injury.                  
                      </ListItem>
                  <ListItem sx={{ display: 'list-item', p:1}}>
                      <b>Improved Shoulder Functionality: </b>
                      Individuals with a strong and well-functioning rotator cuff experience improved shoulder functionality. This is particularly important for maintaining an active and healthy lifestyle.                      
                      </ListItem>
                </List>



              </Paper>
            <br/>
            <Divider/>
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
        <Grid2 size={8} sx={{p:1, fontSize:['1rem','1.5rem'], textAlign:'left'}}>
          Understanding the role of the <b>rotator cuff</b> is key to appreciating the intricate mechanics of the shoulder joint.
          Whether you're reaching for a book on a high shelf or throwing a ball, 
          the rotator cuff silently works behind the scenes, ensuring the <b>smooth and coordinated movements of the shoulder</b>. Taking proactive steps to maintain the health and strength of the rotator cuff can contribute to overall shoulder well-being and enhance the quality of our daily activities. So, let's give credit to this unsung hero and prioritize the care of our rotator cuff for a resilient and functional shoulder.
        </Grid2>
        <Grid2 size={3} sx={{p:1, fontSize:['1rem','1.5rem'], textAlign:'left'}}>
        </Grid2>
      </Grid2>


      

      {/* content */}
      

    </Box>
  );
}

export default Blog4;

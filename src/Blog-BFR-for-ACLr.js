import React from "react";
//various components
import {Paper,Button,Typography,ButtonGroup,Box,AppBar,useMediaQuery,ButtonBase,BottomNavigation,Container,
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

function Blog2() {

  

  return (
    // basic div tag that uses css
    <Box>
      <Helmet>
        <title>Imperium PTP Blog | Blood Flow Restriction Training in Post-Operative ACL Reconstruction Surgery</title>
        <meta name="description" content="Accelerating Recovery: Blood Flow Restriction Training in Post-Operative ACL Reconstruction Surgery - A Physical Therapy Breakthrough" />
        <meta name="keywords" content="ptp, pt, physical therapy, professional, ACL, reconstruction surgery, blood flow restriction training, post-op, misconceptions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      </Helmet>

      {/* content */}
      <Typography sx={{
        fontSize: [20,25,30],
        fontWeight: 900,
        textAlign: 'center',
        p:2,
        
      }} >Blood Flow Restriction Training<br/> in Post-Operative ACL Reconstruction Surgery</Typography>

      {/* blog content (description and image) */}
      <Box
        sx={{p: 2,
          display: "flex", //creates flexbox to arrange content
          flexDirection: ["column", "column", "row", "row", "row"], //each new content is added in a row if screen > md, columb if <= md
          justifyContent: "space-evenly", //content starts at the end of the line (right)
          flexGrow: 1, //stretch size of elements to fill unused space on line
          alignItems: "center", //centers items inside box horizontally (for when column)
        }}
      >
        {/* blog post descriprion */}
          <Paper sx={{fontSize: [15,20,25],width: ['90%', '90%', 500, 700],height: ['100%'],p: 2,bgcolor: '#eeeeee',}}>
            <Typography sx={{fontSize:[20,25,30], fontWeight: '900', color:'#000000'}}>Accelerating Recovery: Blood Flow Restriction Training in Post-Operative ACL Reconstruction Surgery - A Physical Therapy Breakthrough
            </Typography>
            Anterior Cruciate Ligament (ACL) injuries are not uncommon, and for those who undergo surgical reconstruction, the journey to recovery can be challenging. In recent years, blood flow restriction (BFR) training has emerged as a revolutionary approach in the field of physical therapy, particularly in post-operative ACL reconstruction cases. In this blog post, we'll explore the concept of blood flow restriction training and delve into current research that supports its effectiveness in expediting recovery and enhancing outcomes after ACL surgery.
            <br/>
            Understanding Blood Flow Restriction Training: Blood flow restriction training involves the use of a specialized tourniquet system to partially restrict blood flow to the exercising muscles during resistance training. This unique approach allows individuals to achieve significant muscular gains with lower resistance loads, making it particularly beneficial in post-operative scenarios where traditional high-load exercises may not be immediately feasible.
          </Paper>

        {/* blog post image */}
        <Box component="img" sx={{width: '25%' , height: '25%', p:2,borderRadius:'2%'}}
                  alt={"ACL_Anatomy"}
                  src={"ACL_UPCLOSE.jpg"}/>
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
          alignItems: "flex-start", //centers items inside box horizontally (for when column)
        }}
      >
        {/* blog post*/}
          <Box>
            <Paper sx={{fontSize: 15, width: ['90%','98%','80%'], p: 2,}}>
              {/* section 1 */}
              <Typography sx={{fontSize:20, fontWeight: '900', color:'#000000'}}>1. Early Initiation of Rehabilitation:</Typography>
              One of the key advantages of blood flow restriction training is its applicability in the early stages of rehabilitation. Research, such as that conducted by Loenneke et al. (2011) [1], indicates that BFR training can be initiated soon after surgery, even during the initial phases of ACL reconstruction recovery. This early intervention helps prevent muscle atrophy and accelerates the rehabilitation process.
              <br/><br/>
              {/* section 2 */}
              <Typography sx={{fontSize:20, fontWeight: '900', color:'#000000'}}>2. Muscle Hypertrophy with Lower Loads:</Typography>
              Studies, including a meta-analysis by Hughes et al. (2017) [2], have consistently demonstrated that blood flow restriction training induces muscle hypertrophy even with low-resistance exercises. In the context of ACL surgery recovery, this is particularly beneficial as it allows individuals to build muscle strength without placing excessive strain on the healing ligament.            <br/><br/>
              {/* section 3 */}
              <Typography sx={{fontSize:20, fontWeight: '900', color:'#000000'}}>3. Improved Muscle Activation and Endurance:</Typography>
              BFR training has been shown to enhance muscle activation and endurance. According to a study by Brandner et al. (2019) [3], BFR can lead to increased muscle activation during low-load resistance exercises. This is crucial in the post-ACL surgery phase, as it helps individuals regain muscle function and stability around the knee joint.             <br/><br/>
              {/* section 4 */}
              <Typography sx={{fontSize:20, fontWeight: '900', color:'#000000'}}>4. Reduced Joint Strain and Pain Perception:</Typography>
              Another notable advantage of BFR training is its potential to minimize joint strain and reduce pain perception during rehabilitation. A study by Madarame et al. (2010) [4] found that BFR training allowed participants to achieve comparable strength gains with lower loads, reducing stress on the joints and minimizing discomfort.             <br/><br/>
              {/* section 5 */}
              <Typography sx={{fontSize:20, fontWeight: '900', color:'#000000'}}>5. Functional Improvements and Faster Return to Activity:</Typography>
              Current research, including a systematic review by Centner et al. (2019) [5], suggests that BFR training contributes to functional improvements and may facilitate a faster return to pre-injury activity levels. This is particularly significant for individuals recovering from ACL surgery who aspire to resume sports or physical activities.             <br/><br/>
              
              {/* section 6 */}
            </Paper>
            <br/>
            <Paper sx={{fontSize: [20,25,30],width: ['90%', '90%', 500, 700],height: ['100%'],p: 2,bgcolor: '#eeeeee',}}>
            Blood flow restriction training represents a groundbreaking approach in the realm of post-operative ACL reconstruction rehabilitation. The combination of early initiation, muscle hypertrophy with lower loads, improved muscle activation, reduced joint strain, and faster return to activity positions BFR as a game-changer in physical therapy.
            <br/><br/>As with any rehabilitation strategy, it's essential for individuals to consult with their healthcare professionals, including physical therapists, before incorporating blood flow restriction training into their recovery plan. The evidence from current research, however, strongly supports the integration of BFR into post-ACL surgery rehabilitation protocols, offering new hope for a swifter and more effective recovery journey.
            </Paper>
          </Box>

       
       
       {/* blog links */}
       <Box sx={{        display: 'flex', //creates flexbox to arrange content
        flexDirection: 'column', //each new content is added in a row
        justifyContent: 'flex-end', //content starts at the end of the line (right)
        flexGrow:1,fontSize:1, width: ['100%','80%','50%']}}>

            <Typography sx={{fontSize:25, textAlign:'center'}}>Recent Blog Posts</Typography>

            {postData.map((post, index) => (
            <div key={index}>
              <Button  sx={{display:'flex', flexDirection:['column','column','row'], fontSize:[20,25,30]}} href={post.href}>
                <Box component="img" sx={{ width: [50, 50, 60], height: [20, 20, 30],borderRadius:'2%'}}
                  alt={post.alt}
                  src={post.img}/>
                  <Typography sx={{textAlign:'center', p:1}}>{post.title}</Typography>
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

export default Blog2;

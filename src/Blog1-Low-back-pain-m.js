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
  Container,Grid2,ListItem,List
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

function Blog1() {
  return (
    // basic div tag that uses css
    <Box>
      <Helmet>
        <title>Imperium PTP Blog | Misconceptions of Low Back Pain</title>
        <meta
          name="description"
          content="Debunking Common Misconceptions About Low Back Pain(LBP): Insights from Physical Therapy and Current Research"
        />
        <meta
          name="keywords"
          content="ptp, pt, physical therapy, professional, low back pain, misconceptions"
        />
      </Helmet>
      
      <Grid2 container spacing={0.5} sx={{pl:2,pr:2, justifyContent:'center'}} columns={{xs:2,sm:4,md:12}}>
        <Grid2 size={8}>
          <Grid2 item >
            <Paper sx={{ p:3, borderRadius:3, boxShadow:5, border:0, bgcolor:'#dddddd'}}>
              

              
              <Typography variant="h6" textAlign='center' sx={{fontSize:['1.2rem','1.7rem'], minHeight:['7rem','11rem'],alignContent:'center',textShadow:'#686 1px 1px 1px', fontWeight:'200',fontFamily:'Arial, sans-serif'}}>
                Debunking Common Misconceptions About Low Back Pain (LBP)
                Insights from Physical Therapy and Current Research
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
                <Typography sx={{fontSize:['1.5rem','2rem'], fontWeight:'400', fontFamily:'Arial'}}>
                  Misconceptions of Low Back Pain
                </Typography>
                Low back pain is a prevalent condition that affects millions of 
                people worldwide. Unfortunately, misconceptions about its causes 
                and treatments persist, leading to ineffective management and prolonged
                 suffering. In this article, we'll explore some common misconceptions
                  surrounding low back pain from a physical therapy standpoint, 
                  backed by insights from current research.
                <br/><br/>
              <Divider/>
              <br/>



              


              <Typography sx={{fontSize:['1.5rem','2rem'], fontFamily:'Arial', fontWeight:'600'}}>Common Misconceptions:</Typography>
              <br/>
              <Grid2 container justifyContent="flex-start" sx={{paddingLeft:3, fontSize:['1rem','1.5rem']}}>
                <ListItem sx={{ display: 'list-item', p:1}}><b>Misconception: Rest is the Best Treatment for Low Back Pain.</b> 
                  Contrary to the belief that prolonged rest is the solution, current research highlights the importance of early and gradual movement for low back pain. Physical therapists advocate for active approaches, such as specific exercises and movement therapies, to improve flexibility and strengthen the muscles supporting the spine.
                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}><b>Misconception: Imaging Always Reveals the Underlying Cause.</b>
                Many individuals assume that diagnostic imaging, such as X-rays or MRIs, will always pinpoint the cause of low back pain. However, research indicates that structural abnormalities are often present in individuals without any pain symptoms. Physical therapists emphasize the need for a comprehensive assessment that considers functional limitations and movement patterns rather than relying solely on imaging results.                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}><b>Misconception: Surgery Is the Only Effective Solution.</b>
                While surgery may be necessary in some cases, it's not the only solution for low back pain. Current research supports the efficacy of conservative treatments, including physical therapy, for managing and alleviating symptoms. Non-invasive approaches often yield positive outcomes, emphasizing the importance of exploring these options before considering surgery.                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}><b>Misconception: Pain Equals Damage.</b>
                It's a common misconception that the severity of pain directly correlates with the extent of tissue damage. Research suggests that pain is a complex and subjective experience influenced by various factors, including psychological and social aspects. Physical therapists focus on addressing pain through a biopsychosocial model, considering both physical and psychosocial factors influencing the individual's experience.                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}><b>Misconception: Core Strengthening Is Always the Answer.</b>
                While core strengthening exercises play a crucial role in low back pain management, assuming that every case requires the same approach is a misconception. Physical therapists conduct thorough assessments to identify specific muscle imbalances and tailor exercise programs accordingly. A personalized approach is essential for addressing the unique needs of each individual.                </ListItem>
                <ListItem sx={{ display: 'list-item', p:1}}><b>Misconception: Bed Rest Accelerates Recovery.</b>
                Bed rest was once commonly prescribed for low back pain, but research now emphasizes the detrimental effects of prolonged inactivity. Physical therapists advocate for an active approach that includes targeted exercises, mobilization, and posture education to promote recovery and prevent recurrence.                </ListItem>
              </Grid2>
                <br/>
              <Divider/>
              <br/>

              Dispelling misconceptions about low back pain is crucial for effective management and improved outcomes. Current research aligns with the principles of physical therapy, emphasizing the importance of movement, personalized care, and a holistic approach to address low back pain.                <br/>
If you or someone you know is dealing with low back pain, consulting a physical therapist can provide valuable insights and evidence-based strategies for a comprehensive and effective recovery.              </Paper>
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

export default Blog1;

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

function Blog1() {

  

  return (
    // basic div tag that uses css
    <Box>
      <Helmet>
        <title>Imperium PTP Blog | Misconceptions of Low Back Pain</title>
        <meta name="description" content="Debunking Common Misconceptions About Low Back Pain(LBP): Insights from Physical Therapy and Current Research" />
        <meta name="keywords" content="ptp, pt, physical therapy, professional, low back pain, misconceptions" />
      </Helmet>

      {/* content */}
      <Typography sx={{
        fontSize: [20,25,30],
        fontWeight: 900,
        textAlign: 'center',
        p:2,
      }} >Misconceptions<br/>of Low Back Pain</Typography>

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
            <Typography sx={{fontSize:[20,25,30], fontWeight: '900', color:'#000000'}}>Debunking Common Misconceptions About Low Back Pain(LBP): Insights from Physical Therapy and Current Research</Typography>
            Low back pain is a prevalent condition that affects millions of people worldwide. Unfortunately, misconceptions about its causes and treatments persist, leading to ineffective management and prolonged suffering. In this article, we'll explore some common misconceptions surrounding low back pain from a physical therapy standpoint, backed by insights from current research.
          </Paper>
        <Typography sx={{ fontSize: 30, textAlign: "center", p:2 }}>
          
        </Typography>

        {/* blog post image */}
        <Box component="img" sx={{width: '25%' , height: '25%', p:2,borderRadius:'2%'}}
                  alt={"Lower Back Pain(LBP)"}
                  src={"LBP.jpeg"}/>
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
        <Paper sx={{fontSize: 15, width: ['90%','98%','80%'], p: 2,}}>
            {/* section 1 */}
            <Typography sx={{fontSize:20, fontWeight: '900', color:'#000000'}}>1. Misconception: Rest is the Best Treatment for Low Back Pain.</Typography>
            Contrary to the belief that prolonged rest is the solution, current research highlights the importance of early and gradual movement for low back pain. Physical therapists advocate for active approaches, such as specific exercises and movement therapies, to improve flexibility and strengthen the muscles supporting the spine.
            <br/><br/>
            {/* section 2 */}
            <Typography sx={{fontSize:20, fontWeight: '900', color:'#000000'}}>2. Misconception: Imaging Always Reveals the Underlying Cause.</Typography>
            Many individuals assume that diagnostic imaging, such as X-rays or MRIs, will always pinpoint the cause of low back pain. However, research indicates that structural abnormalities are often present in individuals without any pain symptoms. Physical therapists emphasize the need for a comprehensive assessment that considers functional limitations and movement patterns rather than relying solely on imaging results.
            <br/><br/>
             {/* section 3 */}
             <Typography sx={{fontSize:20, fontWeight: '900', color:'#000000'}}>3. Misconception: Surgery Is the Only Effective Solution.</Typography>
             While surgery may be necessary in some cases, it's not the only solution for low back pain. Current research supports the efficacy of conservative treatments, including physical therapy, for managing and alleviating symptoms. Non-invasive approaches often yield positive outcomes, emphasizing the importance of exploring these options before considering surgery.
             <br/><br/>
             {/* section 4 */}
             <Typography sx={{fontSize:20, fontWeight: '900', color:'#000000'}}>4. Misconception: Pain Equals Damage.</Typography>
             It's a common misconception that the severity of pain directly correlates with the extent of tissue damage. Research suggests that pain is a complex and subjective experience influenced by various factors, including psychological and social aspects. Physical therapists focus on addressing pain through a biopsychosocial model, considering both physical and psychosocial factors influencing the individual's experience.
             <br/><br/>
             {/* section 5 */}
             <Typography sx={{fontSize:20, fontWeight: '900', color:'#000000'}}>5. Misconception: Core Strengthening Is Always the Answer.</Typography>
             While core strengthening exercises play a crucial role in low back pain management, assuming that every case requires the same approach is a misconception. Physical therapists conduct thorough assessments to identify specific muscle imbalances and tailor exercise programs accordingly. A personalized approach is essential for addressing the unique needs of each individual.
             <br/><br/>
             {/* section 6 */}
             <Typography sx={{fontSize:20, fontWeight: '900', color:'#000000'}}>6. Misconception: Bed Rest Accelerates Recovery.</Typography>
             Bed rest was once commonly prescribed for low back pain, but research now emphasizes the detrimental effects of prolonged inactivity. Physical therapists advocate for an active approach that includes targeted exercises, mobilization, and posture education to promote recovery and prevent recurrence.
             
             {/* section 7 */}
          </Paper>
          <br/>
          <Paper sx={{fontSize: 25,width: ['100%', '100%', 500, 700],height: ['100%'],p: 2,bgcolor: '#eeeeee',}}>
            Dispelling misconceptions about low back pain is crucial for effective management and improved outcomes. Current research aligns with the principles of physical therapy, emphasizing the importance of movement, personalized care, and a holistic approach to address low back pain. If you or someone you know is dealing with low back pain, consulting a physical therapist can provide valuable insights and evidence-based strategies for a comprehensive and effective recovery.
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

export default Blog1;

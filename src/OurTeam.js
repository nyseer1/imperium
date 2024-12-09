import "@fontsource/roboto/300.css";
import React from "react";
//various components
import {
  Box,
  Grid2,
  Paper,
  styled,
  Typography
} from "@mui/material";

import {
  green
} from "@mui/material/node/colors";

//for menu button

// to use themes

//for metadata
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
function OurTeam() {
  const itemData = [
    {
      img: "Frank-Imperium-Head-Shot-1.png",
      title: "Pic 1",
    },
  ];


  return (
    // basic div tag that uses css
    <Box>
      <Helmet>
        <title>Meet Our Team | Imperium Physical Therapy and Performance</title>
        <meta name="description" content="Meet the professional physical therapists behind imperium physical therapy and performance. Our talented team and achieve your fitness goals. Join us today for a healthier you" />
        <meta name="keywords" content="ptp, pt, physical therapy, professional" />
      </Helmet>

      <Typography variant="h6" textAlign='center' sx={{fontSize:['1.8rem','2.3rem'],p:3, fontWeight:300, letterSpacing: '1px',fontWeight:'400',fontFamily:'Arial, sans-serif' }}>
                Meet Our Team
              </Typography> 

      <Grid2 container spacing={0.5} sx={{pl:2,pr:2, justifyContent:'center'}} columns={{xs:2,sm:4,md:12}}>

        <Grid2 size={8}>
          <Grid2 item>
            <Paper sx={{fontSize: 15, p: 2,border:1,borderColor:'#aaaaaa', boxShadow:'5'}}>
                <Typography sx={{color:'#50ac54', fontSize:30, fontWeight:'bold', p:1}}>Dr. Frank Prochilo</Typography>
                <Typography sx={{color:'#000000', fontSize:20, fontWeight:'bold',p:1}}>PT, DPT, OCS - Owner of Imperium Physical Therapy</Typography>
                <Typography
                variant="body1"
                gutterBottom
                sx={{ font: [2], color: "#4E5652" }}
              >
                Dr. Frank Prochilo is the owner and physical therapist at Imperium Physical Therapy, a premier
                clinic specializing in orthopedics and sports rehabilitation. With a deep passion for helping
                patients optimize their physical performance and recover from injuries, Frank combines
                advanced clinical expertise with a personalized approach to care.
                <br/>
                Frank holds a Doctorate in Physical Therapy (DPT) from SUNY Downstate Medical Center and
                is board-certified in <>Orthopedic Physical Therapy (OCS)</> through the <>American Board of Physical
                Therapy Specialties (ABPTS)</>. With years of experience working with athletes of all levels—from
                weekend warriors to Division I competitors, Frank is dedicated to helping each patient achieve
                their individual goals, whether it&#39;s returning to sport, overcoming chronic pain, or improving
                overall function.
                <br/>
                Imperium Physical Therapy utilizes the latest evidence-based techniques, including manual
                therapy, therapeutic exercise, and cutting-edge rehabilitation technology. Frank believes in
                empowering patients through education and tailored treatment plans, ensuring that each
                individual receives the care and support they need to recover fully and prevent future injuries.
                <br/>
                In addition to clinical practice, Frank is an adjunct professor at Brooklyn College and is actively
                involved in the local sports community, offering injury prevention workshops, collaborating with
                coaches and trainers, and has provided on-site care at sporting events. Frank’s commitment to
                excellence and patient-centered care has earned Imperium Physical Therapy a reputation as a
                trusted destination for orthopedic and sports rehabilitation in the area.

              </Typography>
              <p></p>
            </Paper>
          </Grid2>
        </Grid2>
        <Grid2 size={3}>
          <Grid2 item>
            {/* blog post image */}
            <Box component="img" sx={{width: '100%' , height: '100%', p:2,borderRadius:'2%',border:2,borderColor:green[500]}}
                  alt={"Frank Prochilo"}
                  src={"Frank-Imperium-Head-Shot-1.png"}/>
            
          </Grid2>
        </Grid2>

        <Grid2 size={8}>
          <Grid2 item>
            <Paper sx={{fontSize: 15, p: 2,border:1,borderColor:'#aaaaaa', boxShadow:'5'}}>
                <Typography sx={{color:'#50ac54', fontSize:30, fontWeight:'bold', p:1}}>Nyseer Couse</Typography>
                <Typography sx={{color:'#000000', fontSize:20, fontWeight:'bold',p:1}}>Aspiring Front End Web Dev | UI/UX Designer </Typography>
                <Typography
                variant="body1"
                gutterBottom
                sx={{ font: [2], color: "#4E5652" }}
              >
                Nyseer Couse is a Brooklyn College student studying computer science to be a Web Developer and UI/UX Designer.
                <br/>
                Attending Brooklyn College (BC), City University of New York (CUNY) | Brooklyn, NY Graduating Fall 2025
                <br/>
                Applied modern Material UI/UX designs to the website, aiming to create a fluid and responsive user interface with minimalistic design
                <br/>
                Implemented search engine optimizations for the website (SEO) including on page optimizations (incorperated strong keywords in metadata and content), keyword research, and improving user experience
                <br/>
                CUNY Tech Prep Alumni
                <br/>
                Developing Skills in React.js, javascript, CSS, html
                <br/>
                Proficient With Git/Github, Figma, Adobe Acrobat, Microsoft Office, Markdown, and Node.js
                <br/>
                In addition to many web dev and UI projects, Nyseer is currently a math and programming tutor at Brooklyn College, helping those in need of academic guidance

              </Typography>
              <p></p>
            </Paper>
          </Grid2>
        </Grid2>
        <Grid2 size={3} sx={{border:2,borderColor:green[500]}}>
          <Grid2 item>
            {/* blog post image */}
            <Box component="img" sx={{width: '100%' , height: '100%', p:2,borderRadius:'2%',}}
                  alt={"Nyseer Couse"}
                  src={"nyseer-couse.jpg"}/>
            
            
          </Grid2>
          <Grid2 item>
            {/* blog post image */}
            <Box component="img" sx={{width: '100%' , height: '100%', p:2,borderRadius:'2%',}}
                  alt={"Nyseer Couse"}
                  src={"nyseer-couse2.png"}/>
            
            
          </Grid2>
        </Grid2>

        <Grid2 size={8}>
          <Grid2 item>
            <Paper sx={{fontSize: 15, p: 2,border:1,borderColor:'#aaaaaa', boxShadow:'5'}}>
                <Typography sx={{color:'#50ac54', fontSize:30, fontWeight:'bold', p:1}}>Mario E. Guerrero</Typography>
                <Typography sx={{color:'#000000', fontSize:20, fontWeight:'bold',p:1}}>Aspiring Front End Developer</Typography>
                <Typography
                variant="body1"
                gutterBottom
                sx={{ font: [2], color: "#4E5652" }}
              >
                Mario is a Front-End Developer for the website.
                <br/>
                He focuses on Front-End support of the website. His role specialty is 
                testing and editing the website, checking for any errors or inconsistencies, 
                and necessary updates if required.
                <br/>
                His main web-dev skills are HTML, JavaScript 
                and CSS. He has mastered React.js to his skillset after development of the website. 
                <br/>
                Lately he learned to use and master Material UI, which is an open-source 
                React component library.  Mario holds a Bachelor's Degree from CUNY Brooklyn College.

              </Typography>
              <p></p>
            </Paper>
          </Grid2>
        </Grid2>
        <Grid2 size={3} sx={{border:2,borderColor:green[500]}}>
          <Grid2 item>
            {/* blog post image */}
            <Box component="img" sx={{width: '100%' , height: '100%', p:2,borderRadius:'2%',}}
                  alt={"Mario E. Guerrero"}
                  src={"mario.jpg"}/>

          </Grid2>
        </Grid2>



      </Grid2>





      <Box sx={{ width: "100%" }}>
        {" "}
        
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
        
        
      </Box>

      </Box>
    </Box>
  );
}
export default OurTeam;

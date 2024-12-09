import React from "react";
//various components
import {
  Box,
  Button, Typography
} from "@mui/material";
//for menu button

//to use divider

//metadata 
import { Helmet } from "react-helmet-async";

//blog pages
export const postData = [
  {
    img: "https://painhealth.csse.uwa.edu.au/wp-content/uploads/2016/04/painhealth-low-back-pain.jpg",
    alt: "Low_Back_Pain_(LBP)",
    title: "Misconceptions of LBP",
    href: "blog1",


  },
  {
    img: "ACL_INJURY.jpg",
    alt: "BFR_for_ACLr",
    title: "BFR Training in Post-Op ACL Reconstruction Surgery",
    href: "blog2",
  },
  {
    img: "Stretching_service_example1.JPG",
    alt: "rotator_cuff",
    title: "Understanding the Crucial Role of the Rotator Cuff",
    href: "blog4",
  },
  // {
  //   img: "Stretching_service_example1.JPG",
  //   alt: "injury_prevention_strategies",
  //   title: "ACL in Knee Stability & Cutting-Edge Injury Prevention Strats",
  //   href: "blog5",
  // },
];

function Bloglist() {

  return (
    // basic div tag that uses css
    <Box>
      <Helmet>
        <title>Imperium PTP Blogs | Imperium Physical Therapy and Performance</title>
        <meta name="description" content="Get educational information on Orthopedic physical therapy, sports physical therapy,
        etc." />
        <meta name="keywords" content="ptp, pt, blog, educational, physical therapy, Orthopedic physical therapy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      </Helmet>


      {/* content */}
       <Box sx={{        display: 'flex', //creates flexbox to arrange content
        flexDirection: 'column', //each new content is added in a row
        justifyContent: 'space-evenly', //content starts at the end of the line (right)
        flexGrow:1,
        fontSize:1,
        width: ['100%'],}}>
            <Typography sx={{fontSize:40, textAlign:'center'}}>Recent Blog Posts</Typography>
            
            <Box
        sx={{p: 2,
          display: "flex", //creates flexbox to arrange content
          flexDirection: ["column", "column", "row", "row", "row"], //each new content is added in a row if screen > md, columb if <= md
          justifyContent: "space-evenly", //content starts at the end of the line (right)
          flexGrow: 1, //stretch size of elements to fill unused space on line
          alignItems: "center", //centers items inside box horizontally (for when column)
        }}
      >
        <Box sx={{width:'100%'}}>
        {postData.map((post, index) => (
            <div key={index}>
              <Button  sx={{display:'flex', flexDirection:['column','column','row']}} href={post.href}>
                <Box component="img" sx={{ width: ['20%', '20%', '10%'], height: ['20%', '20%', '10%'],borderRadius:'2%'}}
                  alt={post.alt}
                  src={post.img}/>
                  <Typography sx={{textAlign:'center', p:1,fontSize:['1rem','1.5rem']}}>{post.title}</Typography>
              </Button>
              
            </div>
          ))}
          </Box>


        
      </Box>
            
            



            
        </Box> 
    </Box>
  );
}

export default Bloglist;

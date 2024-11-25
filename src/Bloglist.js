import React from "react";
//various components
import {Paper,Button,Typography,ButtonGroup,Box,AppBar,useMediaQuery,ButtonBase,BottomNavigation,Container,
} from "@mui/material";
//for menu button
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu"; //for menu icon

//to use divider
import Divider from '@mui/material/Divider';

//blog pages

export const postData = [
  {
    img: "https://painhealth.csse.uwa.edu.au/wp-content/uploads/2016/04/painhealth-low-back-pain.jpg",
    alt: "Low_Back_Pain_(LBP)",
    title: "Misconceptions of LBP",
    href: "blog1",


  },
  {
    img: "https://imperiumptp.com/wp-content/uploads/2023/04/thumbnail_IMG_2514-square.jpg",
    alt: "BFR_for_ACLr",
    title: "Blood Flow Restriction Training in Post-Operative ACL Reconstruction Surgery",
    href: "blog2",
  },
];

function Bloglist() {

  return (
    // basic div tag that uses css
    <Box>

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
        <Box sx={{width:900}}>
        {postData.map((post, index) => (
            <div key={index}>
              <Button  sx={{display:'flex', flexDirection:['column','column','row']}} href={post.href}>
                <Box component="img" sx={{ width: [50, 50, 60], height: [20, 20, 30],}}
                  alt={post.alt}
                  src={post.img}/>
                  <Typography sx={{textAlign:'center', p:1}}>{post.title}</Typography>
              </Button>
              
            </div>
          ))}
          </Box>


        
      </Box>
            
            



            
        </Box> 
      
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Box>
  );
}

export default Bloglist;

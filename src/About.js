import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import { Masonry } from "@mui/lab";
//various components
import {
  Box,
  Paper,
  styled,
  Typography
} from "@mui/material";


//for menu button
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu"; //for menu icon

// to use themes
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
function About() {
  const itemData = [
    {
      img: "Imperium_Physical_Therapy_and_Performance_Building.jpg",
      title: "Pic 1",
    },
    {
      img: "Imperium_Physical_Therapy_and_Performance_Building_3.jpg",
      title: "Pic 2",
    },
  ];


  return (
    // basic div tag that uses css
    <Box>
      <Helmet>
        <title>Imperium Physical Therapy and Performance Team</title>
        <meta name="description" content="The professional physical therapists behind imperium physical therapy and performance" />
        <meta name="keywords" content="ptp, pt, physical therapy, professional" />
      </Helmet>
      <Box sx={{ width: "100%" }}>
        {" "}
        <Typography sx={{ textAlign:'center' }} variant="h1">
          About Us
        </Typography>
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
        <Paper sx={{fontSize: 15, p: 2,}}>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ font: [2], color: "#000000" }}
          >
            We are a physical therapy practice that specializes in the diagnoses
            and rehabilitation of orthopedic related conditions, management of
            post operative cases and overall optimization of functional ability
            including restoration of mobility, range of motion and strength.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ font: [2], color: "#000000" }}
          >
            Our mission is to improve the health and wellness of our clients by
            empowering them with the knowledge and skills to optimize their
            physical potential. Our vision is to develop championship athletes
            and to revitalize active lifestyles.
          </Typography>
          <p></p>
        </Paper>
        
        <Masonry
          justifyContent="center"
          sx={{
            bgcolor: "background.paper",
            m: 1,
            border: 5,
            borderColor: "green",
            borderRadius: "6px",
            width:['100%','100%',2000,]
          }}
          columns={2}
          spacing={2}
        >
          
          {itemData.map((item, index) => (
            <Box key={index}>
              
              <Box component="img" sx={{borderBottomLeftRadius: 4, borderBottomRightRadius: 4,
                display: "block",borderColor: "green",
                width:'100%', height:'100%', borderRadius:'2%'}}
                alt={item.title}
                src={`${item.img}?w=162&auto=format`}
                loading="lazy"/>
            </Box>
              
          ))}
        </Masonry>
      </Box>

      </Box>

      {/* <TestScreenSmallOrLower /> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Box>
  );
}
export default About;
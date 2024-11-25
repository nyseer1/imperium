import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import { Masonry } from "@mui/lab";
//various components
import {
  Breadcrumbs,
  Grid2,
  Paper,
  Toolbar,
  Container,
  Button,
  Link,
  Typography,
  ButtonGroup,
  Box,
  ListItem,
  AppBar,
  ImageListItemBar,
  useMediaQuery,
  ButtonBase,
  BottomNavigation,
  styled,
  Divider,
} from "@mui/material";

import ImageList from "@mui/material/node/ImageList";
import ImageListItem from "@mui/material/node/ImageListItem";

//for menu button
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu"; //for menu icon

// to use themes
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
      img: "https://imperiumptp.com/wp-content/uploads/2023/04/IMG_5143-scaled-square.jpg",
      title: "Pic 1",
    },
    {
      img: "https://imperiumptp.com/wp-content/uploads/2023/04/thumbnail_IMG_2514-square.jpg",
      title: "Pic 2",
    },
  ];
  

  return (
    // basic div tag that uses css
    <Box>
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

            <br/><br/><Divider/><br/><br/>
            <Typography sx={{color:'#000000', fontSize:20, fontWeight:'bold'}}>Dr. Frank Prochilo</Typography>is the owner and physical therapist at Imperium Physical Therapy, a premier
            clinic specializing in orthopedics and sports rehabilitation. With a deep passion for helping
            patients optimize their physical performance and recover from injuries, Frank combines
            advanced clinical expertise with a personalized approach to care.
            <br/>
            Frank holds a Doctorate in Physical Therapy (DPT) from SUNY Downstate Medical Center and
            is board-certified in orthopedic physical therapy (OCS) through the American Board of Physical
            Therapy Specialties (ABPTS). With years of experience working with athletes of all levels—from
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
            <div key={index}>
              <img
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                src={`${item.img}?w=162&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                  height:'100%',
                  borderColor: "green",
                }}
              />
            </div>
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

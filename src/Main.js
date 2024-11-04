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
} from "@mui/material";
//for menu button
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu"; //for menu icon

// to use themes
import { createTheme } from "@mui/material/styles";

function Main() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // default theme to get breakpoint values
  const theme = createTheme();
  // bool to check if the screen is breakpoint (size, ex: small sm medium md) or lower
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));

  return (
    // basic div tag that uses css
    <Box>
      {/* static means the appbar will hide itself when scrolling down */}
      <AppBar position="static">
        {/* black box with the logo and it works as a button to goto the homepage */}
        <Box
          sx={{
            background: "#000000",
            color: "#ffffff",
            border: 1,
            borderColor: "#000000",
            borderRadius: 2,
          }}
        >
          <ButtonBase sx={{ width: 140 }} href="/">
            <img
              src="logo.png"
              alt="logo"
              justifyContent="center"
              width="100"
              height="90"
            />
          </ButtonBase>
        </Box>

        {/*conditional rendering, if screen > md render , if <= md render this*/}
        {isMatch ? (
          <ButtonGroup>
            <ButtonBase href="/about">About</ButtonBase>
            <ButtonBase>What We Treat</ButtonBase>
            <ButtonBase href="/ourteam">Our Team</ButtonBase>
            <ButtonBase>Performance Training</ButtonBase>
            <ButtonBase>Blog</ButtonBase>
            <ButtonBase>
              <Box
                sx={{
                  background: "#",
                  color: "#ffffff",
                  border: 2,
                  borderColor: "#000000",
                  borderRadius: 1,
                  p: 1,
                  display: "inline",
                }}
              >
                Contact Us
              </Box>
            </ButtonBase>
          </ButtonGroup>
        ) : (
          <ButtonGroup>
            <ButtonBase
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon fontSize="large" />
            </ButtonBase>
          </ButtonGroup>
        )}

        {/* TODO: 
      outline contact button
      add links to rest of buttons
      add more content below, maybe in page components  
      */}
      </AppBar>

      {/* content */}
      <Box
        sx={{
          p: 2,
          display: "flex", //creates flexbox to arrange content
          flexDirection: ["column", "column", "row", "row", "row"], //each new content is added in a row if screen > md, columb if <= md
          justifyContent: "space-evenly", //content starts at the end of the line (right)
          flexGrow: 1, //stretch size of elements to fill unused space on line
          alignItems: "center", //centers items inside box horizontally (for when column)
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url("pt1.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: [250, 250, 500],
            height: [170, 170, 350],
          }}
        ></Box>
        <Typography sx={{ fontSize: 30, textAlign: "center" }}>
          Giving You the Power to
          <br />
          Improve Your Life
          <Paper
            sx={{
              fontSize: 15,
              width: 300,
              p: 2,
            }}
          >
            We are a team of licensed and experienced physical therapists
            dedicated to providing quality healthcare and individualized
            treatment plans to reduce pain, restore mobility and range of motion
            and to optimize functional potential.
          </Paper>
          <Button href="/ourteam">Learn More</Button>
        </Typography>
      </Box>

      {/* test tertiary function, if small or lower, render this, else render this */}
      {/* {isMatch ? <h1>true</h1> : <h1>false</h1>} */}

      {/* menu popup window, only rendered on menu button click, any click away removes it*/}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Button sx={{ fontSize: [5, 10] }} href="/about" onClick={handleClose}>
          About
        </Button>
        <Button sx={{ fontSize: [5, 10] }} href="/about" onClick={handleClose}>
          What We Treat
        </Button>
        <Button sx={{ fontSize: [5, 10] }} href="/about" onClick={handleClose}>
          Our Team
        </Button>
        <Button sx={{ fontSize: [5, 10] }} href="/about" onClick={handleClose}>
          Performance Training
        </Button>
        <Button sx={{ fontSize: [5, 10] }} href="/about" onClick={handleClose}>
          Blog
        </Button>
        <Button sx={{ fontSize: [5, 10] }} href="/about" onClick={handleClose}>
          Contact Us
        </Button>
      </Menu>

      {/* footer */}
      <BottomNavigation
        sx={{
          bgcolor: "#50ac54",
          position: "static",
          width: "100%",
          bottom: "0%",
          height: "1%",
        }}
      >
        <Typography sx={{ fontSize: 20 }}>Imperium</Typography>
      </BottomNavigation>
    </Box>
  );
}

export default Main;

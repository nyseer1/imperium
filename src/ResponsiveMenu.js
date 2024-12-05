import React from "react";
//various components
import {
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

function ResponsiveMenu() {
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
    <Box  >
      {/* static means the appbar will hide itself when scrolling down */}
      <AppBar position="sticky">
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
              src="imperium_logo.jpg"
              alt="imperium physical therapy and performance PTP logo"
              width="96"
              height="96"
            />
          </ButtonBase>
        </Box>

        {/*conditional rendering, if screen > md render , if <= md render this*/}
        {isMatch ? (
          <ButtonGroup>
            <ButtonBase href="/">Home</ButtonBase>
            <ButtonBase href="/about">About</ButtonBase>
            <ButtonBase href="/what-we-treat">What We Treat</ButtonBase>
            <ButtonBase href="/our-team">Our Team</ButtonBase>
            <ButtonBase href="/performance-training">Performance Training</ButtonBase>
            <ButtonBase href='/blog1'>Blog</ButtonBase>
            <ButtonBase href='/contact'>
              <Box
                sx={{
                  background: "#",
                  color: "#000000",
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
        sx={{height:['100%']}}
      >
        <Button sx={{ fontSize: [15, 12] }} href="/" onClick={handleClose}>
          Home
        </Button>
        <Button sx={{ fontSize: [15, 12] }} href="/about" onClick={handleClose}>
          About
        </Button>
        <Button sx={{ fontSize: [15, 12] }} href="/what-we-treat" onClick={handleClose}>
          What We Treat
        </Button>
        <Button sx={{ fontSize: [15, 12] }} href="/our-team" onClick={handleClose}>
          Our Team
        </Button>
        <Button sx={{ fontSize: [15, 12], textAlign:'center'}} href="/performancetraining" onClick={handleClose}>
          Performance<br/>Training
        </Button>
        <Button sx={{ fontSize: [15, 12] }} href="/blog1" onClick={handleClose}>
          Blog
        </Button>
        <Button sx={{ fontSize: [15, 12] }} href="/contact" onClick={handleClose}>
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
      </BottomNavigation>
      <Typography sx={{color:'#aa0022', fontSize:30, textAlign:'center'}}>Website Under Construction</Typography>
    </Box>
  );
}
export default ResponsiveMenu;
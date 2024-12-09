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
    <Box>
      {/* static means the appbar will hide itself when scrolling down */}
      <AppBar position="sticky">
        {/* black box with the logo and it works as a button to goto the homepage */}
        <Box
          sx={{
            background: "#000000",
            color: "#ffffff",
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,

            borderColor: "#000000",

          }}
        >
          {/* logo image */}
          <ButtonBase variant='none' href='/'>
            <Box component="img"
                    sx={{width: 98 , height: 82, borderRadius:'2%', p:0}}
                    alt={"imperium physical therapy and performance PTP logo"}
                    src={"imperium_logo.jpg"}
            />
          </ButtonBase>

        </Box>

        {/*conditional rendering, if screen > md render , if <= md render this*/}
        {isMatch ? (
          <ButtonGroup variant="appbar">
            <ButtonBase variant='default' href="/">Home</ButtonBase>
            <ButtonBase variant='default' href="/about">About</ButtonBase>
            <ButtonBase variant='default' href="/what-we-treat">What We Treat</ButtonBase>
            <ButtonBase variant='default' href="/our-team">Our Team</ButtonBase>
            <ButtonBase variant='default' href="/performance-training">Performance Training</ButtonBase>
            <ButtonBase variant='default' href='/blog1'>Blog</ButtonBase>
            <ButtonBase variant='default' href='/contact'>
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
          <ButtonGroup variant='appbar'>
            <ButtonBase variant='default'
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
        <ButtonGroup sx={{flexDirection:'column', color:'green'}}>
          <Button variant="greentext" href="/" onClick={handleClose}>
            Home
          </Button>
          <ButtonBase  variant="greentext" href="/about" onClick={handleClose}>
            About
          </ButtonBase>
          <ButtonBase  variant="greentext" sx={{ textAlign:'center'}}href="/what-we-treat" onClick={handleClose}>
            What We Treat
          </ButtonBase>
          <ButtonBase  variant="greentext" href="/our-team" onClick={handleClose}>
            Our Team
          </ButtonBase>
          <ButtonBase  variant="greentext" sx={{ textAlign:'center'}} href="/performancetraining" onClick={handleClose}>
            Performance<br/>Training
          </ButtonBase>
          <ButtonBase variant="greentext"  href="/blog1" onClick={handleClose}>
            Blog
          </ButtonBase>
          <ButtonBase variant="greentext"  href="/contact" onClick={handleClose}>
            Contact Us
          </ButtonBase>
        </ButtonGroup>
      </Menu>
    </Box>
  );
}

export default ResponsiveMenu;

import React, { useState, useEffect } from 'react';
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Facebook,
  FacebookOutlined,
  FacebookTwoTone,
  FormatQuoteRounded,
  Instagram,
} from "@mui/icons-material";
import {
  Box,
  Container,
  ListItemButton,
  ListItem,
  List,
  Link,
  ListItemText,
  BottomNavigationAction,
  BottomNavigation,
  Typography,
  Button,
  ButtonBase,
} from "@mui/material";
import { green } from "@mui/material/node/colors";
import Grid from "@mui/material/Grid2";

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
      <Button onClick={scrollToTop} sx={{color:'#fafafa',transition: "background 0.3s, color 1s", bgcolor:green[600],
          "&:hover": {
            backgroundColor: green[900],
          },}}>Back to Top <ArrowUpwardIcon sx={{p:0.2}}/>  </Button>
    </div>
  );
};

export default ScrollToTopButton;
import * as React from "react";
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
import Grid from "@mui/material/Grid2";

export function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <BottomNavigation
        sx={{
          bgcolor: "#50ac54",
          position: "static",
          width: "100%",
          bottom: "0%",
          height: "1%",
        }}
      >
        <Typography sx={{ fontSize: 20, color: 'green'}}>Imperium</Typography>
      </BottomNavigation> 
      <Grid
        sx={{ p: 2, background: "#2BC942", flexGrow: 1 }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 2, md: 4 }}
      >
        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          <Container sx={{ color: "black" }}>
            <b>CONTACT INFO</b>
            <br/>
            <br/>
            <b>Address</b>
            <address style={{ textDecoration: "none" }}>
              <ButtonBase href='https://g.co/kgs/oaHpMAF'>

                1897 Wantagh Ave<br/>
                Wantagh, NY 11793<br/>
              </ButtonBase>
              <br/>
              <br/>
              <b>Phone:</b>{" "}
              <Link
                sx={{ color: "black", fontSize: 16, textDecoration: "none" }}
                href="tel:+5164901480"
              >
                {" "}
                (516) 490-1480
              </Link>
              <br/>
              <b>Fax:</b>{" "}
              <Link
                sx={{ color: "black", fontSize: 16, textDecoration: "none" }}
                href="tel:+5164904009"
              >
                {" "}
                (516) 490-4009
              </Link>
              <br/>
            </address>
          </Container>
        </Grid>
        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          {" "}
          <Container
            sx={{ color: "black", fontSize: 16, textDecoration: "none" }}
          >
            <b>WORKING HOURS</b>

            <List sx={{ color: "black", fontSize: 16, textDecoration: "none"}}>
              <ListItem
                sx={{ color: "black", fontSize: 16, textDecoration: "none" }}
                disablePadding
              >
                <b>Monday & Wednesday:</b> 8:00am – 7:00pm
              </ListItem>
              <ListItem disablePadding>
                <b> Tuesday & Thursday:</b> 8:00am – 3:00pm
              </ListItem>
              <ListItem disablePadding>
                <b>Friday:</b> 8:00am – 5:00pm
              </ListItem>
              <ListItem disablePadding>
                <b>Saturday:</b> 8:00am – 12:00pm
              </ListItem>
              <ListItem disablePadding>
                <b>Sunday:</b> CLOSED
              </ListItem>
            </List>
          </Container>
        </Grid>
      </Grid>

      <Box sx={{color:"white", backgroundColor: "green", textAlign: "center", p: 1 }}>
        © 2024 IMPERIUM PTP
        <BottomNavigation
          showLabels
     
          onMouseOver={(event, newValue) => {
            setValue(newValue);
          }}

        >
          <BottomNavigationAction  href="https://www.instagram.com/imperiumptp/" label="Instagram" icon={<Instagram />} />
          <BottomNavigationAction href="https://www.facebook.com/profile.php?id=100090229546724"label="Facebook" icon={<FacebookTwoTone />} />
        </BottomNavigation>
      </Box>
    </Box>
  );
}

export default Footer;

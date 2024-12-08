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
import { green } from "@mui/material/node/colors";
import Grid from "@mui/material/Grid2";

export function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <Box sx={{color:"white", backgroundColor: "green", textAlign: "center", p:1,}}>
        Imperium

      </Box>
      <Grid
        sx={{ p: 2, background: "#2BC942", flexGrow: 1 }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 2, md: 4 }}
      >
        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          <Container sx={{ color: "black" }}>
            <Typography textAlign='left'><b>CONTACT INFO</b>
              <br/>
              <br/>
              <b>Address</b>
              <address style={{ textDecoration: "none" }}>
                <Button  textAlign='left' href='https://g.co/kgs/oaHpMAF'>

                  1897 Wantagh Ave<br/>
                  Wantagh, NY 11793<br/>
                </Button>
                <br/>
                <br/>
                <b>Phone: </b>{" "}
                <Link
                  sx={{ color: "black", textDecoration: "none" }}
                  href="tel:+5164901480"
                >
                  {" "}
                  (516) 490-1480
                </Link>
                <br/>
                <b>Fax:</b>{" "}
                <Link
                  sx={{ color: "black", textDecoration: "none" }}
                  href="tel:+5164904009"
                >
                  {" "}
                  (516) 490-4009
                </Link>
                <br/>
              </address>
            </Typography>

          </Container>
        </Grid>
        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          {" "}
          <Container
            sx={{ color: "black",  textDecoration: "none" }}
          >
            <Typography textAlign='left'><b>WORKING HOURS</b></Typography>

            <List sx={{ color: "black",  textDecoration: "none"}}>
              <ListItem >
                <b>Mon/Wed:</b><Typography sx={{paddingLeft:1, paddingTop:0.5, }}>8AM – 7PM</Typography>
              </ListItem>
              <ListItem >
                <b>Tues/Thurs:</b><Typography sx={{paddingLeft:1, paddingTop:0.5}}>8AM– 3PM</Typography>
              </ListItem>
              <ListItem >
                <b>Fri:</b><Typography sx={{paddingLeft:1, paddingTop:0.5}}>8AM – 5PM</Typography>
              </ListItem>
              <ListItem >
                <b>Sat:</b><Typography sx={{paddingLeft:1, paddingTop:0.5}}>8AM – 12PM</Typography>
              </ListItem>
              <ListItem >
                <b>Sun:</b><Typography sx={{paddingLeft:1, paddingTop:0.5}}>CLOSED</Typography>
              </ListItem>
            </List>
          </Container>
        </Grid>
      </Grid>

      <Box sx={{color:"white", backgroundColor: "green", textAlign: "center", p:1,}}>
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
import {
  FacebookTwoTone,
  Instagram
} from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Container,
  Link,
  List,
  ListItem,
  Typography
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import * as React from "react";

//custom scroll to top button
import ScrollToTopButton from "./ScrollButton";

export function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ fontSize: ["1rem", "1.5rem"] }}>
      <Box
        sx={{
          color: "white",
          backgroundColor: "green",
          textAlign: "center",
          p: 1.5,
        }}
      >
        <ScrollToTopButton />
      </Box>
      <Grid
        sx={{ p: 2, background: "#2BC942", flexGrow: 1 }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 2, md: 4 }}
      >
        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          <Container sx={{ color: "black" }}>
            <Typography textAlign="left">
              <b>CONTACT INFO</b>
              <br />
              <br />
              <b>Address</b>
              <address style={{ textDecoration: "none" }}>
                <Button textAlign="left" href="https://g.co/kgs/oaHpMAF">
                  1897 Wantagh Ave
                  <br />
                  Wantagh, NY 11793
                  <br />
                </Button>
                <br />
                <br />
                <b>Phone: </b>{" "}
                <Link
                  sx={{ color: "black",underline:"hover" }}
                  href="tel:+5164901480"
                >
                  {" "}
                  (516) 490-1480
                </Link>
                <br />
                <b>Fax:</b>{" "}
                <Link
                  sx={{ color: "black", underline:"hover" }}
                  href="tel:+5164904009"
                >
                  {" "}
                  (516) 490-4009
                </Link>
                <br />
              </address>
            </Typography>
          </Container>
        </Grid>
        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          {" "}
          <Container sx={{ color: "black", textDecoration: "none" }}>
            <Typography textAlign="left">
              <b>WORKING HOURS</b>
            </Typography>

            <List sx={{ color: "black", textDecoration: "none" }}>
              <ListItem>
                <b>Mon/Wed:</b>
                <Typography
                  sx={{
                    paddingLeft: 1,
                    paddingTop: 0.5,
                    fontSize: ["1rem", "1.5rem"],
                  }}
                >
                  8AM – 7PM
                </Typography>
              </ListItem>
              <ListItem>
                <b>Tues/Thurs:</b>
                <Typography
                  sx={{
                    paddingLeft: 1,
                    paddingTop: 0.5,
                    fontSize: ["1rem", "1.5rem"],
                  }}
                >
                  8AM– 3PM
                </Typography>
              </ListItem>
              <ListItem>
                <b>Fri:</b>
                <Typography
                  sx={{
                    paddingLeft: 1,
                    paddingTop: 0.5,
                    fontSize: ["1rem", "1.5rem"],
                  }}
                >
                  8AM – 5PM
                </Typography>
              </ListItem>
              <ListItem>
                <b>Sat:</b>
                <Typography
                  sx={{
                    paddingLeft: 1,
                    paddingTop: 0.5,
                    fontSize: ["1rem", "1.5rem"],
                  }}
                >
                  8AM – 12PM
                </Typography>
              </ListItem>
              <ListItem>
                <b>Sun:</b>
                <Typography
                  sx={{
                    paddingLeft: 1,
                    paddingTop: 0.5,
                    fontSize: ["1rem", "1.5rem"],
                  }}
                >
                  CLOSED
                </Typography>
              </ListItem>
            </List>
          </Container>
        </Grid>
      </Grid>

      <Box
        sx={{
          color: "white",
          backgroundColor: "green",
          textAlign: "center",
          p: 1,
        }}
      >
        © 2024 IMPERIUM PTP
        <BottomNavigation showLabels>
          <BottomNavigationAction
            sx={{
              color: "#000000",
              textTransform: "none",
              transition: "background 0.3s, color 1s",
              "&:hover": {
                backgroundColor: "gray",
              },
            }}
            href="https://www.instagram.com/imperiumptp/"
            target="_blank"
            rel="noopener"
            label="Instagram"
            icon={<Instagram />}
          />
          <BottomNavigationAction
            sx={{
              color: "#000000",
              textTransform: "none",
              transition: "background 0.3s, color 1s",
              "&:hover": {
                backgroundColor: "gray",
              },
            }}
            href="https://www.facebook.com/profile.php?id=100090229546724"
            target="_blank"
            rel="noopener"
            label="Facebook"
            icon={<FacebookTwoTone />}
          />
        </BottomNavigation>
      </Box>
    </Box>
  );
}

export default Footer;
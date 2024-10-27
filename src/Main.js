import logo from './logo.svg';
import { Breadcrumbs,Grid2, Paper, Toolbar, Container, Button, Link, Typography, ButtonGroup, Box, ListItem } from '@mui/material';

function Main() {
  return (
    //container for every component in website
    <Container sx={{ color: 'black',
      bgcolor: "white",
       p: 1,
       display: 'flex',
       justifyContent: 'space-evenly',
       flexDirection: {xs: 'column', md: 'column'}
       }}>
        {/* links container */}
        <Container sx={{ color: 'black',
          bgcolor: "white",
          p: 1,
          display: 'flex',
          justifyContent: 'space-evenly',
          textAlign: 'center',
          flexDirection: {xs: 'column', sm: 'row'},
          fontSize: 10,
          alignItems: 'center'
          }}>
          <img
        srcSet={`${'logo.png'}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${"logo.png"}?w=164&h=164&fit=crop&auto=format`}
        alt={"logo_image"}
        loading="lazy" 
      />
 
          {/* current page */}
          <Link underline="hover" color="inherit" href="/">  
            HOME
          </Link>
          <Link
              underline="hover"
              color="inherit"
              href="/About"
          >
              ABOUT US
          </Link>
          <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
          >
              WHAT WE TREAT
          </Link>
          <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
          >
              OUR TEAM
          </Link>
          <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
          >
              <Paper  sx={{ color: 'white',bgcolor: "#28b54d", p: 1}}>CONTACT US</Paper>
          </Link>
          
        </Container>
        {/* black bar */}
        <Container>
          <Container sx={{bgcolor: "#000000"}}>
            <Typography sx={{color: "#28b54d", height: 20}}></Typography>
          </Container>
        </Container>
        {/* image container */}
        <Container sx={{ color: 'black',
          bgcolor: "white",
          p: 0,
          display: 'flex',
          justifyContent: 'space-evenly',
          textAlign: 'center',
          flexDirection: {xs: 'column', sm: 'row'},
          fontSize: 10,
          alignItems: 'center',
          height: 200,
          }}>
            <Container sx={{ color: 'black',
          bgcolor: "blue",
          width: 200,
          height: 200,
          }}>
            image1
            </Container>
            <Container sx={{ color: 'black',
          bgcolor: "pink",
          width: 200,
          height: 200,
          }}>
            image2
            </Container>
            <Container sx={{ color: 'black',
          bgcolor: "red",
          width: 200,
          height: 200,
          }}>
            image3
            </Container>


          </Container>
    </Container>
  );
}

export default Main;

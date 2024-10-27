import logo from './logo.svg';
import { Breadcrumbs,Grid2, Paper, Toolbar, Container, Button, Link, Typography, ButtonGroup, Box, ListItem } from '@mui/material';

function Error() {
  return (
    //container for every component in website
    <Container sx={{ color: 'black',
      bgcolor: "white",
       p: 1,
       display: 'flex',
       justifyContent: 'space-evenly',
       flexDirection: {xs: 'column', md: 'column'}
       }}>
       PAGE NOT FOUND
    </Container>
  );
}

export default Error;

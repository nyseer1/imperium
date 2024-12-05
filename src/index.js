import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
//imports pages so we can link to them
import Main from './Main';
import About from './About';
import Error from './Error';
import OurTeam from './OurTeam';
import Footer from './Footer';
import Bloglist from './Bloglist.js';
import ResponsiveMenu from './ResponsiveMenu.js';
import Contact from './Contact.js';

//import blog pages to link to
import Blog1 from './Blog1-Low-back-pain-m.js';
import Blog2 from './Blog-BFR-for-ACLr.js';
import Blog3 from './Blog-Stretch.js';
import Blog4 from './Blog-Rotator-Cuff.js';

//debug page
import Debug from './Debug.js';

// ability to access mui components
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, deepPurple } from '@mui/material/node/colors';
import { Button } from '@mui/material';
// adds ability to link pages
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//for metadata on pages
import { HelmetProvider } from 'react-helmet-async';



// creates custom theme using mui
const theme = createTheme({
  palette: {
    primary: {
      main:green[500]
    },
    secondary: deepPurple,
  },

  // default properties of components
  components: {
    // Name of the component ⚛️
    MuiAppBar: {
      defaultProps: {
        color: 'primary', //in appbar need to use a color from the pallete
        sx: {
          height: 100,
          display: 'flex', //creates flexbox to arrange content
          flexDirection: 'row', //each new content is added in a row
          border: 1, borderColor: '#50ac54', borderTopLeftRadius: 8, borderBottomLeftRadius: 8,
        }
      }
    },
    MuiBottomNavigation: {
      defaultProps: {
        sx: {
          color: 'green',
          height: 200,
        }
      }
    },
    MuiTypography: {
      color: 'green',
      sx: {
        fontSize: 20,
        textAlign: "center",
        p:1,
        }
    },
    MuiButtonBase: {
      sx: {
        fontSize: [10, 14],
        textTransform: 'capitalize',
        color: '#000000',
        p: 3,
        display: 'flex', //creates flexbox to arrange content
        flexDirection: 'column', //each new content is added in a row
        justifyContent: 'space-evenly', //content starts at the end of the line(right)

      }
    },
    MuiButtonGroup: {
      defaultProps: {
        color: 'primary', //in appbar need to use a color from the pallete
        sx: {
          height: 100,
          display: 'flex', //creates flexbox to arrange content
          flexDirection: 'row', //each new content is added in a row
          justifyContent: 'flex-end', //content starts at the end of the line (right)
          flexGrow: 1,
        }
      }
    },
    MuiContainer: {
      sx: {
        p: 2,
        display: 'flex', //creates flexbox to arrange content
        flexDirection: 'row', //each new content is added in a row
        justifyContent: 'space-around', //content starts at the end of the line (right)
      } //padding
    },
    MuiMenu: {
      sx: {
        height: '160%',
        display: 'flex', //creates flexbox to arrange content
        flexDirection: 'column', //each new content is added in a row
        justifyContent: 'space-evenly', //content starts at the end of the line (right)
        flexGrow: 1,
        fontSize: 1,
      }
    },
    MuiPaper: {
      align: 'left',
      sx: {
        fontSize: 20,
      },

    },

  },
});

// assigns page links using react router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main theme={theme} />,
    // if page does not match any path, goes to error page
    errorElement: <Error />,

  },
  {
    path: "/about",
    element: <About />,

  },
  {
    path: "/our-team",
    element: <OurTeam />,

  },
  {
    path: "/bloglist",
    element: <Bloglist />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },

  //blogs

  {
    path: "/blog1",
    element: <Blog1 />,

  },
  {
    path: "/blog2",
    element: <Blog2 />,

  },
  {
    path: "/blog3",
    element: <Blog3 />,

  },
  {
    path: "/blog4",
    element: <Blog4 />,

  },


  // debug
  {
    path: "/debug",
    element: <Debug />,

  },
  

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <ResponsiveMenu />
        <RouterProvider router={router} />
        <Footer />
      </ThemeProvider>
    </HelmetProvider>
    

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
//imports pages so we can link to them
import Main from "./Main";
import About from "./About";
import Error from "./Error";
import OurTeam from "./OurTeam";
import Footer from "./Footer";
import Bloglist from "./Bloglist.js";
import ResponsiveMenu from "./ResponsiveMenu.js";
import Contact from "./Contact.js";


//import blog pages to link to
import Blog1 from "./Blog1-Low-back-pain-m.js";
import Blog2 from "./Blog-BFR-for-ACLr.js";
import Blog3 from "./Blog-Stretch.js";
import Blog4 from "./Blog-Rotator-Cuff.js";

//debug page
import Debug from "./Debug.js";

// ability to access mui components
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, deepPurple} from "@mui/material/node/colors";

//default css styling
import { CssBaseline } from "@mui/material";

// adds ability to link pages
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//for metadata on pages
import { HelmetProvider } from "react-helmet-async";
import WhatWeTreat from "./WhatWeTreat.js";

// creates custom theme using mui
const theme = createTheme({
  palette: {
    // mode:'dark',
    // need to test dark mode
    primary: {
      main: green[500]
    },
    secondary: deepPurple,
  },
  typography:{
    color:'primary',
    fontSize:19,
    textAlign: "center",
    p:2,
  },

  // default properties of components
  components: {
    // Name of the component ⚛️
    MuiAppBar: {
      defaultProps: {
        color: "primary", //in appbar need to use a color from the pallete
        sx: {
          height: 100,
          display: "flex", //creates flexbox to arrange content
          flexDirection: "row", //each new content is added in a row
          border: 1,
          p:0,
        },
      },
    },
    MuiBottomNavigation: {
      defaultProps: {
        sx: {

          color: 'primary',

          height: 200,
        },
      },
    },

    MuiButton:{
      defaultProps:{
        sx:{
          color:'#000000',
          textTransform: 'none',
          transition: "background 0.3s, color 1s",
        '&:hover': {
          backgroundColor: green[800],

        },
        }
      }
  },


    MuiButtonBase: {
      defaultProps:{
        sx:{
          p:'1rem',
        }
      },
      variants: [
        {
          props: { variant: 'default' },
            style: {
              fontSize: '0.9rem',
              textTransform: "capitalize",
              padding: '1rem',
              display: "flex", //creates flexbox to arrange content
              flexDirection: "column", //each new content is added in a row
              justifyContent: "space-evenly", //content starts at the end of the line(right)
              borderRadius:1,
              color:'primary',

              transition: "background 0.3s, color 1s",
              '&:hover': {
                backgroundColor: green[800],

              }


          },
        },
        {
          props: { variant: 'footer' },
            style: {
              textAlign:'left',
              fontSize: '0.9rem',
              textTransform: "capitalize",
              padding: '1rem',
              display: "flex", //creates flexbox to arrange content
              flexDirection: "column", //each new content is added in a row
              justifyContent: "space-evenly", //content starts at the end of the line(right)
              borderRadius:1,

              transition: "background 0.3s, color 1s",
              '&:hover': {
                backgroundColor: green[800],

              }


          },
        },
        {
          props: { variant: 'greentext' },
          style: {
            color:'green',
            fontSize: '1.2rem',
            textTransform: "capitalize",
            padding: '1rem',
            display: "flex", //creates flexbox to arrange content
            flexDirection: "column", //each new content is added in a row
            justifyContent: "space-evenly", //content starts at the end of the line(right)
            borderRadius:1,

            transition: "background 0.3s, color 1s",
            '&:hover': {
              backgroundColor: green[100],

            }


        },
        },
      ],
    },
    MuiButtonGroup: {
     variants: [
      {
        props:{ variant:'appbar'},
        style:{
            color: "black", //in appbar need to use a color from the pallete
            height: 100,
            display: "flex", //creates flexbox to arrange content
            flexDirection: "row", //each new content is added in a row
            flexGrow:1,
            justifyContent:"flex-end",
          },
        }

     ],
    },
    MuiContainer: {
      sx: {
        p: 2,
        display: "flex", //creates flexbox to arrange content
        flexDirection: "row", //each new content is added in a row
        justifyContent: "space-around", //content starts at the end of the line (right)
      }, //padding
    },
    MuiMenu: {
      sx: {
        height: "160%",
        display: "flex", //creates flexbox to arrange content
        flexDirection: "column", //each new content is added in a row
        justifyContent: "space-evenly", //content starts at the end of the line (right)
        flexGrow: 1,
        fontSize: 1,
      },
    },
    MuiPaper: {
      align: "left",
      sx: {
        fontSize: '1rem',
        p:1.5,
      },
    },
    MuiGrid2:{
      textAlign:'center',
      p:1,
    }
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

  {path:"/what-we-treat",
    element: <WhatWeTreat/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
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
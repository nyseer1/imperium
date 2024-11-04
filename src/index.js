import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import About from './About';
import Error from './Error';
import reportWebVitals from './reportWebVitals';
// ability to access mui components
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, deepPurple,  } from '@mui/material/node/colors';
import { Button } from '@mui/material';
// adds ability to link pages
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { alignProperty } from '@mui/material/styles/cssUtils';

// creates custom theme using mui
const theme = createTheme({
  palette: {
    primary: green,
    secondary: deepPurple,
  },

  // default properties of components
  components: {
    // Name of the component ⚛️
    MuiAppBar:{
      defaultProps:{
        color: 'primary', //in appbar need to use a color from the pallete
        sx: {
          height: 100,
          display: 'flex', //creates flexbox to arrange content
          flexDirection: 'row', //each new content is added in a row
          }
      }
    },
    MuiTypography:{
      color:'green',
      sx:{fontSize:200}
    },
    MuiButtonBase:{
      sx:{fontSize: 18, textTransform:'capitalize', color:'#000000', p:3,
        display: 'flex', //creates flexbox to arrange content
        flexDirection: 'column', //each new content is added in a row
        justifyContent: 'space-evenly', //content starts at the end of the line(right)

       }
    },
    MuiButtonGroup:{
      defaultProps:{
        color: 'primary', //in appbar need to use a color from the pallete
        sx: {
          height: 100,
          display: 'flex', //creates flexbox to arrange content
          flexDirection: 'row', //each new content is added in a row
          justifyContent: 'flex-end', //content starts at the end of the line (right)
          flexGrow:1,
          }
      }
    },
    MuiContainer:{
      sx: {
          p:2,
          display: 'flex', //creates flexbox to arrange content
          flexDirection: 'row', //each new content is added in a row
          justifyContent: 'space-around', //content starts at the end of the line (right)
       } //padding
    },
    MuiMenu:{
      sx: {
        height: 400,
        display: 'flex', //creates flexbox to arrange content
        flexDirection: 'column', //each new content is added in a row
        justifyContent: 'space-evenly', //content starts at the end of the line (right)
        flexGrow:1,
        }
      

    }
  },
});

// assigns page links using react router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main theme={theme}/>,
    // if page does not match any path, goes to error page
    errorElement: <Error />, 
    
  },
  {
    path: "/about",
    element: <About />,
    
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

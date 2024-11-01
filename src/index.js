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
  components: {
    // Name of the component ⚛️
    MuiAppBar:{
      defaultProps:{
        color: 'primary', //in appbar need to use a color from the pallete
        sx: {
          height: 150,
          padding: 0,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end'
          }
      }
    },
    MuiTypography:{
      color:'green',
      sx:{fontSize:200}
    },
    MuiButtonBase:{
      sx:{fontSize: 32, textTransform:'capitalize', color:'#000000', flexGrow:1, p:1, }
    },
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

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import About from './About';
import Error from './Error';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@emotion/react';
// ability to access mui components
import { createTheme, Typography } from '@mui/material';
// adds ability to link pages
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// creates custom theme using mui
const theme = createTheme({
  pallete:{
    primary:{
      main: "#28b54d",
    },
  },
  button:{
    color: "#28b54d"
  }
})

// assigns page links using react router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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

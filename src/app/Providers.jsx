"use client";
//  mui
import { ThemeProvider } from "@mui/material";

import muiTheme from "@muiTheme";
import { Slide, ToastContainer } from "react-toastify";;
// context
import UserProvider from "@context/UserProvider";

const Providers = ({ children }) => {
  return (
      <ThemeProvider theme={muiTheme}>
        <UserProvider>
          <ToastContainer
            position="top-center"
            transition={Slide}
            autoClose={2000}
            hideProgressBar
          />
          {children}
        </UserProvider>
      </ThemeProvider>
  );
};

export default Providers;

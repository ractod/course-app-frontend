import DotsLoading from "@components/elements/DotsLoading";
import { createTheme } from "@mui/material";

const muiTheme = createTheme({
  palette: {
    primary: {
      light: "#bb86fa",
      main: "#9C4DF4",
      dark: "#8c36e7",
    },
    secondary: {
      light: "#ffaba0",
      main: "#FF6652",
      dark: "#f8513b",
    },
    error: {
      light: "#f87171",
      main: "#ef4444",
      dark: "#dc2626",
    },
    success: {
      light: "#4ade80",
      main: "#22c55e",
      dark: "#16a34a",
    },
    gray: {
      light: "#f8f8f8",
      main: "#f1f1f1",
      dark: "#dcdcdc",
    },
  },
  typography: {
    fontFamily: ["IranSans", "Arial"].join(","),
  },
  breakpoints: {
    sm: 500,
    md: 768,
    lg: 900,
    xl: 1280,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          padding: "15px 35px",
          borderRadius: "10px",
          boxShadow: "none !important",
          columnGap: "6px",
          whiteSpace: "nowrap",
          color: "#FFF",
          "@media(max-width:768px)": {
            fontSize: "14px",
            padding: "10px 25px",
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette[ownerState.color].main,
            color: "#FFF",
            opacity: "40%",
          },
        }),
        outlined: {
          borderWidth: "2px !important",
        },
        startIcon: {
          margin: 0,
        },
        endIcon: {
          margin: 0,
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "gray" },
          style: { color: "#0A033C" }
        }
      ]
    },
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          "&.MuiLoadingButton-loading": {
            backgroundColor: "transparent",
          },
        },
      },
      defaultProps: {
        loadingIndicator: <DotsLoading />,
      },
    },
  },
});

export default muiTheme;

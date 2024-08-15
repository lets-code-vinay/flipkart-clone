import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2A54E4",
      light: "",
      dark: "",
    },
    secondary: {
      main: "#FF9F00",
      light: "",
      dark: "",
    },
    btnColor: {
      main: "#FB651A",
      dark: "#9c3907",
      light: "#d8865c",
    },
    background: {
      main: "#F0F2F5",
      light: "",
      dark: "",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "2.75rem", //44px
      fontWeight: "600",
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: "600",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: "500",
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: "500",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: "500",
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: "500",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: "400",
    },
    body2: {
      fontSize: "0.75rem",
      fontWeight: "400",
    },
    title: {},
    subtitle: {},
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        contained: {
          color: "#fff",
        },
      },
    },
  },
});

export default theme;

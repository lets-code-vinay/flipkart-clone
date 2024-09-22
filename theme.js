import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2875F1",
      light: "#5d86c8",
      dark: "#065fef",
    },
    secondary: {
      main: "#FF9F00",
      dark: "#ff8700",
      light: "#c3ab43",
    },
    bg: {
      main: "#F0F2F6",
    },
    button: {
      main: "#FB651A",
      light: "#dc8256",
      dark: "#fc5504",
    },
    white: {
      main: "#fff",
    },
    footer: {
      main: "#172337",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Cursive",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    allVariants: {
      textTransform: "none",
    },
    h1: {
      fontSize: "4.4rem", // 44px
      fontWeight: 600,
    },
    h2: {
      fontSize: "3.6rem", // 36px
      fontWeight: 600,
    },
    h3: {
      fontSize: "2.8rem", // 28px
      fontWeight: 500,
    },
    h4: {
      fontSize: "2.2rem", // 22px
      fontWeight: 400,
    },
    h5: {
      fontSize: "1.8rem", // 18px
      fontWeight: 400,
    },
    h6: {
      fontSize: "1.6rem", // 16px
      fontWeight: 400,
    },
    body1: {
      fontSize: "1.6rem", // 16px
      fontWeight: 400,
    },
    body2: {
      fontSize: "1.2rem", // 12px
      fontWeight: 400,
    },
    title: {
      fontSize: "1.2rem", // 12px
      fontWeight: 400,
    },
    subtitle: {
      fontSize: "1rem", // 1px
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1.6rem",
        },
        outlined: {},
        contained: {
          color: "#fff",
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);

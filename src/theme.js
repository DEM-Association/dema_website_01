import { createTheme } from "@mui/material/styles";

// Navy blue theme with red accent for DEMA
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0b2545",
      dark: "#081a2e",
      light: "#1a3a5c",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#e03e2f",
      dark: "#c03428",
      light: "#e85545",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#fbfdff",
    },
    text: {
      primary: "#1b3043",
      secondary: "#243044",
    },
    divider: "rgba(11, 37, 69, 0.12)",
  },
  typography: {
    fontFamily: "Inter, Roboto, Helvetica, Arial, sans-serif",
  },
});

export default theme;

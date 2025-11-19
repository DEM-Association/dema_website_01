import { createTheme } from "@mui/material/styles";

// Navy blue theme for DEMA
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0b2545", // deep navy
    },
    secondary: {
      main: "#f5a623", // accent
    },
    background: {
      default: "#f7fbff",
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, Helvetica, Arial, sans-serif",
  },
});

export default theme;

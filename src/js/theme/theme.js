import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3a3a3c",
      100: "#538d4e",
      200: "#b59f3b",
    },
    secondary: {
      main: "#fff",
      100: "#000",
    },
  },
  typography: {
    fontFamily: "Fira Sans",
  },
  fontSize: {
    letterSize: "32px",
  },
});

export default theme;

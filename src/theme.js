import { createTheme } from "@mui/material/styles";
import { orange, blue } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    background: {
      default: "rgba(254, 121, 0, 15%)",
    },
    primary: {
      main: orange[500],
    },
    text: {
      primary: "#004080",
      secondary: "#FE7900",
    },
  },
});

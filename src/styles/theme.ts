import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    error: {
      contrastText: "#fff",
      dark: "#952649",
      light: "#D96A8D",
      main: "#CC3363",
    },
    primary: {
      contrastText: "#fff",
      dark: "#046631",
      light: "#dff6dd",
      main: "#058C42",
    },
    secondary: {
      contrastText: "#fff",
      dark: "#65B1BA",
      light: "#A9F6FF",
      main: "#8AF3FF",
    },
  },
});

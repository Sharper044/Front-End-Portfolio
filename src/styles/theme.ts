import { createMuiTheme, Theme } from '@material-ui/core/styles';

export const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: "#fff",
      main: "#1F2B5A",
      light: "#2B90CB"
    },
    secondary: {
      contrastText: "#fff",
      main: "#324F4E",    
    },
  },
});

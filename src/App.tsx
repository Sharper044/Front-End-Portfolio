import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { theme } from './styles/theme';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className={classes.root}>
      </div>
    </ThemeProvider>
  );
}

export default App;

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { theme } from './styles/theme';
import Code from './Pages/Code';

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
        <Router>
          <Route path="/" exact component={Code}/>
          {/* <Route path="/blog" component={Blog}/>
          <Route path="/contact-me" component={ContactMe}/>*/}
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { theme } from './styles/theme';
import Code from './Pages/Code';
import Physics from './Pages/Physics';
import Teaching from './Pages/Teaching';

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
          <Route path="/code" component={Code}/>
          <Route path="/physics" component={Physics}/>
          <Route path="/teaching" component={Teaching}/>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;

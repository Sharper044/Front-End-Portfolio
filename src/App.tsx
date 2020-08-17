import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { theme } from './styles/theme';
import Blog from './Pages/Blog';
import Code from './Pages/Code';
import ContactMe from './Pages/ContactMe';
import Login from './Pages/Login';
import { AppContext } from "./lib/contextLib";
import { Auth } from "aws-amplify";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

// TODO: add all type interfaces into a single folder
const App = () => {
  const classes = useStyles();
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    setIsAuthenticating(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className={classes.root}>
      <AppContext.Provider value={{ isAuthenticated, isAuthenticating, userHasAuthenticated }}>
        <Router>
          <Route path="/" exact component={Code}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/contact-me" component={ContactMe}/>
          <Route path="/login" component={Login}/>
          {/* <Route path="/sign-up" component={}/> */}
        </Router>
      </AppContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;

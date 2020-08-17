import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { theme } from './styles/theme';
// import Blog from './Pages/Blog';
import Code from './Pages/Code';
import ContactMe from './Pages/ContactMe';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

// TODO: add all type interfaces into a single folder
const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className={classes.root}>
        <Router>
          <Route path="/" exact component={Code}/>
          {/* <Route path="/blog" component={Blog}/> */}
          <Route path="/contact-me" component={ContactMe}/>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;

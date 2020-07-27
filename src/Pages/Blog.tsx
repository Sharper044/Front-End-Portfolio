import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Sections/Footer';

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
  },
}));

// I plan on expanding my portfolio to include my work in physics, astronomy, and engineering.
const Blog = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header/>
      Testing Render Blog
      <Footer/>
    </div>
  );
};

export default Blog;

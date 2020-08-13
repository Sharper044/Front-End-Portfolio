import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Sections/Footer';

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
    width: '100%',
    paddingTop: '150px',
  },
  title: {
    fontFamily: 'Russo One',
    fontSize: '2.5rem',
    fontWeight: 300,
    margin: '0 50px'
  },
  subtitle: {
    margin: '20px 50px'
  },
  paper: {
    height: 420,
    width: 300,
  },
}));

// TODO: Get a blog built and working in here.
const Blog = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header/>
      <div>
        <h1 className={classes.title}>Welcome to my blog!</h1>
        <Typography className={classes.subtitle}>Here I keep some of my thoughts, feelings, and experiences dealing with my journey through code. I hope you find these helpful.</Typography>
        <Grid container justify="center" spacing={2}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer/>
    </div>
  );
};

export default Blog;

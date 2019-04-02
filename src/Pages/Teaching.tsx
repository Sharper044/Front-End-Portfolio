import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Header from '../components/Header';

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
  },
}));

// Here I eventually plan to showcase my skills in teaching.
const Teaching = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header/>
      Testing Render Teaching
    </div>
  );
};

export default Teaching;

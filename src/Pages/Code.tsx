import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Header from '../components/Header';
import Landing from '../Sections/Landing';
import { codeLandingData } from '../data';

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
  },
}));

const Code = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header url='/code'/>
      <Landing {...codeLandingData}/>
    </div>
  );
};

export default Code;


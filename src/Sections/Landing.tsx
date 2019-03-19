import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

interface ILandingProps {
  title: string;
  subtitle?: string;
  img1url: string;
  img2url?: string;
}

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
  },
}));

const Landing = (props: ILandingProps) => {
  const classes = useStyles();
  console.log(props);

  return (
    <div className={classes.root}/>
  );
};

export default Landing;

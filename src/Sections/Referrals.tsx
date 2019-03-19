import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

interface IReferrals {
  photoUrl: string;
  text: string;
  name: string;
  title: string;
  company: string;
}

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
  },
}));

const Referrals = (props: {referrals: IReferrals[]}) => {
  const classes = useStyles();
  console.log(props)

  return (
    <div className={classes.root}/>
  );
};

export default Referrals;

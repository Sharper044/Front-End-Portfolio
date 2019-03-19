import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { ILink } from './RecentWork';

interface ISocialProps {
  socialLinks: ILink[];
  page: string;
}

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
  },
}));

const ContactMe = (props: ISocialProps) => {
  const classes = useStyles();
  console.log(props);

  return (
    <div className={classes.root} id="contact"/>
  );
};

export default ContactMe;

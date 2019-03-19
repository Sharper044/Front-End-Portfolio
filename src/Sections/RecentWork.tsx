import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

interface IRecentWorkProps {
  title: string;
  description: string;
  recentWorkItems: IRecentWork[];
}

interface IRecentWork {
  title: string;
  description: string;
  links?: ILink[];
  mainImgUrl: string;
  images: string[];
}

export interface ILink {
  imgUrl: string;
  link: string;
}

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
  },
}));

const RecentWork = (props: IRecentWorkProps) => {
  const classes = useStyles();
  console.log(props);

  return (
    <div className={classes.root}/>
  );
};

export default RecentWork;

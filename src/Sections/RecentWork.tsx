import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Typography } from '@material-ui/core';
import RecentWorkCard from '../components/RecentWorkCard';
import { Link } from 'react-router-dom';

export interface IRecentWorkProps {
  title: string;
  description: string;
  recentWorkItems: IRecentWork[];
}

export interface IRecentWork {
  title: string;
  briefDesc: string;
  description: string;
  links?: ILink[];
  mainImgUrl: string;
  ariaLabel: string;
  images: IImg[];
}

export interface IImg {
  imgUrl: string;
  ariaLabel: string;
  description: string;
}

export interface ILink {
  imgUrl: string;
  link: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing.unit * 15,
  },
  title: {
    fontFamily: 'Russo One',
    fontSize: '2rem',
    fontWeight: 300,
  },
  displayHolder: {
    padding: `0 10%`,
    display: 'flex',
    marginTop: theme.spacing.unit * 12,
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap',
  },
  subheading: {
    textDecoration: 'none',
    color: theme.palette.primary.light,
  }
}));

interface IProps extends IRecentWorkProps {
  url: string;
}

const RecentWork = (props: IProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>{props.title}</h1>
      <Typography variant='subheading'>
        {props.description} 
        <Link to={`${props.url}#contact`} className={classes.subheading}> Email me!</Link>
      </Typography>
      <div className={classes.displayHolder}>
        {
          props.recentWorkItems.map((workItem, i) => (
            <RecentWorkCard key={i} {...workItem}/>
          ))
        }
      </div>
    </div>
  );
};

export default RecentWork;

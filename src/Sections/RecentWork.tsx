import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Typography, Button } from '@material-ui/core';
import RecentWorkCard from '../Components/RecentWorkCard';
import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';
import githubBlueIcon from '../assets/github.blue.png';

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
  alt: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(15),
  },
  title: {
    fontFamily: 'Russo One',
    fontSize: '2rem',
    fontWeight: 300,
  },
  displayHolder: {
    padding: `0 10%`,
    display: 'flex',
    margin: `${theme.spacing(12)}px 0 ${theme.spacing(6)}px 0`,
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
      <Typography variant='subtitle1'>
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
      <a href='https://github.com/Sharper044/' style={{textDecoration: 'none'}}>
        <Button variant="outlined" style={{color: theme.palette.primary.light, borderColor: theme.palette.primary.light,}}>See more on Github <img src={githubBlueIcon} alt="github icon" style={{width: '20px', marginLeft: '10px'}}/></Button>
      </a>
    </div>
  );
};

export default RecentWork;

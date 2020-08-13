import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Typography } from '@material-ui/core';

export interface ILandingProps {
  title: string;
  subtitle?: string;
  img1url: string;
  img1aria: string;
  img2url?: string;
  img2aria?: string;
}

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
    width: '100%',
    paddingTop: '150px',
  },
  title: {
    fontFamily: 'Russo One',
    fontSize: '3rem',
    fontWeight: 300,
  },
  imgContainer: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  img1Container: {
    paddingLeft: '100px',
    paddingRight: '100px',
    maxWidth: '434px',
    marginTop: '75px',
    marginBottom: '100px',
  },
  img2Container: {
    paddingLeft: '24px',
    paddingRight: '24px',
    maxWidth: '1200px',
  },
  img: {
    width: '100%',
    height: 'auto',
  },
  img1: {
    borderRadius: '50%',
  }
}));

const Landing = (props: ILandingProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>{props.title}</h1>
      <Typography variant='h5'>{props.subtitle}</Typography>
      <div className={`${classes.imgContainer} ${classes.img1Container}`}>
        <img alt={props.img1aria} src={props.img1url} className={`${classes.img} ${classes.img1}`}/>
      </div>
      <div className={`${classes.imgContainer} ${classes.img2Container}`}>
        {
        props.img2url && props.img2aria && 
          <img alt={props.img2aria} src={props.img2url} className={classes.img}/>
        }
      </div>
    </div>
  );
};

export default Landing;

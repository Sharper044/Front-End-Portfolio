import { Theme } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/styles';
import React, { useState } from 'react';
import { IRecentWork } from '../Sections/RecentWork';
import { Card, CardActionArea, CardMedia, Typography } from '@material-ui/core';
import RecentWorkModal from './RecentWorkModal';

const useStyles = makeStyles((theme: Theme) => ({
  workCard: {
    margin: theme.spacing(2),
    width: '328px',
    height: '220px',
  },
  activeArea: {
  },
  media: {
    height: '220px',
  },
  description: {
    position: 'absolute',
    width: '328px',
    height: '220px',
    backgroundColor: `${theme.palette.primary.dark}aa`,
    transition: 'opacity 0.5s linear',
    top: '0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  show: {
    opacity: 1
  },
  hide: {
    opacity: 0
  },
}));

const RecentWorkCard = (props: IRecentWork) => {
  const classes = useStyles();
  const theme: Theme = useTheme();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  
  const [hover, setHover] = useState(false);
  const hoverStart = () => {
    setHover(true);
  }
  const hoverEnd = () => {
    setHover(false);
  }

  return (
    <React.Fragment>
      <Card 
        className={classes.workCard}
        onMouseEnter={hoverStart}
        onMouseLeave={hoverEnd}
      >
        <CardActionArea 
          className={classes.activeArea}
          onClick={handleOpen}
        >
          <CardMedia 
            image={props.mainImgUrl}
            title={props.ariaLabel}
            className={classes.media}
          />
          <div className={`${classes.description} ${hover ? classes.show : classes.hide}`}>
            <Typography variant="h5" style={{color: theme.palette.primary.contrastText}}>
              {props.briefDesc}
            </Typography>
            <div 
              style={{color: theme.palette.primary.light, borderColor: theme.palette.primary.light, border: 'solid 1px', padding: '10px', borderRadius: theme.shape.borderRadius}} 
            >
              <Typography style={{color: theme.palette.primary.light}}>
                See More
              </Typography> 
            </div>
          </div>
        </CardActionArea>
      </Card>
      <RecentWorkModal open={open} handleClose={handleClose} {...props}/>
    </React.Fragment>
  );
};

export default RecentWorkCard;

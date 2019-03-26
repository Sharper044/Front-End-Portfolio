import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Typography, Card } from '@material-ui/core';

export interface IRecentWorkProps {
  title: string;
  description: string;
  recentWorkItems: IRecentWork[];
}

interface IRecentWork {
  title: string;
  description: string;
  links?: ILink[];
  mainImgUrl: string;
  ariaLabel: string;
  images: IImg[];
}

export interface IImg {
  imgUrl: string;
  ariaLabel: string;
}

export interface ILink {
  imgUrl: string;
  link: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing.unit * 15,
  },
  headerContainer: {

  },
  title: {
    fontFamily: 'Russo One',
    fontSize: '2rem',
    fontWeight: 300,
  },
  displayHolder: {
    padding: `0 ${theme.spacing.unit * 20}px`,
    display: 'flex',
    marginTop: theme.spacing.unit * 15,
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap',
  },
  workCard: {
    padding: theme.spacing.unit * 4,
    margin: theme.spacing.unit * 2,
    minWidth: '328px',
  }
  // min-width for tiles 327, figure out how to maintain a 3:2 ratio
}));

const RecentWork = (props: IRecentWorkProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <h1 className={classes.title}>{props.title}</h1>
        <Typography variant='subheading'>{props.description}</Typography>
      </div>
      <div className={classes.displayHolder}>
        {
          props.recentWorkItems.map((workItem, i) => (
            <Card key={i} className={classes.workCard}>
              {workItem.title}
            </Card>
          ))
        }
      </div>
    </div>
  );
};

export default RecentWork;

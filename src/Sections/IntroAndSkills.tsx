import { Theme } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/styles';
import React from 'react';
import { Typography, Card } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SkillSet from '../Components/SkillSet';

export interface IIntroAndSkillsProps {
  title: string;
  text: string;
  skillSetArr: ISkillSet[];
}

export interface ISkillSet {
  imgUrl: string;
  imgAria: string;
  title: string;
  description: string;
  mainSkillDesc: string;
  mainSkillLogo: string;
  mainSkillText: string;
  toolsDesc: string;
  toolsArr: string[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100vw',
    marginTop: '-5px',
  },
  title: {
    fontFamily: 'Russo One',
    fontSize: '2rem',
    fontWeight: 300,
    color: theme.palette.primary.light,
  },
  skillTitle: {
    fontFamily: 'Russo One',
    fontSize: '1.5rem',
    fontWeight: 300,
    color: theme.palette.primary.light,
  },
  skillSubtitle: {
    color: theme.palette.primary.main,
  },
  intro: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    paddingTop: '80px',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingBottom: '256px',
  },
  introContainer: {
    maxWidth: '700px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  section: {
    marginTop: '-115px',
  },
  img: {
    width: '75px'
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: theme.spacing(2),
  },
  cardSmall: {
    flexDirection: 'column',
  },
  cardSectionLarge: {
    padding: theme.spacing(4),
    width: '33%'
  },
  cardSectionLargeSide: {
    borderRight: 'lightGrey solid 1px',
  },
  cardSectionSmall: {
    padding: theme.spacing(4),
    width: '100%'
  },
  cardSectionSmallSide: {
    borderBottom: 'lightGrey solid 1px',
  }
}));

const IntroAndSkills = (props: IIntroAndSkillsProps) => {
  const classes = useStyles();
  const theme: Theme = useTheme();

  return (
    <section className={classes.root}>
      <article className={classes.intro}>
        <div className={classes.introContainer}>
          <h1 className={classes.title}>{props.title}</h1>
          <Typography variant='subtitle1' style={{color: theme.palette.primary.contrastText}}>{props.text}</Typography>
        </div>
      </article>
      <section className={classes.section}>
        <Card className={useMediaQuery(theme.breakpoints.up('md'))? classes.card : `${classes.card} ${classes.cardSmall}`}>
        {
          props.skillSetArr.map((skillSet, i) => (
            <SkillSet skillSet={skillSet} isEnd={i < props.skillSetArr.length - 1}/>
            ))
          }
        </Card>
      </section>
    </section>
  );
};

export default IntroAndSkills;

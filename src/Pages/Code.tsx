import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Header from '../components/Header';
import Landing from '../Sections/Landing';
import { codeLandingData, codeIntroAndSkillsData, codeRecentWorkData } from '../data';
import IntroAndSkills from '../Sections/IntroAndSkills';
import RecentWork from '../Sections/RecentWork';

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
  },
}));

const Code = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header url='/code'/>
      <Landing {...codeLandingData}/>
      <IntroAndSkills {...codeIntroAndSkillsData}/>
      <RecentWork {...codeRecentWorkData}/>
    </div>
  );
};

export default Code;


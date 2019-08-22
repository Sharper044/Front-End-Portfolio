import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Header from '../Components/Header';
import Landing from '../Sections/Landing';
import { codeLandingData, codeIntroAndSkillsData, codeRecentWorkData, codeCompaniesData, codeReferralsData } from '../data';
import IntroAndSkills from '../Sections/IntroAndSkills';
import RecentWork from '../Sections/RecentWork';
import Companies from '../Sections/Companies';
import Referrals from '../Sections/Referrals';
import Footer from '../Sections/Footer';

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
  },
}));

const Code = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header/>
      <Landing {...codeLandingData}/>
      <IntroAndSkills {...codeIntroAndSkillsData}/>
      <RecentWork url='/code' {...codeRecentWorkData}/>
      <Companies {...codeCompaniesData}/>
      <Referrals {...codeReferralsData}/>
      <Footer/>
    </div>
  );
};

export default Code;


import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

interface IIntroAndSkillsProps {
  title: string;
  text: string;
  skillSetArr: ISkillSet[];
}

interface ISkillSet {
  imgUrl: string;
  title: string;
  description: string;
  mainSkillDesc: string;
  mainSkillText: string;
  toolsDesc: string;
  toolsArr: string[];
}

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
  },
}));

const IntroAndSkills = (props: IIntroAndSkillsProps) => {
  const classes = useStyles();
  console.log(props);

  return (
    <div className={classes.root}/>
  );
};

export default IntroAndSkills;

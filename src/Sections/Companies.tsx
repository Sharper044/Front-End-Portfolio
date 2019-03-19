import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { ILink } from './RecentWork';

interface ICompaniesProps {
  header: string;
  companies: ILink[];
}

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
  },
}));

const Companies = (props: ICompaniesProps) => {
  const classes = useStyles();
  console.log(props);

  return (
    <div className={classes.root}/>
  );
};

export default Companies;

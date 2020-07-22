import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

export interface ICompaniesProps {
  header: string;
  companies: {
    link: string;
    name: string;
    imgUrl: string;
  }[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(30),
    padding: `0 ${theme.spacing(10)}px`
  },
  title: {
    fontFamily: 'Russo One',
    fontSize: '1.75rem',
    fontWeight: 300,
    marginBottom: theme.spacing(10),
  },
  company: {
    textDecoration: 'none',
    padding: theme.spacing(5),
  },
  img: {
    height: '80px',
  },
  section: {
    display: 'flex',
    flexWrap: 'wrap',
	  justifyContent: 'center',
	  alignItems: 'center',
	  alignContent: 'center',
  }
}));

const Companies = (props: ICompaniesProps) => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <h1 className={classes.title}>{props.header}</h1>
      <section className={classes.section}>
        {
          props.companies.map(company => (
            <a href={company.link} className={classes.company} key={company.name}>
              <img alt={company.name} src={company.imgUrl} className={classes.img}/>
            </a>
          ))
        }
      </section>
    </div>
  );
};

export default Companies;

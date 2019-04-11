import { Theme } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/styles';
import React from 'react';
import { Typography, Button } from '@material-ui/core';
import logo from '../assets/{S} HARPER logo small.jpg'
import { ILink } from './RecentWork';
import { socialLinks } from '../data';

const useStyles = makeStyles((theme: Theme) => ({
  root: {    
    color: 'white',
  },
  title: {
    fontFamily: 'Russo One',
    fontSize: '2rem',
    fontWeight: 300,
  },
  buffer: {
    height: '50px'
  },
  holder: {
    position: 'absolute',
    width: '100vw',
  },
  top: {
    width: '70%',
    display: 'flex',
    justifyContent: 'space-around',
	  alignItems: 'center',
    margin: '0 auto',
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing.unit * 2,
    borderRadius: theme.shape.borderRadius,
  },
  bottom: {
    backgroundColor: theme.palette.primary.dark,
    paddingTop: '100px',
  },
  items: {
    paddingBottom: '20px'
  }
}));

const Footer = () => {
  const classes = useStyles();
  const theme: Theme = useTheme();

  return (
    <footer className={classes.root}>
      <div className={classes.holder}>
        <div className={classes.top}>
          <h1 className={classes.title}>Start a project</h1>
          <Typography style={{color: 'white',}} variant='subheading'>Interested in working together? I would love to talk with you.</Typography>
          <a href='mailto:stuartharper044@gmail.com' style={{textDecoration: 'none'}}>
            <Button variant='outlined' style={{color: 'white', borderColor: theme.palette.primary.dark}}>Let's do this</Button>
          </a>
        </div>
      </div>
      <div className={classes.buffer}/>
      <div className={classes.bottom}>
        <img alt="Stuart Harper Logo" src={logo} className={classes.items}/>
        <Typography variant='subheading' style={{color: 'white', fontStyle: 'italic'}} className={classes.items}>"Life is good, so long as we live in a manner to make it so..."</Typography>
        <div className={classes.items}>
          {
            socialLinks.map((link: ILink) => (
              <a href={link.link} key={link.link}>
                <Button style={{border: `solid 1px ${theme.palette.primary.light}`, borderRadius: '50%', minWidth: 'inherit', width: '50px', height: '50px', margin: '10px'}}>
                  <img style={{width: '30px', height: 'auto'}} alt={`link to ${link.alt}`} src={link.imgUrl}/>
                </Button>
              </a>
            ))
          }
        </div>
        <Typography style={{color: 'white',}} className={classes.items}>Handcrafted by Stuart Harper © 2019</Typography>
      </div>
    </footer>
  );
};

export default Footer;

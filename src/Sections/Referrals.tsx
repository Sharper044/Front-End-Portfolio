import { Theme } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/styles';
import React from 'react';
import { Typography, MobileStepper, Button } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

export interface IReferrals {
  photoUrl: string;
  text: string[];
  name: string;
  title: string;
  company: string;
}

export interface IReferralsProps {
  title: string;
  subtitle: string;
  referrals: IReferrals[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing.unit * 15,
    marginBottom: theme.spacing.unit * 15,
  },
  title: {
    fontFamily: 'Russo One',
    fontSize: '2rem',
    fontWeight: 300,
  },
  subheading: {
    textDecoration: 'none',
    color: theme.palette.primary.light,
  },
  displayHolder: {
    margin: '0 auto',
    marginTop: theme.spacing.unit * 12,
    width: '60%',
    flexGrow: 1,
  },
  slide: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
  },
  image: {
    width: '96px',
    borderRadius: '50%',
    marginBottom: '50px',
  },
  center: {
    textAlign: 'center',
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  stepper: {
    width: '50%',
    margin: '0 auto',
  },
}));

const Referrals = (props: IReferralsProps) => {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.referrals.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step: number) {
    setActiveStep(step);
  }

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>{props.title}</h1>
      <Typography variant='subheading'>{props.subtitle}</Typography>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className={classes.displayHolder}
      >
        {
          props.referrals.map((referral, i) => (
            <div key={i} className={classes.slide}>
              <img src={referral.photoUrl} alt={referral.name} className={classes.image}/>
              {
                referral.text.map(p => <Typography variant='subheading' style={{paddingBottom: '10px'}}>{p}</Typography>)
              }
              <Typography variant='title' style={{paddingBottom: '10px', color: theme.palette.primary.light}}>{referral.name}</Typography>
              <Typography style={{paddingBottom: '10px'}}>{referral.title}, {referral.company}</Typography>
            </div>
          ))
        }
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        className={classes.stepper}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
};

export default Referrals;

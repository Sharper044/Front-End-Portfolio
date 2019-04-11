import { Theme } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/styles';
import React from 'react';
import { IRecentWork } from '../Sections/RecentWork';
// import BackIcon from '@material-ui/icons/ArrowBack';
// import ForwardIcon from '@material-ui/icons/ArrowForward';
import { Card, Typography, Modal, Button, MobileStepper } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    padding: theme.spacing.unit * 2,
    display: 'flex'
  },
  figure: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  center: {
    textAlign: 'center',
  },
  images: {
    width: '400px',
  },
  title: {
    fontFamily: 'Russo One',
    fontSize: '2rem',
    fontWeight: 300,
    color: theme.palette.primary.main,
  },
  aside: {
    width: '400px',
    marginRight: theme.spacing.unit * 2,
  },
  linkImg: {
    width: '25px',
    height: 'auto'
  },
  linkHolder: {
    display: 'flex',
    margin: `${theme.spacing.unit * 2}px 0`
  },
}));

interface IProps extends IRecentWork {
  handleClose: () => void;
  open: boolean;
};

const RecentWorkModal = (props: IProps) => {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.images.length;

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
    <Modal
        aria-labelledby={props.title}
        aria-describedby={props.briefDesc}
        open={props.open}
        onClose={props.handleClose}
        className={classes.modal}
      >
        <Card className={classes.modalCard}>
          <figure>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
              className={classes.figure}
            >
              {
                props.images.map((image, i) => (
                  <div key={i} className={classes.center}>
                    <img src={image.imgUrl} alt={image.ariaLabel} className={classes.images}/>
                    <Typography>{image.description}</Typography>
                  </div>
                ))
              } 
            </SwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              // className={classes.stepper}
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
          </figure>
          <aside className={classes.aside}>
            <h1 className={classes.title}>{props.title}</h1>
            <div className={classes.linkHolder}>
              {
                props.links && props.links.length > 0 &&
                props.links.map((link) => (
                  <a href={link.link} key={link.alt}>
                    <img alt={`link to ${link.link}`} src={link.imgUrl} className={classes.linkImg}/>
                  </a>
                ))
              }
            </div>
            <Typography variant="subheading">{props.description}</Typography>
          </aside>
        </Card>
      </Modal>
  );
};

export default RecentWorkModal;

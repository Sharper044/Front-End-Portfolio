import { Theme } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/styles';
import React, { useState } from 'react';
import { IRecentWork } from '../Sections/RecentWork';
import { Card, CardActionArea, CardMedia, Typography, Button, Modal } from '@material-ui/core';
import BackIcon from '@material-ui/icons/ArrowBack';
import ForwardIcon from '@material-ui/icons/ArrowForward';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';

const useStyles = makeStyles((theme: Theme) => ({
  workCard: {
    margin: theme.spacing.unit * 2,
    width: '328px',
    height: '220px',
  },
  activeArea: {
  },
  media: {
    height: '220px',
  },
  description: {
    position: 'absolute',
    width: '328px',
    height: '220px',
    backgroundColor: `${theme.palette.primary.dark}aa`,
    transition: 'opacity 0.5s linear',
    top: '0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  show: {
    opacity: 1
  },
  hide: {
    opacity: 0
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    padding: theme.spacing.unit * 2,
    display: 'flex'
  },
  title: {
    fontFamily: 'Russo One',
    fontSize: '2rem',
    fontWeight: 300,
    color: theme.palette.primary.main,
  },
  images: {
    width: '400px',
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
  button: {
    color: theme.palette.primary.light,
    borderColor: theme.palette.primary.light,
  },
  figure: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  }
}));

const RecentWorkCard = (props: IRecentWork) => {
  const classes = useStyles();
  const theme: Theme = useTheme();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  
  const [hover, setHover] = useState(false);
  const hoverStart = () => {
    setHover(true);
  }
  const hoverEnd = () => {
    setHover(false);
  }

  return (
    <React.Fragment>
      <Card 
        className={classes.workCard}
        onMouseEnter={hoverStart}
        onMouseLeave={hoverEnd}
      >
        <CardActionArea 
          className={classes.activeArea}
          onClick={handleOpen}
        >
          <CardMedia 
            image={props.mainImgUrl}
            title={props.ariaLabel}
            className={classes.media}
          />
          <div className={`${classes.description} ${hover ? classes.show : classes.hide}`}>
            <Typography variant="headline" style={{color: theme.palette.primary.contrastText}}>
              {props.briefDesc}
            </Typography>
            <Button 
              variant="outlined" 
              style={{color: theme.palette.primary.light, borderColor: theme.palette.primary.light}} 
            >
              See More
            </Button>
          </div>
        </CardActionArea>
      </Card>
      <Modal
        aria-labelledby={props.title}
        aria-describedby={props.briefDesc}
        open={open}
        onClose={handleClose}
        className={classes.modal}
      >
        <Card className={classes.modalCard}>
          <figure>
            <CarouselProvider
              naturalSlideWidth={400}
              naturalSlideHeight={1}
              totalSlides={props.images.length}
              className={classes.figure}
            >
              <Slider trayTag="div">
                {
                  props.images.map((image, i) => (
                    <Slide index={i} tag="div" className={classes.figure}>
                      <Image hasMasterSpinner={false} src={image.imgUrl} alt={image.ariaLabel} className={classes.images}/>
                      <Typography>{image.description}</Typography>
                    </Slide>
                  ))
                }
              </Slider>
              <div>
                <ButtonBack className='MuiButtonBase-root-63 MuiButton-root-37 MuiButton-sizeSmall-60'>
                  <BackIcon/>
                </ButtonBack>
                <ButtonNext className='MuiButtonBase-root-63 MuiButton-root-37 MuiButton-sizeSmall-60'>
                  <ForwardIcon/>
                </ButtonNext>
              </div>
            </CarouselProvider>
          </figure>
          <aside className={classes.aside}>
            <h1 className={classes.title}>{props.title}</h1>
            <div className={classes.linkHolder}>
              {
                props.links && props.links.length > 0 &&
                props.links.map((link) => (
                  <a href={link.link}>
                    <img alt={`link to ${link.link}`} src={link.imgUrl} className={classes.linkImg}/>
                  </a>
                ))
              }
            </div>
            <Typography variant="subheading">{props.description}</Typography>
          </aside>
        </Card>
      </Modal>
    </React.Fragment>
  );
};

export default RecentWorkCard;

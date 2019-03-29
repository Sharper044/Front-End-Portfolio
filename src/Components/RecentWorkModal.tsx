import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { IRecentWork } from '../Sections/RecentWork';
import BackIcon from '@material-ui/icons/ArrowBack';
import ForwardIcon from '@material-ui/icons/ArrowForward';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import { Card, Typography, Modal } from '@material-ui/core';

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
  );
};

export default RecentWorkModal;

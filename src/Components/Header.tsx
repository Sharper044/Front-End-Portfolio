import React from 'react';
import { Menu, MenuItem, Divider, Button } from '@material-ui/core';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, useTheme } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import logo from '../assets/{S} HARPER logo cut.jpg'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    position: 'fixed',
  },
  holder: {
    marginLeft: '64px',
    marginRight: '64px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItems: {
    textDecoration: 'none',
  },
  menu: {
    marginTop: '-10px',
  },
  button: {
    padding: theme.spacing.unit,
  },
  logoHolder: {
    width: '300px'
  },
  logo: {
    width: '100%',
    height: 'auto',
  }
}));

const Header = ({url}: {url: '/code' | '/physics' | '/teaching'}) => {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState<any>(null);

  function handleClick(event: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <header className={classes.root}>
      <div className={classes.holder}>
        <div className={classes.logoHolder}>
          <img src={logo} alt='Sharper Logo' className={classes.logo}/>
        </div>
        {
          matches? 
            <React.Fragment>
              <MenuIcon fontSize="large" onClick={handleClick}/>
              <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} disableAutoFocusItem={true} className={classes.menu}>
                <Link to={`${url}#contact`} className={classes.menuItems}>
                  <MenuItem >Contact Me</MenuItem>
                </Link>
                <Divider/>
                <Link to="/code" className={classes.menuItems}>
                  <MenuItem onClick={handleClose}>Full-Stack Web Development</MenuItem>
                </Link>
                <Link to="/physics" className={classes.menuItems}>
                  <MenuItem onClick={handleClose}>Physics, Astronomy & Engineering</MenuItem>
                </Link>
                <Link to="/teaching" className={classes.menuItems}>
                  <MenuItem onClick={handleClose}>Teaching</MenuItem>
                </Link>
              </Menu>
            </React.Fragment>
          :
            <div>
              <Link to="/teaching" className={`${classes.menuItems} ${classes.button}`}>
                <Button style={{color: 'white'}}>Teaching</Button>
              </Link>
              <Link to="/physics" className={`${classes.menuItems} ${classes.button}`}>
                <Button style={{color: 'white'}}>Physics, Astronomy & Engineering</Button>
              </Link>
              <Link to="/code" className={`${classes.menuItems} ${classes.button}`}>
                <Button style={{color: 'white'}}>Full-Stack Web Development</Button>
              </Link>
              <Link to={`${url}#contact`} className={`${classes.menuItems} ${classes.button}`}>
                <Button variant="outlined" style={{color: theme.palette.primary.light, borderColor: theme.palette.primary.light}} >Contact Me</Button>
              </Link>
            </div>
        }
      </div>
    </header>
  );
};

export default Header;

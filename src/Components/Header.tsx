import React from 'react';
import { Menu, MenuItem, Divider, Button, AppBar } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, useTheme } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import logo from '../assets/{S} HARPER logo cut.jpg'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
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
    padding: theme.spacing(),
  },
  logoHolder: {
    width: '300px'
  },
  logo: {
    width: '100%',
    height: 'auto',
  }
}));

const Header = () => {
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
    <AppBar className={classes.root} style={{backgroundColor: theme.palette.primary.main}}>
      <div className={classes.holder}>
        <div className={classes.logoHolder}>
          <img src={logo} alt='Sharper Logo' className={classes.logo}/>
        </div>
        {
          matches? 
            <React.Fragment>
              <MenuIcon fontSize="large" onClick={handleClick}/>
              <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} disableAutoFocusItem={true} className={classes.menu}>
                <a href="mailto:stuartharper044@gmail.com" className={classes.menuItems}>
                  <MenuItem >Contact Me</MenuItem>
                </a>
                <Divider/>
                <Link to="/code" className={classes.menuItems}>
                  <MenuItem onClick={handleClose}>Home</MenuItem>
                </Link>
                <Link to="/blog" className={classes.menuItems}>
                  <MenuItem onClick={handleClose}>Blog</MenuItem>
                </Link>
              </Menu>
            </React.Fragment>
          :
            <div>
              <Link to="/code" className={`${classes.menuItems} ${classes.button}`}>
                <Button style={{color: 'white'}}>Home</Button>
              </Link>
              <Link to="/blog" className={`${classes.menuItems} ${classes.button}`}>
                <Button style={{color: 'white'}}>Blog</Button>
              </Link>
              <a href="mailto:stuartharper044@gmail.com" className={`${classes.menuItems} ${classes.button}`}>
                <Button variant="outlined" style={{color: theme.palette.primary.light, borderColor: theme.palette.primary.light}} >Contact Me</Button>
              </a>
            </div>
        }
      </div>
    </AppBar>
  );
};

export default Header;

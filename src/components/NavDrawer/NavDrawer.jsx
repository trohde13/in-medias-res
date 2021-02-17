import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Typography,
  Drawer, 
  Button, 
  List, 
  ListItemText, 
  ListItemIcon, 
  ListItem, 
  Divider } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});







function NavDrawer() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  const history = useHistory();
  const classes = useStyles();

  //set state for Drawer
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const navList = (anchor) => (
    <div
        className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
            {[
                {
                    text: 'Home',
                    icon: <HomeOutlinedIcon />
                    onClick: () => history.push('/'),
                    
                },
                {
                    text: 'Journal',
                    icon: <BookOutlinedIcon />,
                    onClick: () => history.push('/journal'),
                    
                },
                {
                    text: 'Add Entry',
                    icon: <AddCircleOutlineOutlinedIcon />,
                    onClick: () => history.push('/add'),
                    
                }
                

            ].map((text, index) => (
                const { text, icon, onClick } = item;
                <ListItem button key={text} onClick={onClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                </ListItem>
            ))
            }

        </List>
    </div>
  );

  return (
    <div>
    {user.id && (
     {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {navList(anchor)}
            </Drawer>
        </React.Fragment>
     ))}             
    )}
    </div>
  );
}; //end navDrawer

export default NavDrawer;
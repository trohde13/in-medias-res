import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';
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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});







function Nav() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  

  

  return (
    <div className="nav">
      <Link to="/home">
        <Typography variant="h2" className="nav-title">in media res</Typography>
      </Link>
       
        <Link className="navLink" to={loginLinkData.path}>
          {loginLinkData.text}
        </Link>
        
        
                

        {user.id && (
          <>
            
            <Link className="navLink" to="/listbook">
              Book List
            </Link>
            <Link className="navLink" to="/journal">
              Journal
            </Link>
            <Link className="navLink" to="/add">
              Add Entry
            </Link>
            <Link className="navLink" to="/info">
              Info Page
            </Link>
            <LogOutButton className="navLink" />
            
          </>
        )}

        
        <Link className="navLink" to="/about">
          About
        </Link>
       
        
      
    </div>
  );
}

export default Nav;

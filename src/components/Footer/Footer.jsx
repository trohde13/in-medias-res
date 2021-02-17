import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
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

import './Footer.css';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <>
    <footer>
      &copy; Thomas Rohde
      <div></div>
      <LogOutButton />
    </footer>
    
    
    </>
  );
}

export default Footer;

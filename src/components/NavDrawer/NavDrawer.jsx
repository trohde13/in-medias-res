import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';

import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Typography,
  Grid,
  Drawer, 
  Button, 
  List, 
  ListItemText, 
  ListItemIcon, 
  ListItem, 
  Divider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


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

  const handleHome = () => {
    history.push('/');
  };

  const handleJournal = () => {
      history.push('/journal');
  };

  const handleAdd = () => {
      history.push('/add');
  };

  

  return (
    // {user.id && (
      
    <header>
      <div className={classes.root}>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={3}
      >
       <Grid 
        item
        xs={12} sm={6}> 
      <div>
        <Typography variant="h2">in media res</Typography>
      </div>
      </Grid>
      <Grid item xs={6} sm={3}></Grid>
      <Grid 
      item 
      justify="flex-end"
      xs={6} sm={3}>
    <div>
    
      
     {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}><Avatar><MenuIcon /></Avatar></Button>
        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
              <ListItem autoFocus button onClick={handleHome}>
                  <ListItemAvatar>
                      <Avatar>
                          <HomeIcon />
                      </Avatar>
                   </ListItemAvatar>
                  <ListItemText primary="Home" />
               </ListItem>
               <ListItem autoFocus button onClick={handleJournal}>
                  <ListItemAvatar>
                      <Avatar>
                          <BookIcon />
                       </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Journal" />
                </ListItem>
                <ListItem autoFocus button onClick={handleAdd}>
                   <ListItemAvatar>
                      <Avatar>
                          <AddIcon />
                       </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Add" />
                </ListItem>
            </List>
        </div>
        </Drawer>
        </React.Fragment>
     ))}             
    
  
    </div>
    </Grid>
    </Grid>
    </div> 
    </header>
    // )}
  );
}; //end navDrawer

export default NavDrawer;
import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { MainContext } from '../Wrapper';

const styles = theme => ({
  drawer: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 300,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
});

const Navigation = ({ 
 classes, open, toggleDrawer,
}) => {
  const { location: { pathname }, language, routes } = useContext(MainContext);
  console.log(pathname)
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      classes={{
        paper: classNames(classes.drawer, !open && classes.drawerClose),
      }}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <MenuList>
        {
        routes.filter(({ showInNavigation }) => showInNavigation)
          .map(({ 
            id, path, Icon, selected,
          }) => (
            <Link to={path} key={id}>
              <MenuItem selected={selected}>
                <ListItemIcon >
                  <Icon />
                </ListItemIcon>
                <ListItemText inset primary={language.pages[id].title} />
              </MenuItem>
            </Link>
          ))
        }
      </MenuList>
    </Drawer>
  );
};

export default withStyles(styles)(Navigation);

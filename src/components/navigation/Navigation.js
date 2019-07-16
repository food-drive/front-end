import React, {
  useContext, useMemo, useEffect, useReducer,
} from 'react';
import { number } from 'prop-types';
import clsx from 'clsx';

import { Link as RouteLink } from 'react-router-dom';
import {
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  makeStyles,
  useMediaQuery,
  Box,
} from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';
import MainContext from '../../Contexts/MainContext';
import MenuContext from '../../Contexts/MenuContext';
import RoutingContext from '../../Contexts/RoutingContext';

import defaultRoutes from '../../utils/routes-list';
import { routesReducer } from '../Routing';

import { SET_SELECTED_ROUTE } from './NavigationActions';

import {
  userActions,
} from '../Users';

const { LOGOUT } = userActions;

const menuWidth = '250px';

const styles = theme => ({
  menu: {
    width: menuWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  bar: {
    zIndex: theme.zIndex.drawer + 1,
    marginLeft: menuWidth,
    width: `calc(100% - ${menuWidth})`,
  },
  root: {
    display: 'flex',
  },
  drawer: {
    width: menuWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: menuWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

const useStyles = makeStyles(styles);

const Navigation = () => {
  const classes = useStyles();
  const theme = useTheme();

  const isNotMobile = useMediaQuery(theme.breakpoints.up('sm'));
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);
  const { location } = useContext(RoutingContext);
  const [routes, updateRoutes] = useReducer(routesReducer, defaultRoutes);

  const {
    language,
    user,
  } = useContext(MainContext);

  const { state: { isLoggedIn } } = user;

  const loginRoute = useMemo(
    () => routes.find(({ id }) => id === 'login'),
    [routes],
  );

  const logout = () => user.dispatch({ type: LOGOUT });

  useEffect(() => {
    const { pathname } = location;
    updateRoutes({
      type: SET_SELECTED_ROUTE,
      pathname,
    });
  }, [location, updateRoutes]);

  const drawerProps = {};
  if (!isNotMobile) {
    drawerProps.anchor = theme.direction === 'rtl' ? 'right' : 'left';
    drawerProps.open = isMenuOpen;
    drawerProps.onClose = toggleMenu;
    drawerProps.ModalProps = {
      keepMounted: true, // Better open performance on mobile.
    };
  } else {
    drawerProps.open = true;
  }

  return (
    <Box component="nav" className={clsx(isNotMobile && classes.drawer)} aria-label="Mailbox folders">
      <Drawer
        variant={clsx(!isNotMobile && 'temporary', isNotMobile && 'permanent')}
        classes={{
          paper: classes.drawerPaper,
        }}
        {...drawerProps}
      >
        <div>
          <div className={classes.toolbar} />
          <Divider />
          <List>
            {
              routes.filter(({ showInNavigation }) => showInNavigation)
                .map(({
                  id, path, Icon, selected,
                }) => (
                  <Link to={path} key={id} component={RouteLink}>
                    <ListItem
                      button
                      key={id}
                      selected={selected}
                    >
                      <ListItemIcon><Icon /></ListItemIcon>
                      <ListItemText>
                        {language.state.pages[id].title}
                      </ListItemText>
                    </ListItem>
                  </Link>
                ))
            }
          </List>
          <Divider />
          <List>
            {
              (!isLoggedIn && (
                <Link component={RouteLink} to={loginRoute.path}>
                  <ListItem
                    button
                  >
                    Log In
                  </ListItem>
                </Link>
              ))
              || (
                <ListItem
                  button
                  onClick={logout}
                >
                  Log Out
                </ListItem>
              )
            }
          </List>
        </div>
      </Drawer>
    </Box>
  );
};

Navigation.propTypes = {
  menuWidth: number.isRequired,
};

export default Navigation;

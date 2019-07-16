import React, { useContext } from 'react';
import { bool } from 'prop-types';
import clsx from 'clsx';

import {
  AppBar as MuiAppBar,
  makeStyles,
  Box,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
} from '@material-ui/core';

import { Menu as MenuIcon } from '@material-ui/icons';
import { useTheme } from '@material-ui/styles';

import MenuContext from '../../Contexts/MenuContext';

const styles = () => ({
  appBar: {
    width: menuWidth => `calc(100% - ${menuWidth}px)`,
  },
});

const useStyles = makeStyles(styles);

const AppBar = ({ showMenu }) => {
  const { toggleMenu, menuWidth } = useContext(MenuContext);

  const classes = useStyles(menuWidth);
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <MuiAppBar position="fixed" className={clsx(isNotMobile && showMenu && classes.appBar)}>
      <Toolbar>
        {
          !isNotMobile && (
            <Box mr={2}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                edge="start"
                onClick={toggleMenu}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )
        }
        <Typography variant="h6" noWrap>Colletta alimentare</Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

AppBar.propTypes = {
  showMenu: bool,
};

AppBar.defaultProps = {
  showMenu: true,
};

export default AppBar;

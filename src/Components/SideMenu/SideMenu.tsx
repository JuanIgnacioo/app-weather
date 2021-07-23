import { Drawer, Toolbar, InputBase } from '@material-ui/core';
import React from 'react';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import { sideMenuStyles } from './SideMenuStyle';
import Cardd from '../Card/Cardd';


const SideMenu: React.FC = (props: any) => {

  const classes = sideMenuStyles();
  return (
    <Drawer
      variant={'permanent'}
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Buscar lugar…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <Divider />
      <Cardd />
      <Divider />
    </Drawer>
  );
}

export default SideMenu;

import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SideMenu from '../../Components/SideMenu/SideMenu';
import { principalStyle } from './PrincipalStyle';


const Principal: React.FC = (props: any) => {
  const classes = principalStyle();

  return (
    <div >
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Aplicacion Clima
          </Typography>
        </Toolbar>
      </AppBar>
      <SideMenu />
      <div className={classes.content}>
        <main>
        <Typography variant="h6" noWrap>
            Pronostico extendido a 5 dias :
        </Typography>

        </main>
      </div>

    </div>
  );
}

export default Principal;

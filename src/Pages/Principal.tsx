import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';


const Principal : React.FC = (props: any) => {
  return (
    <div >
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Aplicacion Clima
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Principal;

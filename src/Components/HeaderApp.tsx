import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { HeaderProps } from "../GlobalUtils/Utils";
import { principalStyle } from "../Styles/PrincipalStyle";

const HeaderApp: React.FC<HeaderProps> = (props: HeaderProps) => {
  const classes = principalStyle();
  return (
    <AppBar data-testid="header-1" position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderApp;

import {Divider, Drawer, InputBase, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import CardWeather from "./CardWeather";
import PublicIcon from "@material-ui/icons/Public";
import { v4 as uuidv4 } from "uuid";
import { sideMenuStyles } from "../Styles/SideMenuStyle";
import { interestingCitys, LateralMenuProps } from "../GlobalUtils/Utils";

const LateralMenu: React.FC<LateralMenuProps> = (props: LateralMenuProps) => {
  const sideMenuClase = sideMenuStyles();
  return (
    <Drawer
    variant={"permanent"}
    className={sideMenuClase.drawer}
    classes={{
      paper: sideMenuClase.drawerPaper,
    }}
  >
    <Toolbar />
    <div className={sideMenuClase.search}>
      <div className={sideMenuClase.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Buscar lugar…"
        classes={{
          root: sideMenuClase.inputRoot,
          input: sideMenuClase.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onKeyDown={(e) => props.searchCity(e)}
      />
    </div>
    <Divider />

    <CardWeather
      key={uuidv4()}
      imageCode={props.imageCode}
      cityName={props.cityName}
      currentWeather={props.currentWeather}
      temp={props.temp}
      humidity={props.humidity}
      rainProb={props.rainProb}
    />

    <Divider />

    <div className={sideMenuClase.underElement}>
      <Typography align="center" variant="h6" noWrap>
        Al rededor del mundo :
      </Typography>
      <List>
        {interestingCitys && interestingCitys.length > 0
          ? interestingCitys.map((item) => {
              return (
                <ListItem
                  key={item.id}
                  button
                  onClick={(e) => {
                    props.onSelectCity(item.value);
                  }}
                >
                  <ListItemIcon>
                    <PublicIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.value} />
                </ListItem>
              );
            })
          : null}
      </List>
    </div>
  </Drawer>
  );
};

export default LateralMenu;

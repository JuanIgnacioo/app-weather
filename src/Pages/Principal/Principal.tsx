import React, { useState } from 'react';
import { AppBar, Divider, Drawer, InputBase, List, ListItem, Toolbar, Typography } from '@material-ui/core';

import { principalStyle } from './PrincipalStyle';
import { useEffect } from 'react';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import { sideMenuStyles } from './SideMenuStyle';
import Cardd from '../../Components/Card/Cardd';
import ListItemText from '@material-ui/core/ListItemText';

const Principal: React.FC = (props: any) => {
  const classes = principalStyle();
  const sideMenuClase = sideMenuStyles();
  const apiKey = 'e8efff52bead023e1ec2ad5acc26d6c8';
  const [nameActualCity, setNameActualCity] = useState<string>('');

  const [cityName, setCityName] = useState<string>('');
  const [currentWeather, setCurrentWeather] = useState<string>('');
  const [weatherIcon, setWeatherIcon] = useState<string>('');
  const [temp, setTemp] = useState<number>(0);

  useEffect(() => {
    axios.get("http://ip-api.com/json/")
      .then((res) => {
        console.log('ESTAS EN', res.data.city);
        setNameActualCity(res.data.city);
      })
  }, [])

  useEffect(() => {
    if (nameActualCity) {
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${nameActualCity}&lang=es&appid=${apiKey}`)
        .then((res) => {
          console.log(res.data)
          setWeatherIcon(res.data.weather[0].icon);
          setCityName(res.data.name);
          setCurrentWeather(res.data.weather[0].description);
          setTemp(res.data.main.temp - 273.5)
        })
    }
  }, [nameActualCity])

  useEffect(() => {
    if (nameActualCity) {
      axios
        .get(`http://api.openweathermap.org/data/2.5/forecast?q=${nameActualCity}&lang=es&appid=${apiKey}`)
        .then((res) => {
        })
    }
  }, [nameActualCity])


  return (
    <div >
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Aplicacion Clima
          </Typography>
        </Toolbar>
      </AppBar>
    
      <Drawer
        variant={'permanent'}
        className={sideMenuClase.drawer}
        classes={{
          paper: sideMenuClase.drawerPaper,
        }}>
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
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <Divider />

        <Cardd
          imageCode={weatherIcon}
          cityName={cityName}
          currentWeather={currentWeather}
          temp={temp} />

        <Divider />

        <div className={sideMenuClase.underElement}>
          <Typography variant="h6" noWrap>
            Otros lugares de interes
          </Typography>
          <List>
          {
            ['New York', 'Buenos Aires' , 'China', 'Alemania'].map(
              (item) => {
                return (
                  <ListItem button>
                    <ListItemText primary={item} />
                  </ListItem>
                )
              }
            )
          }
          </List>
        </div>
      </Drawer>
      

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

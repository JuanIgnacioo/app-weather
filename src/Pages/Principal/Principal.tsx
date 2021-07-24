import React, { useState } from "react";
import {
  AppBar,
  Divider,
  Drawer,
  InputBase,
  List,
  ListItem,
  Toolbar,
  Typography,
  Grid,
  ListItemIcon,
} from "@material-ui/core";

import { principalStyle } from "../../Styles/PrincipalStyle";
import { useEffect } from "react";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import { sideMenuStyles } from "../../Styles/SideMenuStyle";
import ListItemText from "@material-ui/core/ListItemText";
import CardWeather from "../../Components/Card/CardWeather";
import { gridForecastStyle } from "../../Styles/GridForecastStyle";
import { interestingCitys } from "../../GlobalUtils/Utils";
import { v4 as uuidv4 } from "uuid";
import PublicIcon from "@material-ui/icons/Public";
import TableContent from "../../Components/Card/TableContent";

const Principal: React.FC = (props: any) => {
  const classes = principalStyle();
  const sideMenuClase = sideMenuStyles();
  const forecastClase = gridForecastStyle();
  const apiKey = "0e14cafa2ba44641bc6f853f918c3708";

  const [nameActualCity, setNameActualCity] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [currentWeather, setCurrentWeather] = useState<string>("");
  const [weatherIcon, setWeatherIcon] = useState<string>("");
  const [temp, setTemp] = useState<number>(0);
  const [humidity, setHumidity] = useState<number>(0);
  const [probRain, setProbRain] = useState<number>(0);
  const [forecastData, setForecastData] = useState([]);

  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  //Hooks para Highlights
  const [tempAparent, setTempAparent] = useState<number>(0);
  const [wind, setWind] = useState<string>("");
  const [visivility, setVisivility] = useState<number>(0);
  const [pressure, setPressure] = useState<number>(0);
  const [clouds, setClouds] = useState<number>(0);
  const [uv, setUv] = useState<number>(0);

  useEffect(() => {
    axios.get("http://ip-api.com/json/").then((res) => {
      if(res.data.city === 'Buenos Aires') setNameActualCity('Ciudad Autonoma de Buenos Aires'); 
    });
  }, []);

  useEffect(() => {
    if (nameActualCity) {
      axios
        .get(
          `https://api.weatherbit.io/v2.0/current?city=${nameActualCity}&key=${apiKey}&lang=es`
        )
        .then((res) => {
          // seteamos los datos de la ubicacion actual
          setWeatherIcon(res.data.data[0].weather.icon);
          setCityName(res.data.data[0].city_name);
          setCurrentWeather(res.data.data[0].weather.description);
          setHumidity(res.data.data[0].rh);
          setTemp(res.data.data[0].temp);
          setProbRain(res.data.data[0].pop);

          //Seteamos los datos para higlights
          setTempAparent(res.data.data[0].app_temp);
          setWind(res.data.data[0].wind_dir);
          setClouds(res.data.data[0].clouds);
          setVisivility(res.data.data[0].vis);
          setPressure(res.data.data[0].pres);
          setUv(res.data.data[0].uv);
        });
    }
  }, [nameActualCity]);

  useEffect(() => {
    if (nameActualCity) {
      axios
        .get(
          `https://api.weatherbit.io/v2.0/forecast/daily?city=${nameActualCity}&key=${apiKey}&lang=es`
        )
        .then((res) => {
          //seteamos los datos del forecast
          setForecastData(res.data.data.splice(1, 5));
        });
    }
  }, [nameActualCity]);

  const searchCity = (e: any) => {
    if (e.keyCode === 13) {
      setNameActualCity(e.target.value);
      // put the login here
    }
  };

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Aplicacion Clima
          </Typography>
        </Toolbar>
      </AppBar>

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
            onKeyDown={searchCity}
          />
        </div>
        <Divider />

        <CardWeather
          key={uuidv4()}
          imageCode={weatherIcon}
          cityName={cityName}
          currentWeather={currentWeather}
          temp={temp}
          humidity={humidity}
          rainProb={probRain}
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
                        setNameActualCity(item.value);
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

      <div className={classes.content}>
        <main>
          <Typography variant="h6" noWrap>
            Pronostico extendido para {nameActualCity}:
          </Typography>
          <Divider />
          <Grid container className={forecastClase.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={6}>
                {forecastData && forecastData.length > 0
                  ? forecastData.map((item: any) => {
                      return (
                        <CardWeather
                          key={uuidv4()}
                          mode={"gridContent"}
                          imageCode={item.weather.icon}
                          date={item.valid_date}
                          currentWeather={item.weather.description}
                          temp={item.temp}
                          humidity={item.rh}
                          rainProb={item.pop}
                        ></CardWeather>
                      );
                    })
                  : null}
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Typography variant="h6" align="center">
            Destacados de hoy :
          </Typography>
         
            <TableContent
              wind={wind ? wind : ""}
              clouds={clouds ? clouds : 0}
              visivility={visivility ? visivility : 0}
              pressure={pressure ? pressure : 0}
              tempAparent={tempAparent ? tempAparent : 0}
              uv={uv? uv : 0}
            />
        
         
        </main>
      </div>
    </div>
  );
};

export default Principal;

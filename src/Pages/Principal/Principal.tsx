import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import LateralMenu from "../../Components/LateralMenu";
import ExtendedPronostic from "../../Components/ExtendedPronostic";
import HeaderApp from "../../Components/HeaderApp";
import { cityNotFound, ubicationNotFound } from "../../GlobalUtils/Utils";

const Principal: React.FC = (props: any) => {
  const apiKey = "0e14cafa2ba44641bc6f853f918c3708";
  const geoKey = "6dede874bcd34455806b97375731f983";

  const [nameActualCity, setNameActualCity] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [currentWeather, setCurrentWeather] = useState<string>("");
  const [weatherIcon, setWeatherIcon] = useState<string>("");
  const [temp, setTemp] = useState<number>(0);
  const [humidity, setHumidity] = useState<number>(0);
  const [probRain, setProbRain] = useState<number>(0);
  const [forecastData, setForecastData] = useState([]);

  //Hooks para Highlights
  const [tempAparent, setTempAparent] = useState<number>(0);
  const [wind, setWind] = useState<string>("");
  const [visibility, setVisibility] = useState<number>(0);
  const [pressure, setPressure] = useState<number>(0);
  const [clouds, setClouds] = useState<number>(0);
  const [uv, setUv] = useState<number>(0);

  useEffect(() => {
    axios
      .get(`https://api.ipgeolocation.io/ipgeo?apiKey=${geoKey}&fields=geo`)
      .then((res) => { 
          setNameActualCity(res.data.state_prov);
      })
      .catch((err) => {
        ubicationNotFound();
        setNameActualCity("Ciudad Autonoma de Buenos Aires");
      });
  }, [geoKey]);

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
          setVisibility(res.data.data[0].vis);
          setPressure(res.data.data[0].pres);
          setUv(res.data.data[0].uv);
        }).catch((err)=>{
          cityNotFound();
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
          if ( res && res.data && res.data.data){
          setForecastData(res.data.data.splice(1, 5));
          };          
        });
    }
  }, [nameActualCity]);

  const searchCity = (e: any) => {
    if (e.keyCode === 13) {
      setNameActualCity(e.target.value);
    }
  };

  return (
    <div>
      <HeaderApp title={"Weather app"} />

      <LateralMenu
        onSelectCity={(e) => setNameActualCity(e)}
        imageCode={weatherIcon}
        cityName={cityName}
        currentWeather={currentWeather}
        temp={temp}
        humidity={humidity}
        rainProb={probRain}
        searchCity={(e) => searchCity(e)}
      />

      <ExtendedPronostic
        nameActualCity={nameActualCity}
        forecastData={forecastData}
        wind={wind}
        visibility={visibility}
        pressure={pressure}
        clouds={clouds}
        uv={uv}
        tempAparent={tempAparent}
      />
    </div>
  );
};

export default Principal;

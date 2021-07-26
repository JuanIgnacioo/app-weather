import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,  
} from "@material-ui/core";
import React from "react";
import { cardContentStyle } from "../Styles/CardWeatherStyle";
import notfound from "../Images/image-not-found.png";
import { CardProps } from "../GlobalUtils/Utils";

const CardWeather: React.FC<CardProps> = (props: CardProps) => {
  const classes = cardContentStyle();
  return (
    <div data-testid="card-1" className={classes.root}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={props.mode ? classes.mediaGrid : classes.media}
            image={
              props.imageCode
                ? `https://www.weatherbit.io/static/img/icons/${props.imageCode}.png`
                : notfound
            }
            title="Contemplative Reptile"
          />
          <div className={classes.content}>
            <CardContent>
              <Typography
                align="center"
                gutterBottom
                variant="h5"
                component="h5"
              >
                {props.cityName ? props.cityName :  props.date}
              </Typography>
              <Typography align="center" gutterBottom component="p">
                 Temperatura :
                 {props.temp?.toFixed()}°
              </Typography>
              <Typography
                align="center"
                variant="body2"
                color="error"
                component="p"
              >
                {props.currentWeather}
              </Typography>
              {!props.mode ? (
                <Typography
                  align="center"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Humedad actual : {props.humidity} %
                </Typography>
              ) : null}

              {props.mode ? (
                <Typography
                  align="center"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {!props.mode ? "Prob lluvia actual" : "Prob lluvia"} :{" "}
                  {props.rainProb} %
                </Typography>
              ) : null}
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CardWeather;

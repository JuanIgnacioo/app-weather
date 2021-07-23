import { Card, CardActionArea, CardMedia, Typography, CardActions, Button, CardContent } from '@material-ui/core';
import React from 'react';
import { cardContentStyle } from './CardContentStyle';

interface CardProps {
  imageCode?: any;
  cityName?: string;
  description?: string;
  currentWeather?: string;
  temp?: number
}

const Cardd: React.FC<CardProps> = (props: CardProps) => {

  const classes = cardContentStyle();
  return (
    <div className={classes.root}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`http://openweathermap.org/img/wn/${props.imageCode}.png`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.cityName} {props.temp?.toFixed()} °
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Tiempo : {props.currentWeather}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cardd;

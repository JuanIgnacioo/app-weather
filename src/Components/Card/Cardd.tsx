import {Card, CardActionArea, CardMedia, Typography, CardActions, Button, CardContent } from '@material-ui/core';
import React from 'react';
import { cardContentStyle } from './CardContentStyle';



const Cardd: React.FC = (props: any) => {

  const classes = cardContentStyle();
  return (
    <div className={classes.root}>
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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

import { Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import { gridForecastStyle } from "../Styles/GridForecastStyle";
import { principalStyle } from "../Styles/PrincipalStyle";
import CardWeather from "./CardWeather";
import { v4 as uuidv4 } from "uuid";
import TableContent from "./TableContent";
import { ExtendedPronosticProps } from "../GlobalUtils/Utils";
import Skeleton from "@material-ui/lab/Skeleton";
import { skeletonStyle } from "../Styles/SkeletonStyle";

const ExtendedPronostic: React.FC<ExtendedPronosticProps> = (
  props: ExtendedPronosticProps
) => {
  const classes = principalStyle();
  const forecastClase = gridForecastStyle();
  const skeletonsstyle = skeletonStyle();

  return (
    <div data-testid="extd-1" className={classes.content}>
      <main>
        <Typography variant="h6" noWrap>
         {props.nameActualCity ? 'Pronostico extendido para ' + props.nameActualCity :
         'Cargando informacion ...' } 
        </Typography>
        <Divider />
        <Grid container className={forecastClase.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={6}>
              {props.forecastData && props.forecastData.length > 0 ? (
                props.forecastData.map((item: any) => {
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
              ) : (
                <div className={skeletonsstyle.skeleton}>
                  <Skeleton />
                  <Skeleton animation={false} />
                  <Skeleton animation="wave" />
                </div>
              )}
            </Grid>
          </Grid>
        </Grid>
        {props.forecastData && props.forecastData.length > 0 ? (
          <div>
            <Divider />
            <Typography variant="h6" align="center">
              Destacados de hoy :
            </Typography>

            <TableContent
              wind={props.wind ? props.wind : ""}
              clouds={props.clouds ? props.clouds : 0}
              visibility={props.visibility ? props.visibility : 0}
              pressure={props.pressure ? props.pressure : 0}
              tempAparent={props.tempAparent ? props.tempAparent : 0}
              uv={props.uv ? props.uv : 0}
            />
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default ExtendedPronostic;

import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const gridForecastStyle = makeStyles((theme: Theme) =>
   createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    polygon:{
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    }
  }),
);

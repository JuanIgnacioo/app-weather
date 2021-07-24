import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const cardContentStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 230,
      padding: theme.spacing(4, 2, 4, 4),
    },
    media: {
      height: 140,
      padding: theme.spacing(6, 0, 0, 0),
    },
    mediaGrid: {
      height: 100,
      width: 100,
      padding: theme.spacing(5, 0, 3, 10),
    },
    content: {
      marginBottom: 8,
    },
  })
);

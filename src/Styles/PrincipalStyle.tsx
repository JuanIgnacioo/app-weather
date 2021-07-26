import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const principalStyle = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "#5E8E9F",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(10, 1, 1, 40),
    },
  })
);

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const skeletonStyle = makeStyles((theme: Theme) =>
  createStyles({
    skeleton: {
        width: 600,
        padding: theme.spacing(30, 0, 0, 0),
    },
  })
);

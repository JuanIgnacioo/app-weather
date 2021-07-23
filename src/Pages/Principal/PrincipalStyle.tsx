import { createStyles, makeStyles, Theme} from '@material-ui/core';

export const principalStyle = makeStyles((theme: Theme) =>
  createStyles({   
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(12, 1, 1, 40),
    },  
  }),
);
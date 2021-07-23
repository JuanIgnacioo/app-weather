import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const cardContentStyle = makeStyles((theme: Theme)=>
createStyles({
  root: {
    maxWidth: 230,
    padding: theme.spacing(4, 2, 4, 4),
  },
  media: {
    height: 140,
  },
})
)
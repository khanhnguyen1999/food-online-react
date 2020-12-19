import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: `${process.env.REACT_APP_DRAWER_WIDTH}px`,
        flexShrink: 0,
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: `${process.env.REACT_APP_DRAWER_WIDTH}px`,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

export default useStyles;
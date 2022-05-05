import { makeStyles } from '@material-ui/core/styles';

// uses the makestyles hook to modify the styles
// set by MUI
export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));
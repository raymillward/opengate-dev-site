import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const fontSizes = theme => ({
  fontFamily: 'lobster',
  color: 'white',
  textShadow: '0px 0px 10px #000, 0px 0px 10px #000',
  [theme.breakpoints.down('xs')]: {
    fontSize: 20,
  },
  // [theme.breakpoints.up('sm')]: {
  //   fontSize: 30,
  // },
  [theme.breakpoints.up('sm')]: {
    fontSize: 40,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: 60,
  },
});
const styles = theme => ({
  level1: {
    ...fontSizes(theme),
  },
  level2: {
    marginTop: 50,
    marginLeft: 50,
    ...fontSizes(theme),
  },
  level3: {
    marginTop: 50,
    marginLeft: 100,
    ...fontSizes(theme),
  },
});

const MainMessage = props => (
  <div>
    <Typography color="secondary" variant="h2" className={props.classes.level1}>
      A home for all
    </Typography>
    <Typography variant="h2" className={props.classes.level2}>
      A family for discipleship
    </Typography>
    <Typography variant="h2" className={props.classes.level3}>
      A base for sending
    </Typography>
  </div>
);

export default withStyles(styles, { withTheme: true })(MainMessage);

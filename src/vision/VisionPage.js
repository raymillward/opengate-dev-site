import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {},
};
const VisionPageComponent = props => <div className={props.classes.root} />;

export default withStyles(styles)(VisionPageComponent);

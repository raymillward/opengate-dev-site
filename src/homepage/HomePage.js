import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/background.jpg'

const styles = {
  root: {
    marginTop: 14,
    backgroundColor: 'red'
  },
  backgroundImage: {
    height: '100vh'
  },
  overlayText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}
const HomePageComponent = (props) => (
  <div className={props.classes.root}>
    <img className={props.classes.backgroundImage} src={backgroundImage} alt="Background image" />
    <div className={props.classes.overlayText}>A home for all</div>
  </div>
)

export default withStyles(styles)(HomePageComponent)
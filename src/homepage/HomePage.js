import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Background from '../images/background.jpg'
import MainMessage from './MainMessage';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const styles = {
  root: {
  },
  imageContainer: {
    width: '100vw',
    overflowX: false
  },
  backgroundImage: {
    height: '90vh',
    minHeight: 400,
    maxHeight: 700,
    backgroundImage: "url(" + Background + ")",
    backgroundSize: 'cover'
  },
  overlayText: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '10vh',
    paddingBottom: 50
  },
  buttonContainer: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    marginLeft: 10,
    marginRight: 10
  },
  strapline: {
    color: 'white'
  }
}
const HomePageComponent = (props) => (
  <div className={props.classes.root}>
    <div className={props.classes.backgroundImage}>
      {/* <img className={props.classes.backgroundImage} src={backgroundImage} alt="Background image" /> */}
      <div className={props.classes.overlayText}>
        <MainMessage />
        
      </div>
      <div className={props.classes.buttonContainer}>
        <Button variant="contained" className={props.classes.button}>
          Find out more
        </Button>
        <Button variant="contained" color="primary" className={props.classes.button}>
          Join Us!
        </Button>
      </div>
      <div className={props.classes.buttonContainer}>
        <Typography className={props.classes.strapline}>
          We normally meet Sundays 10:30am at Stockham Primary School
        </Typography>
      </div>
    </div>
    
  </div>
)

export default withStyles(styles)(HomePageComponent)
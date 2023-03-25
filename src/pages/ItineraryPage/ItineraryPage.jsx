import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import background1 from '../../images/itinerary.jpg';
import background2 from '../../images/itinerary2.jpg';
import backgrounds from '../../images/tripi2.jpg';

const useStyles = styled({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: `url(${backgrounds})`,
    backgroundSize: 'cover',
    '&:hover': {
      backgroundImage: `url(${backgrounds})`,
      filter: 'brightness(100%)',
    },
  },
  button: {
    width: '1000px',
    height: '200px',
    margin: '1rem',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: 'white',
    fontWeight: 'bold', 
    fontSize: '32px', 
    '&:hover': {
      filter: 'brightness(110%)',
    },
  },
  explore: {
    backgroundImage: `url(${background1})`,
  },
  create: {
    backgroundImage: `url(${background2})`,
  },
});

const ItineraryPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/cardpage">
        <Button className={`${classes.button} ${classes.explore}`} variant="contained" disableElevation>
          Explore Trips
        </Button>
      </Link>
      <Link to="/create">
        <Button className={`${classes.button} ${classes.create}`} variant="contained" disableElevation>
          Create Trip
        </Button>
      </Link>
    </div>
  );
};

export default ItineraryPage;

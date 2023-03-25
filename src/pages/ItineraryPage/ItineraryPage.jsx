import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import background1 from '../../images/itinerary.jpg';
import background2 from '../../images/itinerary2.jpg';
import backgrounds from '../../images/tripi2.jpg';

const StyledButton = styled(Button)({
  backgroundImage: `url(${background1})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#ffffff',
  borderRadius: '30px',
  padding: '50px 24px',
  fontSize: '1.5rem',
  margin: '20px',
  width: '500px',
  '&:hover': {
    backgroundImage: `url(${background2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#ffffff',
  },
});

const ItineraryPage = () => {

  return (
    <div style={{ backgroundImage: `url(${backgrounds})`, height: '100vh', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <Link to="/cardpage">
          <StyledButton>
            Explore Trips
          </StyledButton>
        </Link>
        <Link to="/create">
          <StyledButton>
            Create Trip
          </StyledButton>
        </Link>
      </div>
    </div>
  );
};

export default ItineraryPage;

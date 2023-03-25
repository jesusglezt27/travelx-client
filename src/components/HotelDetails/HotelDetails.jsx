import React, {useState} from 'react';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';

const HotelDetails = ({handleState, hotelDetails = [] }) => {

  const [hotel, setHotel] = useState(hotelDetails.length?hotelDetails[0].hotelName:"")
  const [checkin, setCheckin] = useState(hotelDetails.length?hotelDetails[0].checkIn:"")
  const [checkout, setCheckout] = useState(hotelDetails.length?hotelDetails[0].checkOut:"")

  const handleData = (value, key)=>{
    switch (key) {
      case 'hotelName':
      setHotel(value)
      handleState(value, key)
        break;
      case 'checkIn':
        setCheckin(value)
        handleState(value, key)
    
        break;
      case 'checkOut':
        setCheckout(value)
        handleState(value, key)
      
        break;
    }
  }


  return (
    <Box sx={{ maxWidth: '960px', mx: 'auto', px: 2 }}>
      <Typography variant="h4" align="center" sx={{ py: '2rem' }}>
        Hotel Details
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField value={hotel} label="Hotel" fullWidth required onChange={(e)=>handleData(e.target.value,"hotelName")}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField value={checkin} label="Check In" fullWidth required onChange={(e)=>handleData(e.target.value,"checkIn")} type="date"/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField value={checkout} label="Check Out" fullWidth required onChange={(e)=>handleData(e.target.value,"checkOut")} type="date"/>
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default HotelDetails;

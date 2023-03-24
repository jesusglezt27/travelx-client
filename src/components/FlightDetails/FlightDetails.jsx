import React, {useState} from 'react';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';

const FlightDetails = ({handleState, flightDetails}) => {

  const [airline, setAirline] = useState(flightDetails.length?flightDetails[0].airline:"")
  const [date, setDate] = useState(flightDetails.length?flightDetails[0].date:"")
  const [time, setTime] = useState(flightDetails.length?flightDetails[0].time:"")
  const [departure, setDeparture] = useState(flightDetails.length?flightDetails[0].departure:"")
  const [arrival, setArrival] = useState(flightDetails.length?flightDetails[0].arrival:"")

  const handleData = (value, key)=>{
    switch (key) {
      case 'airline':
      setAirline(value)
      handleState(value, key)
        break;
      case 'date':
        setDate(value)
        handleState(value, key)
    
        break;
      case 'time':
        setTime(value)
        handleState(value, key)
        
        break;
      case 'departure':
        setDeparture(value)
        handleState(value, key)

        break;
      case 'arrival':
        setArrival(value)
        handleState(value, key)

        break;
    }
  }

  return (
    <Box sx={{ maxWidth: '960px', mx: 'auto', px: 2 }}>
      <Typography variant="h4" align="center" sx={{ py: '2rem' }}>
        Flight Details
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField value={airline} label="Airline" fullWidth required onChange={(e)=>handleData(e.target.value,"airline")}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField value={date} label="Date" fullWidth required onChange={(e)=>handleData(e.target.value,"date")} type="date" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField value={time} label="Time" fullWidth required onChange={(e)=>handleData(e.target.value,"time")} type="time" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField value={departure} label="Departure" fullWidth required onChange={(e)=>handleData(e.target.value,"departure")}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField value={arrival} label="Arrival" fullWidth required onChange={(e)=>handleData(e.target.value,"arrival")}/>
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default FlightDetails;

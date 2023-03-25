import React, {useState} from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Link} from 'react-router-dom'

const Card = ({title, duration, country, city, image, onDelete, onEdit, _id}) => {
  return (
    <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 5 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <img src={image} width={250} height={250} style={{ borderRadius: '50%' }} />
        <Typography variant="h5" sx={{ mt: 2, mb: 1, fontWeight: 'bold' }}>{title}</Typography>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>{country}, {city}</Typography>
        <Box display="flex" justifyContent="center">
          <Link to={`/detailspage/${_id}`}>
            <Button variant="contained" color="primary" sx={{ mr: 1 }}>More Details</Button>
          </Link>
          <Button onClick={onDelete} variant="contained" color="error" sx={{ ml: 1 }}><DeleteIcon sx={{ ml: 1 }} /></Button>
          <Button onClick= {onEdit} variant="contained"> <EditIcon/> </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default Card;



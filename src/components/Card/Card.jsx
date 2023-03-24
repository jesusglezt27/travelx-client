import React, {useState} from 'react';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Link} from 'react-router-dom'

const Card = ({title, duration, country, city, image, onDelete, onEdit, _id}) => {
return (
    <Paper sx={{ p: 2 }}>
    <Box  sx={{ mb: 2 }}>

        <img src={image} width={100} height={100}/>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{duration}</Typography>
        <Typography variant="body1">{country}, {city}</Typography>
        <Link to={`/detailspage/${_id}`}>
        <Typography variant="body1">More details</Typography>
        </Link>
        <Button onClick= {onDelete} variant="contained"> <DeleteIcon/> </Button>
        <Button onClick= {onEdit} variant="contained"> <EditIcon/> </Button>

    </Box>
    </Paper>
);
}


export default Card;

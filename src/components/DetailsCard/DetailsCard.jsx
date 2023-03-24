import React from 'react';
import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

const DetailsCard = ({ title, duration, country, city }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={title} subheader={duration} />
        <CardMedia
          component="img"
          height="194"
          image="https://via.placeholder.com/345x194"
          alt="Placeholder"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {country}, {city}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DetailsCard;

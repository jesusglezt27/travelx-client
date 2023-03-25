import React, {useState} from 'react';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import { uploadImage } from '../../services/upload.services';

const Details = ({handleState, details}) => {

  const [title, setTitle] = useState(details? details.title : "")
  const [duration, setDuration] = useState(details? details.duration : "")
  const [country, setCountry] = useState(details? details.country : "")
  const [city, setCity] = useState(details? details.city : "")
  const [image, setImage] = useState(null)

  const handleData = (value, key)=>{
    switch (key) {
      case 'title':
      setTitle(value)
      handleState(value, key)
        break;
      case 'duration':
        setDuration(value)
        handleState(value, key)
    
        break;
      case 'country':
        setCountry(value)
        handleState(value, key)
        
        break;
      case 'city':
        setCity(value)
        handleState(value, key)

        break;
    }
  }
  const handleImage = async(e)=>{
    try {
        if(!e.target.files || e.target.files.length === 0){
            return
        }

        const formData = new FormData();
        formData.append("image",e.target.files[0] )
        const response = await uploadImage(formData)
        handleState(response.data.imgUrl, "image")
    } catch (error) {
        console.log("error:",error)
    }
}

  return (
    <Box sx={{ maxWidth: '960px', mx: 'auto', px: 2 }}>
      <Typography variant="h4" align="center" sx={{ py: '2rem' }}>
        New Trip
        <AddPhotoAlternate sx={{ ml: '1rem', fontSize: '2rem' }} />
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField value={title} label="Title" fullWidth required onChange={(e)=>handleData(e.target.value,"title")}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField value={duration} label="Duration" fullWidth required onChange={(e)=>handleData(e.target.value,"duration")} type="number"/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField value={country} label="Country" fullWidth required onChange={(e)=>handleData(e.target.value,"country")}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField value={city} label="City" fullWidth required onChange={(e)=>handleData(e.target.value,"city")}/>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              component="label"
              startIcon={<AddPhotoAlternate />}
              fullWidth
            >
              Upload photo
              <input onChange={handleImage} type="file" hidden />
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Details;

import React, { useState } from 'react';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import { uploadImage } from '../../services/upload.services';

const Activities = ({handleState, activities = [] }) => {
  const [title, setTitle] = useState(activities.length?activities[0].title:"");
  const [date, setDate] = useState(activities.length?activities[0].date:"");
  const [location, setLocation] = useState(activities.length?activities[0].location:"");
  const [time, setTime] = useState(activities.length?activities[0].time:"");
  const [note, setNote] = useState(activities.length?activities[0].note:"");

  const handleData = (value, key)=>{
    switch (key) {

      case 'title':
      setTitle(value)
      handleState(value, key)

        break;
      case 'date':
        setDate(value)
        handleState(value, key)
    
        break;
      case 'location':
        setLocation(value)
        handleState(value, key)
        
        break;
      case 'time':
        setTime(value)
        handleState(value, key)

        break;
      case 'note':
        setNote(value)
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
        handleState(response.data.imgUrl, "img_url")
    } catch (error) {
        console.log("error:",error)
    }
}


  return (
    <Box sx={{ maxWidth: '960px', mx: 'auto', px: 2 }}>
      <Typography variant="h4" align="center" sx={{ py: '2rem' }}>
        Activities
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <TextField 
value={title} 
label="Title" 
fullWidth 
required 
onChange={(e)=>handleData(e.target.value,"title")}
/>
</Grid>
<Grid item xs={12} sm={6}>
<TextField 
           value={date} 
           label="Date" 
           fullWidth 
           required 
           onChange={(e)=>handleData(e.target.value,"date")} 
         />
</Grid>
<Grid item xs={12} sm={6}>
<TextField 
           value={location} 
           label="Location" 
           fullWidth 
           required 
           onChange={(e)=>handleData(e.target.value,"location")}         />
</Grid>
<Grid item xs={12} sm={6}>
<TextField 
           value={time} 
           label="Time" 
           fullWidth 
           required 
           onChange={(e)=>handleData(e.target.value,"time")}
           />
</Grid>
<Grid item xs={12}>
<Button
variant="outlined"
component="label"
startIcon={<AddPhotoAlternate />}
fullWidth
>
Upload photo
<input type="file" hidden onChange={handleImage}/>
</Button>
</Grid>
<Grid item xs={12}>
<TextField
           value={note}
           onChange={(e)=>handleData(e.target.value,"note")}
           label="Note"
           multiline
           fullWidth
           rows={4}
         />
</Grid>
</Grid>
</Paper>
</Box>
);
};

export default Activities;

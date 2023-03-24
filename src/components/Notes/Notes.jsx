import React, { useState } from 'react';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';


function Notes({handleState}){
    const [notes, setNotes] = useState("")

    const handleData = (value, key)=>{
        switch (key) {
        case 'notes':
        setNotes(value)
        handleState(value, key)
            break;
        }
    }

    return(
        <Box sx={{ maxWidth: '960px', mx: 'auto', px: 2 }}>
        <Typography variant="h4" align="center" sx={{ py: '2rem' }}>
        Notes
        </Typography>
        <Grid item xs={12}>
        <TextField
        value={notes}
        label="Note"
        multiline
        fullWidth
        rows={4}
        />
        </Grid>
        </Box>


    )
}

export default Notes;
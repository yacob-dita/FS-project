import React from 'react';
import { Typography,Button } from '@mui/material';
import { Box } from '@mui/system';
import {Link } from 'react-router-dom';
const Home = () => {
    return (
     <div>
        <Box display = "flex" flex-direction ="column" alignItems="center">
         <Button linkComponent={Link} to="/books" sx={{ marginTop:15,backgroundColor:'orangered'}} variant="contained">
             <Typography variant="h3">View All Product</Typography>
         </Button>
        </Box>
    </div>
    )
};
export default Home;
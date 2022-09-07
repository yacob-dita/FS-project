import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
const About = () => {
return(
    <div>
        <Box display="flex" flex-direction="column" alignItems="center">
           <Typography sx={{fontFamily: "fantasy"}} variant="h2">
               This is a CRUD Application
           </Typography>
           <Typography  sx={{fontFamily: "fantasy"}} variant="h3">
               By FULL STACK
           </Typography>
        </Box>
    </div>
    );
};
export default About;
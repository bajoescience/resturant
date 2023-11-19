import { Box, Typography } from "@mui/material";

// This homescreen holds the all-important picture
const HomeScreen = ({homeImage}) => {
    return (
        <Box position={'relative'}>
          {homeImage
            ? <Box
                component={'img'}
                src={homeImage.img}  
                height={'90vh'} 
                width={'100%'} 
                alt={homeImage.title}
                 />
            : <p>Joe's Resturant</p>
          }
          <Box position={'absolute'} top={'50%'} left={'50%'} sx={{transform: 'translate(-50%, -50%)'}}>
            <Typography variant="h2">
              {homeImage.title}
            </Typography>
          </Box>
        </Box>
    )
}

export default HomeScreen
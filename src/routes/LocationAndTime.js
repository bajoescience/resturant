import { Box, Typography } from "@mui/material"
import MuiLocations from "../muicomponents/MuiLocations"

const LocationAndTime = ({locations}) => {
  
    return (
        <Box flexGrow={1}>
          <Typography variant="h4" component={'div'} p={2} fontWeight={'bold'}>
            Hours and Locations
          </Typography>
          <MuiLocations locations={locations} />
        </Box>
    )
}

export default LocationAndTime
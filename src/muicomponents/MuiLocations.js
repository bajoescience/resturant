import { Box, Typography } from "@mui/material"
import MenuButton from "../components/MenuButton"

const MuiLocations = ({locations}) => {
  const locationsToDisplay = () => {
    return (
      <Box>
        <Box p={2}>
          <Typography variant="subtitle1" >{locations?.address || 'Address goes here'}</Typography>
        </Box>
        <Box p={2}>
          <Typography fontWeight={'bold'}>Lunch</Typography>
          <Typography >Thursday - Sunday</Typography>
          <Typography >Noon onwards</Typography>
        </Box>
        
        <Box p={2}>
          <Typography fontWeight={'bold'}>Dinner</Typography>
          <Typography >Nightly</Typography>
          <Typography >5PM onwards</Typography>
        </Box>
        <Box p={2}>
          <Typography fontWeight={'bold'}>Golden Hour</Typography>
          <Typography>Thursday - Sunday</Typography>
          <Typography letterSpacing={1}>3-6 PM</Typography>
        </Box>
      </Box>
    )
  }
  return (
    <Box p={2}>
        {locationsToDisplay()}
        <MenuButton />
    </Box>
  )
}

export default MuiLocations
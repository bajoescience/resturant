import { Box, Typography } from "@mui/material"
import MuiAbout from "../muicomponents/MuiAbout"

const About = ({about}) => {
    return (
        <Box textAlign={'center'}>
          <Typography variant="h4" component={'div'} p={2} fontWeight={'bold'}>
            Our Story
          </Typography>
          <MuiAbout about={about} />
        </Box>
    )
}

export default About
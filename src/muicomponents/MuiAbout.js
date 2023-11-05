import { Box, Typography } from "@mui/material"
import MenuButton from "../components/MenuButton"

const MuiAbout = ({about}) => {
  return (
    <Box p={5} pl={15} pr={15} pt={3}>
        <Typography variant="body1">
            {about || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat interdum nulla, eget laoreet mi commodo id. Etiam ac augue odio. Vestibulum sed mauris imperdiet, gravida ex vitae, volutpat mauris. Donec venenatis, justo a sodales convallis, metus mauris sagittis massa, in aliquet massa tellus ut eros. Nulla facilisi. Nullam imperdiet, metus id convallis blandit, sem diam elementum metus, quis gravida urna nibh eget mauris. Etiam eget sapien sodales, vestibulum ligula non, elementum ipsum. Fusce molestie commodo lorem, nec tempor augue molestie hendrerit. Proin mauris felis, ultrices ut augue id, mollis fermentum enim. Quisque venenatis magna a enim molestie, ac hendrerit ligula commodo. Morbi elit leo, molestie a tellus eu, venenatis feugiat urna. Curabitur vitae ante sit amet nisi ultrices posuere. Pellentesque egestas sapien sit amet metus placerat, nec consequat elit fermentum. Vivamus lorem felis, consequat in porttitor ut, luctus at odio. Nullam ut molestie erat. Sed scelerisque tortor non malesuada iaculis.'}
        </Typography>
        <MenuButton />
    </Box>
  )
}

export default MuiAbout
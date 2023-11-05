import MuiGrid from "../muicomponents/MuiGrid"
import { Box } from "@mui/material"

// Handle the promotional container for the homepage
const PromoContainer = ({list}) => {
    return (
        <Box>
          {/**Six Grid Items go here */}
          <MuiGrid list={list} />
        </Box>
    )
}

export default PromoContainer
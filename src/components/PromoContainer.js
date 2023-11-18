import MuiGrid from "../muicomponents/MuiGrid"
import { Box } from "@mui/material"

// Handle the promotional container for the homepage
const PromoContainer = ({list, outlet}) => {
    return (
        <Box>
          {/**Six Grid Items go here */}
          <MuiGrid list={list} outlet={outlet} />
        </Box>
    )
}

export default PromoContainer
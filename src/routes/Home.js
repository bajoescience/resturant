import { Box, Stack } from "@mui/material"
import HomeScreen from "../components/HomeScreen"
import PromoContainer from "../components/PromoContainer"
import { useOutletContext } from "react-router-dom"

// Handles the homepage route
const Home = ({homeImage, list}) => {
    const outlet = useOutletContext()
    console.log(outlet);
    return (
      <Box>
        <Stack>
          <div>
            <HomeScreen homeImage={homeImage} />
          </div>
          <div>
            <PromoContainer list={list} outlet={outlet} />
          </div>
        </Stack>
      </Box>
    )
  }

export default Home
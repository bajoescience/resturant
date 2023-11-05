import { Box, Stack } from "@mui/material"
import HomeScreen from "../components/HomeScreen"
import PromoContainer from "../components/PromoContainer"

// Handles the homepage route
const Home = ({homeImage, list}) => {
    return (
      <Box>
        <Stack>
          <div>
            <HomeScreen homeImage={homeImage} />
          </div>
          <div>
            <PromoContainer list={list} />
          </div>
        </Stack>
      </Box>
    )
  }

export default Home
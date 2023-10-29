import HomeScreen from "../components/HomeScreen"
import PromoContainer from "../components/PromoContainer"

// Handles the homepage route
const Home = () => {
    return (
      <>
        <div>
          <div>
            <HomeScreen />
          </div>
          <div>
            <PromoContainer />
          </div>
        </div>
      </>
    )
  }

export default Home
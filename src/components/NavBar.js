import { Link } from "react-router-dom"
import MuiNavbar from "../muicomponents/MuiNavbar"
import { useNavigate } from "react-router-dom"

// The navbar position is always fixed no matter how we scroll
const NavBar = ({user}) => {
    const navigate = useNavigate()

    // Handle all navigation links routing
    const handleClicks = {
      home: () => {
        navigate('/resturant')
      },
      menu: () => {
        navigate('/resturant/menu')
      },
      location: () => {
        navigate('/resturant/location')
      },
      about: () => {
        navigate('/resturant/about');
      },
      users: () => {
        navigate('/resturant/users/' + user?.id);
      },
      reserve: () => {
        navigate('/resturant/reservation');
      }
    }
 
    return (
        <>
          <MuiNavbar handleClicks={handleClicks} user={user}/>
        </>
    )
}

export default NavBar

import { useNavigate } from "react-router-dom"
import MenuButton from "./MenuButton"

// Handle the promotional container for the homepage
const PromoContainer = () => {
  const navigate = useNavigate()

  const handleClick = (e) => {
    navigate('menu')
  }
    return (
        <>
          <div>
            <p>This contains the promotional details of the resturant</p>
          </div>
          <div>
            <MenuButton />
          </div>
        </>
    )
}

export default PromoContainer
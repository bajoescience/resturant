import { useLoaderData, useNavigate, useOutletContext, Outlet } from "react-router-dom"
import ReserveButton from "../components/ReserveButton"

const Menus = () => {
  // Keep all menu categories in state
    const navigate = useNavigate()


    // Fetch all data from parent route
    const context = useOutletContext()

    // Get menus from db and save to state
    const menuList = useLoaderData()

    // Create a new context consisting of
    // The data from the parent and current route
    context.app.menus = menuList

    const handleClick = (e) => {
      const urlString = e.target.value
      navigate('/resturant/menu/' + urlString)
    }

    return (
        <>
          <h2>This is the menu page</h2>
          <div>
            <h4>Check Out Our Menu</h4>
          </div>
          <button onClick={handleClick} value={''}>
            Food
          </button>
          <button onClick={handleClick} value={'bbq'}>
            BBQ
          </button>
          <button onClick={handleClick} value={'drinks'}>
            Drinks
          </button>
          <div>
            <Outlet context={context}/>
          </div>
          <ReserveButton />
        </>
    )
}

export default Menus
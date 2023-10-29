import { useMatch, useOutletContext } from "react-router-dom"
import Menu from "../components/Menu"

const MenuCategories = () => {
    const context = useOutletContext()

    // Check if route matches any of these
    const isBbqMatch = useMatch('/menu/bbq')
    const isDrinksMatch = useMatch('/menu/drinks')

    // Default route
    const isFoodsMatch = useMatch('/menu/')
    
    // If route matches, send only the match parameter to
    //  Route belonging to the matched route
    const checkMenuUrl = () => {
        if (isBbqMatch) {
          return isBbqMatch
  
        } else if (isDrinksMatch) {
          return isDrinksMatch
  
        } else if (isFoodsMatch) {
          return isFoodsMatch
        }
      }
     
      // Get the menu category from match urlpathname
      const match = checkMenuUrl()

      // Pathname check the path of the menu url
      // If it is null, we know that it is the default page foods
      const pathname = match.pathname.substring(6) || 'foods'
      const menu = context.app.menus[0][pathname]
      
    return (
        <>
          <div>
            {menu.map(m => <Menu key={m.id} menu={m}/>)}
          </div>
        </>
    )
}

export default MenuCategories
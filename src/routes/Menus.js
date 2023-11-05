import { useLoaderData, useNavigate, useOutletContext, Outlet } from "react-router-dom"
import ReserveButton from "../components/ReserveButton"
import MuiMenuTabs from "../muicomponents/MuiMenuTabs"
import { useState } from "react"
import { Box, Typography } from "@mui/material"

const Menus = () => {
  // Keep the type of menu to show in state
  const [selectedValue, setSelectedValue] = useState()

  // Keep all menu categories in state
  const navigate = useNavigate()


  // Fetch all data from parent route
  const context = useOutletContext()

  // Get menus from db and save to state
  const menuList = useLoaderData()

    // Create a new context consisting of
    // The data from the parent and current route
    context.app.menus = menuList
    context.app.setSelectedValue = setSelectedValue

    const handleClick = (value) => {
      const urlString = value
      setSelectedValue(urlString)
      navigate('/resturant/menu/' + urlString)
    }

    return (
        <Box>
          <Box textAlign={'center'} color={'secondary.main'} m={2} mt={1}>
            <Typography 
              variant="h5" 
              fontWeight={'bold'} 
              component={'div'} 
              p={2}>
                Menu
            </Typography>
          </Box>
          <MuiMenuTabs handleClick={handleClick} selectedValue={selectedValue}/>
          <div>
            <Outlet context={context}/>
          </div>
        </Box>
    )
}

export default Menus
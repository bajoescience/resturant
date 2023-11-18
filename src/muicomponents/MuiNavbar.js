import React, { useState } from 'react'
import {AppBar, IconButton, Toolbar, Typography, Stack, Button, Menu, MenuItem} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { useNavigate } from "react-router-dom"


const MuiNavbar = ({user, viewportWidth}) => {
  const [anchorEl, setAnchorEl] = useState()
  const open = Boolean(anchorEl)
  const navigate = useNavigate()

  // Handle all navigation links routing
  const handleClicks = {
    home: () => {
      navigate('/resturant')
    },
    menu: () => {
      navigate('/resturant/menu')
      setAnchorEl(null)
    },
    location: () => {
      navigate('/resturant/location')
      setAnchorEl(null)
    },
    about: () => {
      navigate('/resturant/about');
      setAnchorEl(null)
    },
    users: () => {
      navigate('/resturant/users/' + user?.id);
      setAnchorEl(null)
    },
    reserve: () => {
      navigate('/resturant/reservation');
      setAnchorEl(null)
    }
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  // Render for deaktop sized screens
  const normalNav = () => {
    return (
      <>
        <Stack direction={'row'} spacing={{xs: 0, sm: user ? 4: 5}}>
          <Button color='inherit' onClick={handleClicks.menu}>Menus</Button>
          <Button color='inherit' onClick={handleClicks.location}>Hours and Locations</Button>
          <Button color='inherit' onClick={handleClicks.about}>About Us</Button>
          {user && <Button color='inherit' onClick={handleClicks.users}>Your Reservations</Button>}
          <Button variant='outlined' color='inherit' onClick={handleClicks.reserve}>Reserve</Button>
        </Stack>
      </>
    )
  }

  const normalMenu = () => {
    return (
      <>
        <IconButton onClick={handleClick}>
          <AccountCircle />
        </IconButton>
        <Menu anchorEl={anchorEl} color='inherit' open={open} onClose={handleClose}>
          <MenuItem onClick={handleClicks.menu}>Menus</MenuItem>
          <MenuItem onClick={handleClicks.location}>Hours and Locations</MenuItem>
          <MenuItem onClick={handleClicks.about}>About Us</MenuItem>
          {user && <MenuItem onClick={handleClicks.users}>Your Reservations</MenuItem>}
          <MenuItem onClick={handleClicks.reserve}>Reserve</MenuItem>
        </Menu>
      </>
    )
  } 
  return (
    <>
      <AppBar position='sticky' sx={{color: 'secondary.main', backgroundColor: 'primary.main'}} >
        <Toolbar>
             <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={handleClicks.home}>
                <RestaurantIcon />
             </IconButton>
             {/**App name */}
             <Typography variant={'h6'} component={'div'} sx={{flexGrow: 1}} onClick={handleClicks.home}>
                JOE'S RESTURANT
             </Typography>
             {viewportWidth > 900 ? normalNav() : normalMenu()}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default MuiNavbar
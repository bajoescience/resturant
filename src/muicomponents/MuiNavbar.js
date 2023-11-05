import React from 'react'
import {AppBar, IconButton, Toolbar, Typography, Stack, Button} from '@mui/material'
import RestaurantIcon from '@mui/icons-material/Restaurant';

const MuiNavbar = ({user, handleClicks}) => {
  return (
    <>
      <AppBar position='sticky' sx={{color: 'secondary.main', backgroundColor: 'primary.main'}} >
        <Toolbar>
             <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={handleClicks.home}>
                <RestaurantIcon />
             </IconButton>
             {/**App name */}
             <Typography variant='h6' component={'div'} sx={{flexGrow: 1}} onClick={handleClicks.home}>
                JOE'S RESTURANT
             </Typography>
             <Stack direction={'row'} spacing={user ? 4: 5}>
                <Button color='inherit' onClick={handleClicks.menu}>Menus</Button>
                <Button color='inherit' onClick={handleClicks.location}>Hours and Locations</Button>
                <Button color='inherit' onClick={handleClicks.about}>About Us</Button>
                {user && <Button color='inherit' onClick={handleClicks.users}>Your Reservations</Button>}
                <Button variant='outlined' color='inherit' onClick={handleClicks.reserve}>Reserve</Button>
             </Stack>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default MuiNavbar
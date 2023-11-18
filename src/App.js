import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";

// This function acts as a container for the app
// Such that functions can be created here and be passed
// To the rest of the app to keep things neat and tidy
const App = ({locations}) => {
  // Store the app's viewport width in react state
  const [viewportWidth, setViewportWidth] = useState()

  // Set initial value of viewport-Width to viewport
  useEffect(() => {
    setViewportWidth(window.visualViewport.width)
  }, [])

  // Set theme to whatever we like
  const theme = createTheme({
    palette: {
      primary: {
        main: '#dddddd'
      },
      secondary: {
        main: '#666666'
      }
    }
  })

  // In order to create a micro frontend
  // Every route will handle it's own state
  // This component is simply a container for the whole app
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUser = localStorage.getItem('knownUser')

    if (loggedUser) {
      const userToSave = JSON.parse(loggedUser)
      setUser(userToSave)
    }
  }, [])
  

  // Object to pass data to lower route components
  const context = {
    app: {
      data: 'This are details from the App component',
    },
    user,
    setUser,
    viewportWidth
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack
      bgcolor={'primary.main'} 
      color={'secondary.main'}
      position={'relative'}
      minHeight={'100vh'}
      >
        {/** Every route has the same Navbar, so Navbar comes here */}
        <NavBar user={user} viewportWidth={viewportWidth} />
        <Box textAlign={'center'} pb={15}>
          <Outlet context={context}/>
        </Box>
        <Box position={'absolute'} bottom={0} mb={-0.7} width={'100%'}>
          <Footer locations={locations} />
        </Box>
      </Stack>
    </ThemeProvider>
  )
  
}

export default App;
